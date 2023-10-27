import { createConnection } from "mysql";
import express, { json } from 'express'
import cors from 'cors'
import multer from "multer";
import path from 'path'
import session from "express-session";
import cookieParser from "cookie-parser";
import bcrypt from 'bcrypt'


const app = express()
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors({
  origin:["http://localhost:5173"],
  methods:['GET','POST'],
  credentials:true
}))

app.use(session({
  key:'user',
  secret:'amit123',
  resave:false,
  saveUninitialized:false,
  cookie:{
      maxAge:60 * 60 * 24,
  }
}))


const db = createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'amit'
})

db.connect((err)=>{
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
      }
    console.log('Connected to MySQL as id ' + db.threadId);
})

app.get('/',(req,res)=>{
    res.send("hello")
})



const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'public/images')
  },

  filename:(req,file,cb)=>{
    cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({
  storage:storage
})



// ------------------------------------------------Auth----------------------------------------------------

app.post('/login',(req,res)=>{
    const {username,password} = req.body
    
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, result) => {
        if (error) {
          res.status(500).send('Internal server error');
        } 
        else {
          if (result.length > 0) {
            req.session.user = result
            res.json(req.session.user);
          } 
          else {
            res.send('User not found');
          }
        }
      });
    
})

app.get('/logout',(req,res)=>{
  try {
    req.session.destroy((err)=>{
      if(err)
      {
        res.status(500).send('Error')
      }
      else
      {
        res.send("ok")
      }
    })
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

app.get('/curuser',(req,res)=>{
  try {
    if(req.session.user)
    {
        res.send(req.session.user)
    }
    else
    {
      res.send("not found")
    }
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
  
})



//--------------------------------------List Users-----------------------------------------------------

app.get('/users',(req,res)=>{
  try {
    db.query("select id, first_name, last_name, username, DATE_FORMAT(date_added, '%Y-%m-%d') AS date_only from users",(err,result)=>{
      if(err)
      {
        res.status(500).send('A database error')
      }
      res.send(result)
    })
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})




// -------------------------------------inquires-----------------------------------------=--------------
app.get('/inquires', async(req,res)=>{
  try {
     db.query("SELECT id, fullname, email, contact, message, DATE_FORMAT(date_added, '%Y-%m-%d') AS date_only FROM requests",(err,result)=>{
      if(err)
      {
        res.status(500).send("internal database error")
      }
      res.send(result);
    })
  } catch (error) {
    res.status(500).send("internal server error")
  }
})

app.post('/contact',(req,res)=>{
    const {fullname,email,contact,message} = req.body
    db.query('INSERT INTO requests (fullname, email, contact, message, status, date_added) VALUES (?, ?, ?, ?, ?, curdate())', [fullname, email, contact, message, 0],(error, results, fields) => {
        if (error) throw error;
        res.send("ok")
      })
})

// ---------------------------------------------Animals------------------------------------------------

app.post('/addani',upload.single('image'),(req,res)=>{
  const{file,body} = req
  // console.log(file);
  const {cageno, animalName, description, status} = body
  try {
      db.query('insert into animals (cage_no, name, description, status, date_added, image_path) values (?, ?, ?, ?, curdate(), ?)', [cageno, animalName, description, status, file.path],(err,result)=>{
        if(err)
        {
          res.status(500).send('A Database error')
        }
        res.send(result)
      })
    
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

app.get('/addani',(req,res)=>{

  try {
    
      db.query('select * from animals',(err,result)=>{
        if(err)
        {
          res.status(500).send('Database Error')
        }
        res.send(result)
      })
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})


app.get('/aninfo',(req,res)=>{
  const {id} = req.query
  // console.log(id);
  try {
      db.query('select * from animals where id=?',[id],(err,result)=>{
        if(err)
        {
          res.status(500).send('Database Error')
        }
        res.send(result);
      })
    
  } catch (error) {
    console.log('error');
    res.status(500).send('Internal Server Error')
    
  }
})

// --------------------------------------------Image Upload-------------------------------------------



app.post('/upload',upload.single('image'),(req,res)=>{
  console.log(req.file);
  try {
    res.send(req.file.filename)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})


// ------------------------------------------------END--------------------------------------------------

app.listen(4000,()=>{
    console.log("connected");
})
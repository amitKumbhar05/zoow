import { useDispatch, useSelector } from 'react-redux';
import {Navbar,Footer} from '../src/components'
import {Home,ContactUs,AboutUs,Login} from "./pages";
import {Outlet} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { login } from './store/AuthSlice';
axios.defaults.withCredentials=true

export default function App() {
  const dispatch = useDispatch()

  const ad = localStorage.getItem('adult')
  const ch = localStorage.getItem('child')
  
  if(!ad) localStorage.setItem('adult',useSelector(state=>state.price.adult))
  if(!ch) localStorage.setItem('child',useSelector(state=>state.price.child))

  useEffect(()=>{
    axios.get('http://localhost:4000/curuser')
    .then((res)=>{
      if(res.data!=="not found")
      {
        dispatch(login(res.data[0]))
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div className='min-h-screen'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
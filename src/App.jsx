import {Navbar,Footer} from '../src/components'
import {Home,ContactUs,AboutUs,Login} from "./pages";

import {Outlet} from 'react-router-dom'


export default function App() {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
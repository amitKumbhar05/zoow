import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Home, ContactUs, AboutUs, Login, Animals,
  Admin, Inquires, Users, AnimalList, Addanimal,
  Animalinfo, Signup, BuyTicket, ChangePrice, ShowTicket,
  Dash
} from './pages/'
import { Provider } from 'react-redux'
import store from './store/Store.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/animals',
        element: <Animals />
      },
      {
        path: '/animalinfo/:id',
        element: <Animalinfo />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/buy',
        element: <BuyTicket />
      },
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: '/admin',
        element: <Dash />
      },
      {
        path: '/admin/inquires',
        element: <Inquires />
      },
      {
        path: '/admin/users',
        element: <Users />
      },
      {
        path: '/admin/animallist',
        element: <AnimalList />,
      },
      {
        path: '/admin/addanimal',
        element: <Addanimal />
      },
      {
        path: '/admin/chprice',
        element: <ChangePrice />
      },
      {
        path: '/admin/showticket',
        element: <ShowTicket />
      },
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import GetEmployees from './Components/GetEmployees.jsx'
import Navbar from './Components/Navbar.jsx'
import AddEmployee from './Components/AddEmployee.jsx'
import Home from './Components/Home.jsx'
import UpdateEmployee from './Components/UpdateEmployee.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}> 
      <Route path="" element={<Home />} />
      <Route path="addemployee" element={<AddEmployee />} /> 
      <Route path="getemployees" element={<GetEmployees />} />
      <Route path="updateEmployee/:id" element={<UpdateEmployee />} />
    </Route>
)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

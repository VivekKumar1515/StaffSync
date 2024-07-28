import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex bg-indigo-300 font-semibold px-5 py-2 justify-between'>
        <h3 className='text-2xl'>Welcome to Employee Management System</h3>
        <nav className='my-auto space-x-6'>
          <NavLink to="/addEmployee" className={({isActive}) =>
                                      `border-gray-400 border-2 p-1 rounded-lg shadow-sm
                                      ${isActive? "border-orange-800" : "text-gray-700"}`
                                  } >         
          Add Employee</NavLink>
          <NavLink to="/getEmployees" className={({isActive}) =>
                                      `border-gray-400 border-2 p-1 rounded-lg shadow-sm
                                      ${isActive? "border-orange-800" : "text-gray-700"}`
                                  }>Get Employees</NavLink>
        </nav>
    </div>
  )
}

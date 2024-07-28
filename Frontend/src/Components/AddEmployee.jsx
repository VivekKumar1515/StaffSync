import React, { useState } from 'react'
import EmployeeService from '../Services/EmployeeService'

export default function AddEmployee() {

    const [name, setName] = useState("")
    const[surname, setsurName] = useState("")
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")


    function addEmp(e) {
      e.preventDefault();
      let employee = {employeeName: name, employeeSurname: surname, employeeEmail: email, employeePhone: phone};
      const employeeService = new EmployeeService();
      employeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response)
        if(response.status === 200) {
          alert("Employee added successfully");
        }
      }).catch((error) => {
        console.error(error);
      });
    }

    function clear(e) {
        e.preventDefault();
        setName("")
        setsurName("")
        setEmail("")
        setPhone("")
    }

  return (
    <div className='w-[600px] mx-auto shadow bg-gray-400 mt-[15rem] rounded-lg py-10 px-5 text-[1.1rem]'>
            <p className='font-semibold text-2xl text-center mt-[-10px] mb-10 bg-indigo-500 rounded-md py-2 w-[300px] mx-auto'>Add Employee's Details</p>
            <form action="" method="post">
            <div className='flex justify-between p-5 font-semibold'>
            <label>Employee Name</label>
            <input type="text" name="employeeName" className='border px-2 border-none rounded-md hover:border-blue-300 py-[0.35rem]' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name'/>
            </div>
            <div className='flex justify-between p-5 font-semibold'>
            <label>Employee Surname</label>
            <input type="text" name="employeeSurname" className='border px-2 border-none rounded-md hover:border-blue-300 py-[0.35rem]' value={surname} onChange={(e) => setsurName(e.target.value)} placeholder='Enter Surname'/>
            </div>
            <div className='flex justify-between p-5 font-semibold'>
            <label>Employee Email</label>
            <input type="email" name="employeeName" className='border px-2 border-none rounded-md hover:border-blue-300 py-[0.35rem]' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/>
            </div>
            <div className='flex justify-between p-5 font-semibold'>
            <label>Employee Phone</label>
            <input type="text" name="employeePhone" className='border px-2 border-none rounded-md hover:border-blue-300 py-[0.35rem]' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Phone'/>
            </div>
            <div className='space-x-20 px-5 mt-10 text-center'>
                <button className='bg-red-300 py-1 px-7 rounded-md font-medium border-2 border-transparent hover:border-blue-400 duration-[0.4s]' onClick={(e) => addEmp(e)}>Add</button>
                <button className='bg-red-300 py-1 px-7 rounded-md font-medium border-2 border-transparent hover:border-blue-400 duration-[0.4s]' onClick={(e) => clear(e)}>Clear</button>
            </div>
            </form>
    </div>
  )
}

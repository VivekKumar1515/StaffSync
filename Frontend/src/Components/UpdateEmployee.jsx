import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService';

export default function () {

    const {id} = useParams();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const service = new EmployeeService;
    
    
    useEffect(() => {
        const fetchData = async () => {
        
            try {
                const response = await service.getEmployeeById(id);
                console.log(response.data)
                setName(response.data.employeeName);
                setSurname(response.data.employeeSurname);
                setEmail(response.data.employeeEmail);
                setPhone(response.data.employeePhone);
            } catch(erorr) {
                console.error(erorr);
            }
        }

        fetchData();
    }, [])

    
    function updateEmp(e) {
        e.preventDefault();
        service.updateEmployee(id, employee);
        
    }

    const employee = {
        employeeName : name,
        employeeSurname : surname,
        employeeEmail : email,
        employeePhone : phone
    };

  return (
    <div>
        <div className='w-[600px] mx-auto shadow bg-gray-400 mt-[15rem] rounded-lg py-10 px-5 text-[1.1rem]'>
            <p className='font-semibold text-2xl text-center mt-[-10px] mb-10 bg-indigo-500 rounded-md py-2 w-[300px] mx-auto'>Update Employee's Details</p>
            <form action="" method="post">
            <div className='flex justify-between p-5 font-semibold'>
            <label>Employee Name</label>
            <input type="text" name="employeeName" className='border px-2 border-none rounded-md hover:border-blue-300 py-[0.35rem]' defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name'/>
            </div>
            <div className='flex justify-between p-5 font-semibold'>
            <label>Employee Surname</label>
            <input type="text" name="employeeSurname" className='border px-2 border-none rounded-md hover:border-blue-300 py-[0.35rem]' defaultValue={surname} onChange={(e) => setSurname(e.target.value)} placeholder='Enter Surname'/>
            </div>
            <div className='flex justify-between p-5 font-semibold'>
            <label>Employee Email</label>
            <input type="email" name="employeeName" className='border px-2 border-none rounded-md hover:border-blue-300 py-[0.35rem]' defaultValue={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/>
            </div>
            <div className='flex justify-between p-5 font-semibold'>
            <label>Employee Phone</label>
            <input type="text" name="employeePhone" className='border px-2 border-none rounded-md hover:border-blue-300 py-[0.35rem]' defaultValue={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Phone' can/>
            </div>
            <div className='space-x-20 px-5 mt-10 text-center'>
                <button className='bg-red-300 py-1 px-7 rounded-md font-medium border-2 border-transparent hover:border-blue-400 duration-[0.4s]' onClick={(e) => updateEmp(e)}>Update</button>
                <button className='bg-red-300 py-1 px-7 rounded-md font-medium border-2 border-transparent hover:border-blue-400 duration-[0.4s]' onClick={(e) => clear(e)}>Cancel</button>
            </div>
            </form>
    </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import EmployeeService from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export default function GetEmployees() {

  const [change, setChange] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const service = new EmployeeService();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await service.getEmployees()
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };
    fetchData();
  }, [change])

  async function deleteEmp(e, id) {
    e.preventDefault();
    try {
      const response = await service.deleteEmployee(id)
      if(response.status === 200) {
        alert("Employee deleted successfully")
        setChange(!change);
      }
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div className='mt-5'>
        <table className='w-screen'>
          <thead>
          <tr className='border-b-2 text-xl tracking-widest bg-[#6f99d8]'>
            <th className='text-gray-700 pb-2'>Name</th>
            <th className='text-gray-700 pb-2'>Surname</th>
            <th className='text-gray-700 pb-2'>Email</th>
            <th className='text-gray-700 pb-2'>Phone</th>
            <th className='text-gray-700 pb-2'>Action</th>
          </tr>
          </thead>
          <tbody className='border-b-2 text-center bg-[#9cb9bd]'>
            {!loading && (
              employees.map(employee => (
              <tr key={employee.employeeId}>
              <td className='text-gray-600 font-medium text-lg'>{employee.employeeName}</td>
              <td className='text-gray-600 font-medium text-lg' >{employee.employeeSurname}</td>
              <td className='text-gray-600 font-medium text-lg' >{employee.employeeEmail}</td>
              <td className='text-gray-600 font-medium text-lg'>{employee.employeePhone}</td>
              <td>
                <a href={`/updateEmployee/${employee.employeeId}`} className='text-sm mx-1 font-medium hover:text-indigo-700' onClick={(e) => editEmp()}>Edit</a>
                <a href="" className='text-sm mx-1 font-medium hover:text-indigo-700' onClick={(e) => deleteEmp(e, employee.employeeId)}>Delete</a>
              </td>
            </tr>)
            )
            )}
          </tbody>
        </table>
    </div>
  )
}

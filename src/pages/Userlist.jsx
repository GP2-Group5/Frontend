import React from 'react'

import Sidebar from '../components/Sidebar'

import { IconContext } from "react-icons";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

function Userlist() {
  return (
    <div className='grid grid-cols-6 w-full min-h-screen'>
      <Sidebar className="lg:col-span-1" />

      <div className='pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5'>

        <p className='text-4xl pb-5'>Immersive Dashboard</p>
        <p className='text-2xl pb-5'>User List</p>
        <div className='grid grid-cols-3 gap-6 pb-5'>
          <select class="flex w-full bg-[#242424] text-white rounded h-12 border pl-5">
            <option>Mentee</option>
            <option>Mentor</option>
            <option>yoi bro</option>
          </select>
          <select class="flex w-full bg-[#242424] text-white rounded h-12 border pl-5">
            <option >FE</option>
            <option>BE</option>
            <option>QE</option>
          </select>
          <select class="flex w-full bg-[#242424] text-white rounded h-12 border pl-5">
            <option >A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div className="overflow-x-auto bg-[#242424]">
          <table className="table rounded-xl w-full bg-[#242424]">
            <thead className=''>
              <tr>
                <th className='w-[10%]'>ID</th>
                <th className='w-[40%]'>Name</th>
                <th className='w-[15%]'>Role</th>
                <th className='w-[15%]'>Class</th>
                <th className='w-[10%]'></th>
                <th className='w-[10%]'></th>
              </tr>
            </thead>
            <tbody>

              <tr className='hover'>
                <th>1</th>
                <td>Wendy</td>
                <td>Mentee</td>
                <td>FE</td>
                <td className='items-center justify-center'><AiFillEdit /></td>
                <td ><AiFillDelete className='items-center justify-center' /></td>
              </tr>

              <tr className='hover'>
                <th>2</th>
                <td>Franky</td>
                <td>Mentee</td>
                <td>BE</td>
                <td className='items-center justify-center'><AiFillEdit /></td>
                <td><AiFillDelete /></td>
              </tr>

              <tr className='hover'>
                <th>3</th>
                <td>Bagas</td>
                <td>Mentor</td>
                <td></td>
                <td className='items-center justify-center'>
                  <IconContext.Provider value={{ color: "white", className: "items-center justify-center hover:hidden" }}>
                    <AiFillEdit />
                  </IconContext.Provider>
                </td>
                <td><AiFillDelete /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Userlist
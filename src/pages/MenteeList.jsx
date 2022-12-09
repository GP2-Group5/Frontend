import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios'

import Sidebar from '../components/Sidebar'

import { IconContext } from "react-icons";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'


function Menteelist() {

  const [mentee, setMentee] = useState('');

  const [showAdmin, setShowAdmin] = useState(true)

  const showDelete = () => {
    if (sessionStorage.getItem('role') === "user") {
      setShowAdmin(false)
    } else {
      setShowAdmin(true)
    }
  }

  const navigate = useNavigate()

  const getMentee = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')
          }`
      }
    };

    axios
      .get(
        `http://13.215.208.143:80/mentee`,
        config
      )
      .then((response) => {
        setMentee(response.data.data)
      })
      .catch((error) => console.log(error))
  }

  const deleteMentee = (mentee_id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')
          }`
      }
    };
    axios
      .delete(
        `http://13.215.208.143:80/mentee/${mentee_id}`,
        config
      )
      .then((response) => {
        console.log(response)
        // getMentee()
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getMentee();
    showDelete()
  }, [mentee]);

  const handleDetail = (item) => {
    navigate('/detail',
      {
        state: {
          item: item,
        }
      })
  }

  return (
    <div className='grid grid-cols-6 w-full min-h-screen'>
      <Sidebar className="lg:col-span-1" />

      <div className='pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5'>

        <p className='text-4xl pb-5'>Immersive Dashboard</p>
        <p className='text-2xl pb-5'>Mentee List</p>

        <div className='grid grid-cols-3 gap-6 pb-5'>
          <select class="flex w-full bg-[#242424] text-white rounded h-12 border pl-5">
            <option>Mentee</option>
            <option>Mentor</option>
            <option>yoi bro</option>
          </select>
          <select class="flex w-full bg-[#242424] text-white rounded h-12 border pl-5">
            <option>FE</option>
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
                <th className='w-[10%]'>No</th>
                <th className='w-[40%]'>Name</th>
                <th className='w-[15%]'>Status</th>
                <th className='w-[15%]'>Class</th>
                { }<th className='w-[10%]'></th>
                <th className='w-[10%]'></th>
              </tr>
            </thead>
            <tbody>
              {
                mentee ? mentee.map((item,index) => {
                  return (
                    <tr className='hover' key={item.id}>
                      <td className='w-[10%]'>{index+1}</td>
                      <td className='w-[40%]' onClick={() => handleDetail(item)}>{item.name}</td>
                      <td className='w-[15%]'>{item.status}</td>
                      <td className='w-[15%]'>{item.class}</td>
                      {showAdmin ? <td className='items-center justify-center w-[10%]'><AiFillEdit /></td> : <td className='items-center justify-center w-[10%]'></td>}
                      {showAdmin ? <td className='items-center justify-center w-[10%]' onClick={() => deleteMentee(item.id)}><AiFillDelete /></td> : <td className='items-center justify-center w-[10%]'></td>}
                    </tr>
                  )
                }) : null
              }
            </tbody>
          </table>
        </div>

      </div>
    </div >
  )
}

export default Menteelist
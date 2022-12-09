import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios'

import Sidebar from '../components/Sidebar'

function Addmentee() {

    const [creatementee, setCreatementee] = useState({
        name: "",
        address: "",
        email: "",
        gender: "",
        phone: "",
        type: "",
        major: "",
        graduate: 1,
        status_id: 1,
        class_id: 1
    });

    const postMentee = async (e) => {
        e.preventDefault();
        const { name, address, email, gender, phone, type, major, graduate, status_id, class_id } = creatementee
        axios
            .post(
                `http://13.215.208.143:80/mentee`,
                {
                    name,
                    address,
                    email,
                    gender,
                    phone,
                    type,
                    major,
                    graduate: parseInt(graduate),
                    status_id: parseInt(status_id),
                    class_id: parseInt(class_id)
                },
                {
                    headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
                }
            )
            .then((response) => {
                console.log(response)
            })
            .catch((error) => console.log(error))
    }
    return (
        <>

            <div className='grid grid-cols-6 w-full min-h-screen'>
                <Sidebar className="lg:col-span-1" />

                <div className='pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5'>

                    <p className='text-4xl pb-5'>Immersive Dashboard</p>
                    <p className='text-2xl pb-5'>Add Mentee</p>
                    <form class="w-4/5" onSubmit={(e) => postMentee(e)}>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Name
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Nohara Shinosuke" onChange={e => setCreatementee({ ...creatementee, name: e.target.value })} />
                            </div>
                        </div >
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Address
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jalan Mangga Dua" onChange={e => setCreatementee({ ...creatementee, address: e.target.value })} />
                            </div>
                        </div >
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Email
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="abc@mail.com" onChange={e => setCreatementee({ ...creatementee, email: e.target.value })} />
                            </div>
                        </div >
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Phone
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="+6281234566542" onChange={e => setCreatementee({ ...creatementee, phone: e.target.value })} />
                            </div>
                        </div >
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Status
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <select class="flex w-full bg-[#242424] text-white rounded h-12 border pl-5" onChange={e => setCreatementee({ ...creatementee, status_id: e.target.value })}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                </select>
                            </div>
                        </div >
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Class
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <select class="flex w-full bg-[#242424] text-white rounded h-12 border pl-5" onChange={e => setCreatementee({ ...creatementee, class_id: e.target.value })}>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                        </div >

                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3">
                                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                    Add Mentee
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Addmentee
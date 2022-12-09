import React from 'react'
import { AiFillCodeSandboxSquare } from 'react-icons/ai'

import { useState, useEffect } from 'react'
import { Navigate, BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'

import Sidebar from '../components/Sidebar'
//https://genshin.honeyhunterworld.com/img/yae_058_icon.webp
function Detail() {

    const location = useLocation()
    const navigate = useNavigate()

    var item = location?.state?.item

    const id = item.id

    const [comment, setComment] = useState("")
    const [show, setShow] = useState("");

    const getComment = async (id) => {
        const config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')
                    }`
            }
        };
        //`http://13.215.208.143:80/${id}/log`,
        axios
            .get(
                `http://13.215.208.143:80/mentee/39/log`,
                config
            )
            .then((response) => {
                setShow(response.data.data.log)
            })
            .catch((error) => console.log(error))
    }

    const postComment = async (e, id) => {
        e.preventDefault();
        axios
            .post(
                `http://13.215.208.143:80/log`,
                {
                    feedback: comment,
                    status_id: 1,
                    mentee_id: id
                },
                {
                    headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
                }
            )
            .then((response) => {
                console.log(response)
                console.log(id)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getComment();
    }, [show]);

    

    return (
        <div className='grid grid-cols-6 w-full min-h-screen'>
            <Sidebar className="lg:col-span-1" />

            <div className='pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5'>

                <p className='text-4xl pb-5'>Immersive Dashboard</p>
                <p className='text-2xl pb-5'>Profile & Comment</p>
                <div className='grid grid-cols-8 pb-5'>
                    <div className='col-span-8 md:col-span-2 flex items-center justify-center mb-5'>
                        <img src="https://genshin.honeyhunterworld.com/img/yae_058_icon.webp" className='border-dotted border-2 rounded-lg' />
                    </div>

                    <div className='col-span-8 md:col-span-6 ml-[5%] mr-[5%] grid grid-cols-2 md:grid-cols-3'>
                        <div className='pb-2 md:pb-0'>
                            <p className='text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center'>Name</p>
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'>{item.name}</p>
                        </div>
                        <div className='pb-2 md:pb-0'>
                            <p className='text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center'>Address</p>
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'>{item.address}</p>
                        </div>
                        <div className='pb-2 md:pb-0'>
                            <p className='text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center'>Class</p>
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'>{item.class}</p>
                        </div>
                        <div className='pb-2 md:pb-0'>
                            <p className='text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center'>Status</p>
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'>{item.status}</p>
                        </div>
                        <div className='pb-2 md:pb-0'>
                            <p className='text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center'>Email</p>
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'>{item.email}</p>
                        </div>
                        <div className='pb-2 md:pb-0'>
                            <p className='text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center'>Phone</p>
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'>{item.phone}</p>
                        </div>

                    </div>
                </div>

                <div className='w-full pb-5 flex items-center justify-center '>
                    <form className="w-full pb-5 flex-col" onSubmit={(e) => postComment(e)}>
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Add a comment ..." onChange={e => setComment(e.target.value)} value={comment} />

                        <button className='btn bg-purple-500 text-white' type="submit">Add Comment</button>
                    </form>
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        show ? show.map((log) => {
                            return (
                                <p className='rounded border-2 w-full min-h-12'>
                                    {log.feedback}
                                </p>
                            )
                        }) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail
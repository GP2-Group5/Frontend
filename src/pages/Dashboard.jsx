import React from 'react'
import Sidebar from '../components/Sidebar'

import { useLocation, useNavigate } from 'react-router-dom'

function Dashboard() {
  
    return (
        <div>
            <div className='grid grid-cols-6 w-full min-h-screen'>
                <Sidebar className="lg:col-span-1" />
                <div className='pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5'>
                    <p className='text-4xl pb-5'>Immersive Dashboard</p>
                    <p className='text-2xl pb-5'>Counter</p>

                    <div className='grid grid-cols-2'>
                        <div className='grid grid-cols-8 pb-5 md:pd-0 col-span-2 md:col-span-1'>
                            <div className='col-span-8 md:col-span-2  pb-5 md:pd-0 flex items-center justify-center'>
                                <img src="https://genshin.honeyhunterworld.com/img/tartaglia_033_icon.webp" className='border-dotted border-2 rounded-lg' />
                            </div>
                            <div className='col-span-8 md:col-span-6 ml-[5%] mr-[5%] flex flex-col'>
                                <div className='pb-2 md:pb-0 flex-row'>
                                    <p className='text-2xl xl:text-3xl font-semibold text-violet-500 flex text-center items-center justify-center'>14
                                        <p className='text-2xl xl:text-3xl ml-2 font-semibold text-white flex text-center items-center justify-center'>Frontend
                                        </p>
                                    </p>
                                    <p className='text-2xl xl:text-3xl font-semibold text-violet-500 flex text-center items-center justify-center'>23
                                        <p className='text-2xl xl:text-3xl ml-2 font-semibold text-white flex text-center items-center justify-center'>Backend
                                        </p>
                                    </p>
                                    <p className='text-2xl xl:text-3xl font-semibold text-violet-500 flex text-center items-center justify-center'>9
                                        <p className='text-2xl xl:text-3xl ml-2 font-semibold text-white flex text-center items-center justify-center'>QA
                                        </p>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-8 pb-5 md:pd-0 col-span-2 md:col-span-1'>
                            <div className='col-span-8 md:col-span-2 pb-5 md:pd-0 flex items-center justify-center'>
                                <img src="https://genshin.honeyhunterworld.com/img/yunjin_064_icon.webp" className='border-dotted border-2 rounded-lg' />
                            </div>
                            <div className='col-span-8 md:col-span-6 ml-[5%] mr-[5%] flex flex-col'>
                                <div className='pb-2 md:pb-0 flex-row justify-between '>
                                    <p className='text-2xl xl:text-3xl font-semibold text-violet-500 flex text-center items-center justify-center'>50
                                        <p className='text-2xl xl:text-3xl ml-2 font-semibold text-white flex text-center items-center justify-center'>Mentee
                                        </p>
                                    </p>
                                    <p className='text-2xl xl:text-3xl font-semibold text-violet-500 flex text-center items-center justify-center'>5
                                        <p className='text-2xl xl:text-3xl ml-2 font-semibold text-white flex text-center items-center justify-center'>Mentor
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Dashboard
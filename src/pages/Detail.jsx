import React from 'react'

import Sidebar from '../components/Sidebar'
//https://genshin.honeyhunterworld.com/img/yae_058_icon.webp
function Detail() {
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
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'>Bagas</p>
                        </div>
                        <div className='pb-2 md:pb-0'>
                            <p className='text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center'>Role</p>
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'>Mentor</p>
                        </div>
                        <div className='pb-2 md:pb-0'>
                            <p className='text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center'>Class</p>
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'></p>
                        </div>
                        <div className='pb-2 md:pb-0'>
                            <p className='text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center'>Hobi</p>
                            <p className='text-lg lg:text-xl flex text-center items-center justify-center'>Kasih Mandat</p>
                        </div>

                    </div>
                </div>
                <div className='w-full pb-5 flex items-center justify-center'>
                    <button className='btn bg-purple-500 text-white'>Add Comment</button>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='rounded border-2 min-h-12'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className='rounded border-2 min-h-12'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detail
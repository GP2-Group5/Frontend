import React from 'react'

function Sidebar() {
    return (
        <div class="lg:flex flex-col w-full min-h-screen bg-[#2a2a2a] overflow-hidden hidden ">
            <div class="flex items-center justify-center p-2">
                <img src="https://genshin.honeyhunterworld.com/img/yae_058_gacha_splash.webp" className=''></img>
            </div>
            <ul class="flex flex-col py-4">

                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                        <span class="text-xl ">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
                        <span class="text-xl">User List</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
                        <span class="text-xl">Class List</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
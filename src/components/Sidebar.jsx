import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
function Sidebar() {
    const navigate = useNavigate()

    const [showAdmin, setShowAdmin] = useState(true)

    const showDelete = () => {
        if (sessionStorage.getItem('role') === "user") {
            setShowAdmin(false)
        } else {
            setShowAdmin(true)
        }
    }

    useEffect(() => {
        showDelete()
    }, []);

    return (
        <div className="lg:flex flex-col w-full min-h-screen bg-[#2a2a2a] overflow-hidden hidden ">
            <div className="flex items-center justify-center p-2" onClick={() => navigate('/')}>
                <img src="https://genshin.honeyhunterworld.com/img/yae_058_gacha_splash.webp" className=''></img>
            </div>
            <ul className="flex flex-col py-4">

                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200" onClick={() => navigate('/dashboard')}>
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                        <span className="text-xl ">Dashboard</span>
                    </a>
                </li>
                {showAdmin ? <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200" onClick={() => navigate('/adduser')}>
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                        <span className="text-xl">Add User</span>
                    </a>
                </li> : null
                }
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200" onClick={() => navigate('/userlist')}>
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                        <span className="text-xl">User List</span>
                    </a>
                </li>
                {showAdmin ? <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200" onClick={() => navigate('/addmentee')}>
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                        <span className="text-xl">Add Mentee</span>
                    </a>
                </li> : null
                }
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200" onClick={() => navigate('/menteelist')}>
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                        <span className="text-xl">Mentee List</span>
                    </a>
                </li>
                {showAdmin ? <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200" onClick={() => navigate('/addclass')}>
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                        <span className="text-xl">Add Class</span>
                    </a>
                </li> : null
                }
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-200" onClick={() => navigate('/class')}>
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                        <span className="text-xl">Class List</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    // const [login, setLogin] = useState({
    //   email: "",
    //   password: ""
    // });

    // if(!login) {
    //   return <Login setLogin={setLogin} />
    // }

    // useEffect(() => {
    //   postProject();
    // }, []);

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setLogin({
    //       ...login,
    //       [e.target.name]: value
    //     });  
    //   };

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await postProject({
    //         username,
    //         password
    //     });
    //     setToken(token);
    // }

    const postProject = async (e) => {
        e.preventDefault();
        const temp = {
            email: username, //login.email
            password: password //login.password //12345
        }
        await console.log(username)
        await console.log(password)
        axios
            .post('http://13.215.208.143:80/auth', temp)
            .then(function (response) {
                console.log(response)
                sessionStorage.setItem(`token`, response.data.data.Token)
                sessionStorage.setItem(`role`, response.data.data.Role)
                console.log(sessionStorage.getItem(`token`))
                console.log(sessionStorage.getItem(`role`))
                navigate('/dashboard')
            })
            .catch(function (error) {
                console.log(error);
                alert("wrong email or password")
            });
    }
    return (
        <>
            <div className='flex items-center justify-center grid-cols-2 pl-[10%] pr-[10%] h-screen'>
                <img src="https://genshin.honeyhunterworld.com/img/yae_058_gacha_splash.webp" className='  w-screen blur-sm opacity-20 absolute object-cover backdrop-blur-sm md:w-4/5 md:blur-none md:opacity-100 md:flex md:relative md:backdrop-blur-none' />
                <form className="w-4/5" onSubmit={(e) => postProject(e)}>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Your Email
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="monmondora@mail.com" onChange={e => setUserName(e.target.value)} value={username} />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Password
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="12345" onChange={e => setPassword(e.target.value)} value={password} />
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
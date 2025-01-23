import React, { useState } from "react";

// api
import { LoginApi } from "../../api/login.api";

const LoginForm = () => {

    const [passwodDisPlay, setPasswordDisPlay] = useState<string>("password");

    function changePasswordDisplay() {
        if (passwodDisPlay == "password") setPasswordDisPlay("text");
        if (passwodDisPlay == "text") setPasswordDisPlay("password")
    }

    // username and password for login
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault()

        const loginApi = LoginApi()

        const data = {
            username: username,
            password: password
        }

        const logined = await loginApi.login(data);

        if (logined == true) {
            window.location.href = '/'
        }else{
            alert(logined.message)
        }        

    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <div className="mb-12">
                    <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                    <p className="text-sm mt-4 text-gray-800">
                        Don't have an account <a href="/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a>
                    </p>
                </div>

                <div>
                    <label className="text-gray-800 text-xs block mb-2">Username or Email</label>
                    <div className="relative flex items-center">
                        <input
                            name="username"
                            type="text"
                            required
                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                            placeholder="Enter username or email"
                            value={username}
                            onChange={handleChangeUsername}
                            minLength={6}
                            maxLength={100}
                        />

                    </div>
                </div>

                <div className="mt-8">
                    <label className="text-gray-800 text-xs block mb-2">Password</label>
                    <div className="relative flex items-center">
                        <input
                            name="password"
                            type={passwodDisPlay}
                            required
                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                            placeholder="Enter password"
                            value={password}
                            onChange={handleChangePassword}
                            minLength={8}
                        />
                        <button onClick={changePasswordDisplay} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                            </svg>
                        </button>

                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                    <div className="flex items-center"></div>
                    <div>
                        <a href="jajvascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </div>

                <div className="mt-12">
                    <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Sign in
                    </button>
                </div>
                <div className="space-x-6 flex justify-center mt-6">
                </div>
            </form>
        </>
    )
}

export default LoginForm
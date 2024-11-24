import Image from 'next/image'
import React from 'react'

const Login = () => {
    return (
        <div
            className="bg-gray-100 h-screen flex items-center justify-center">
            <title>facebook-log in or sign up</title>
            {/* left side */}
            <div className="text-3xl w-1/2 px-10">
                <Image
                    src={"../images/fb.svg"}
                    alt="Facebook"
                    width={300}
                    height={100} />
                <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life.</p>
            </div>
            {/* right side */}
            <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
                <input className="my-2 border border-1 border-gray-200 p-3 rounded-md focus outline-1 outline-blue-600" type="text" placeholder="email adress/phone number"></input>
                <input className="my-2 border border-1 border-gray-200 p-3 rounded-md focus outline-1 outline-blue-600" type="text" placeholder="Passward"></input>
                <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">Login</button>
                <p className="text-blue-500 text-center my-2 text-sm hover:underline cursor-pointer">Forgotten password?</p>
                <span className="my-2">
                <hr />
                </span>
                <button className="bg-green-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-green-700 w-fit px-2 mx-auto">Create new account</button>
            </div>
        </div>
    )
}

export default Login

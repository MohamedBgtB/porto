import React, { useState } from 'react';


const navlist = [
    {
        label: "Home",
        path: "/home"
    },
    {
        label: "Aboute",
        path: "/about"
    },
    {
        label: "Work",
        path: "/work"
    },
]

const Nav = () => {
    const [open, setopen] = useState(false)
    const openmenu = () => {
        setopen(!open)
        console.log(open)
    }
    return (
        <div className=" px-4 py-6 bg-zinc-900 max-w-7xl m-auto flex justify-between items-center">
            <div className="brand">
                <a href="" className="text-base text-blue-400 ">Zeus UI</a>
            </div>
            <div className={`menu fixed w-[85%] h-full bg-white top-0 p-5 shadow-2xl transition  ${open ? "left-0" : "-left-full"}`} >
                <ul className=" ">
                    {navlist.map((item, index) => {
                        return <li className='border-b-2  ' key={index}> <a href="" className="block py-4 px-5">{item.label}</a></li>
                    })}
                </ul>
            </div>
            <div className="menu-btn flex justify-center items-center gap-5">
                <div className="">
                    <button className='bg-green-600 text-sm px-4 py-2 rounded-lg text-yellow-50'>Get started </button>
                </div>
                <div className="" onClick={openmenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

            </div>
        </div>
    );
}

export default Nav;

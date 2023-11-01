import React, { useState } from "react";
import { Link ,Outlet} from "react-router-dom";

export const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="grid  grid-cols-2">
            <div className={`${
                open ? 'w-72' : 'w-20'
            } duration-300 p-4 pt-6 h-screen bg-dark-purple relative `}>
                <img
                    src="..\public\control.png"
                    alt="Logo"
                    className={`absolute cursor-pointer right-0 top-9 w-8 border-2 border-light-white rounded-full bg-white p-2 ${
                        !open && 'rotate-180'
                    }`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="..\public\vite.svg"
                        alt="logo"
                        className="cursor-pointer duration-500"
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-300 ${
                            !open && 'scale-0'
                        }`}
                    >
                        Coffee Sensory
                    </h1>
                </div>
                <div className="flex items-center">
                    <ul className="pt-6 w-screen">
                        <li className="text-gray-500 text-sm  flex items-center gap-x-4 cursor-pointer p-2  hover:bg-light-white rounded-md " >
                            <img src="..\public\home.png" alt=""  className="w-10"/>
                            <Link to={'/'} className={`${!open && 'hidden'} origin-left duration-200 text-white `}> 
                                Home
                            </Link>
                        </li>
                        <li className="text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                            <img src="..\public\nosotros.png" alt=""  className="w-10  rounded-full"/>

                            <Link to={'/'} className={`${!open && 'hidden'} origin-left duration-200 text-white`}>
                                Nosotros {/* ingo proyecto */}
                            </Link>
                        </li>
                        <li className="text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                            <img src="..\public\contactos.png" alt=""  className="w-10  rounded-full"/>
                            <Link to={'/'} className={`${!open && 'hidden'} origin-left duration-200 text-white`}>
                                Contactenos
                            </Link>
                        </li>
                    </ul>
                </div>
                
                
            </div>
            <div className="contenido ">
                    <Outlet></Outlet>
            </div>
        </div>
        
    );
};

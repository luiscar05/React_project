import React, { useState } from "react";
// Remove Outlet import if not used
import { Link } from "react-router-dom";

export const Menu = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex">
            <div className={`${open ? 'w-72' : 'w-20'} duration-300 p-5 pt-8 h-screen bg-dark-purple relative`}>
                <img src="" alt="Logo" className={`absolute cursor-pointer right-3 top-9 w-7 border-2 border-light-white rounded-full ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />
                <div className="flex gap-x-4 items-center">
                    <img src="" alt="logo" className="cursor-pointer duration-500" />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Coffe Sensoy</h1>
                </div>
                <ul className="pt-6">
                    <li className="text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <Link to={'/'} className={`${open && 'hidden'} origin-left duration-200`}>Contactenos</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

import React,{useEffect,useState} from "react";
/* import { Menu } from "../components/Menu"  */

import { Link } from "react-router-dom";

/* import swal from "sweetalert"; */


export const Home = ()=>{
   
    return(
        <>
        {/* <Menu></Menu> */}
        <div className="m-3 p-5">
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 text-center">
                {/* <Link to="/crearsuario">Crear Usuario</Link> */}
            </p>
            <h1 className="text-center font-bold text-4xl">Usuarios</h1>
            
            <table className="table-auto bg-gray-800 text-white   divide-y divide-gray-600 w-full rounded-lg mt-5">
                <thead>
                    <tr className="border-gray-600 text-center">
                        <td className="border-gray-600 w-20">ID</td>
                        <td className="border-gray-600 w-40">Nombre</td>
                        <td className="border-gray-600 w-40">EMAIL</td>
                        <td className="border-gray-600 w-10">OPTION</td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
        </>
        
    )
    
}
import React,{useEffect,useState} from "react";
import Api from "../components/Api";
import { Link } from "react-router-dom";


export const Home = ()=>{
    const [tasks,setTasks]=useState([])
    useEffect(()=>{
        const fetchTaks=async ()=>{
            try {
                const response = await Api.get('/variedades/listar')
                setTasks(response.data)
            } catch (error) {
                console.error("error fetchin taks:", error)
            }
        }
        fetchTaks();
    },[]);
    return(
        <>
        
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
                        <td className="border-gray-600 w-10">OPTION</td>
                    </tr>
                </thead>
                <tbody>
                {tasks.map((task)=>(
                        <tr className="border-gray-600 text-center  hover:bg-gray-600 p-5  bg-gray-700 rounded-lg" key={task.id}>
                            <td className="p-3"><Link to={`/editarUsuario/${task.id}`}>{task.id}</Link></td>
                            <td className="p-3"><Link to={`/editarUsuario/${task.id}`}>{task.nombre}</Link></td>
                            <td className="flex items-center p-3 mx-auto justify-center">
                                <p className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded w-20 text-center flex items-center justify-center mr-1 cursor-pointer">
                                    el
                                </p>
                                <p className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-20 text-center flex items-center justify-center ml-1 cursor-pointer">
                                    ac
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
        
    )
    
}
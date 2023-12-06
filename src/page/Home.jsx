import React,{useEffect,useState} from "react";
import Api from "../components/Api";
import { Link } from "react-router-dom";
/* import { useReactTable } from "@tanstack/react-table"; */
import Swal from "sweetalert2";


export const Home = ()=>{
    const [tasks,setTasks]=useState([])
    useEffect(()=>{
        const fetchTaks=async ()=>{
            try {
                const response = await Api.get('/variedades/listar')
                setTasks(response.data)

                let datos = response.data;
                console.log(datos);
                
            } catch (error) {
                console.error("error fetchin taks:", error)
            }
        }
        fetchTaks();
        
    },[]);

    const handleDelete = async (id) => {
        try {
            Swal.fire({
                title: '¿Seguro Deseas Eliminar La Variedad?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await Api.delete(`/variedades/eliminar/${id}`);
                    Swal.fire('Eliminado Exitosamente', '', 'success');
                    
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <>
        
        <div className="m-4 p-5 w-full text-lg shadow-2xl">
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 text-center">
                <Link to="/Register">Crear Variedad</Link> 
            </p>
            <h1 className="text-center font-bold text-4xl text-white">Variedad</h1>
            
            <table className="table-auto bg-gray-800 text-white   divide-y divide-gray-600  w-full rounded-lg mt-5">
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
                            <td className="p-3"><Link to={`/actualizarVariedad/${task.id}`}>{task.id}</Link></td>
                            <td className="p-3"><Link to={`/actualizarVariedad/${task.id}`}>{task.nombre}</Link></td>
                            <td className="flex items-center p-3 mx-auto justify-center">
                                <button className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded w-20 text-center flex items-center justify-center mr-1 cursor-pointer" onClick={()=>handleDelete(task.id)} >
                                    <img src="public\eliminar.svg" alt=""  className="w-5" />
                                </button>
                                <p className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-20 text-center flex items-center justify-center ml-1 cursor-pointer">
                                    <Link to={`/actualizarVariedad/${task.id}`}>
                                        <img src="public\actualizar.svg" alt="" className="w-5" />
                                    </Link>
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
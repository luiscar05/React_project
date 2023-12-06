import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Api from "../components/Api";
import {useNavigate} from 'react-router-dom'

export const ActualizarVariedad = () => {
    const Navigate = useNavigate();
    const [task, setTask] = useState(null);
    const [nombre, setNombre] = useState(""); // Nuevo estado para el nombre
    const { id } = useParams();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await Api.get(`/variedades/buscar/${id}`);
                setTask(response.data);
                setNombre(response.data[0].nombre); // Actualiza el estado del nombre
            } catch (error) {
                console.error(error);
            }
        };

        fetchTask();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await Api.put(`/variedades/actualizar/${id}`, { nombre: nombre })
            .finally(()=>{
                alert("Variedad actualizada correctamente");
                Navigate('/')
            });
            
            
        } catch (error) {
            console.error(error);
        }
    }

    

    return (
        <>
            {task && (
                <form onSubmit={handleSubmit} className="p-4 m-2  bg-black flex flex-col rounded-lg">
                    <div className="flex flex-col">
                        <label htmlFor="nombre" className="text-white ">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} // Maneja cambios en el campo de texto
                            className="border-none border-b-gray-700 border-b-2 rounded-2xl p-2 outline-none"
                            
                        />
                    </div>
                    <button type="submit" className='bg-gradient-to-r from-sky-600 to-violet-600 rounded-lg mt-5 p-2 font-bold text-xl hover:transition-colors hover:duration-500 hover:ease-in-out'>Actualizar</button>
                </form>
            )}
        </>
    );
}

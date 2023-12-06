import { useState } from "react";
import axios from "axios";
import React from "react";
import {useNavigate} from 'react-router-dom'

export const Registrar = () => {

  const Navigate = useNavigate()
  const [datos, setDatos] = useState({
    nombre: "",
  });

  const valorDatos = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  const datosSubmit = (event) => {
    event.preventDefault();
    console.log(datos);

    const datosEnviados = {
      nombre: datos.nombre,
    };

    axios
      .post("http://localhost:3000/api/variedades/resgistrar", datosEnviados)
      .then((response) => {
        alert("mesaje" + response.data);
      })
      .finally(()=>{
        Navigate('/')
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  return (
    <div >
      <form
          onSubmit={datosSubmit}
          className="p-4 mt-2 rounded bg-black flex text-white flex-col"
        >
          <div className="flex flex-col">
            <label htmlFor="nombre" className="mx-auto p-3 text-2xl">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={datos.nombre}
              onChange={valorDatos}
             className="rounded-lg text-black p-1 " 
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-sky-600 to-violet-600 rounded-lg mt-5 p-2 font-bold text-xl hover:transition-colors hover:duration-500 hover:ease-in-out  "
          >
            Enviar
          </button>
        </form>
    </div>      
  );
};

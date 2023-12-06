import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import {useNavigate} from 'react-router-dom'



export const Contactenos = ()=>{

  
  const [datos, setDatos] = useState({
    Texto: "",
    email:""
  });

  const valorDatos = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };


  const datosSubmit = (event) => {
    event.preventDefault();
    console.log(datos);

    const datosEnviados = {
      Texto: datos.Texto,
      email: datos.email
    };

    axios
      .post("http://localhost:5000", datosEnviados)
      .then((response) => {
        alert("Mensaje Enviado con exito");
      })
      
      .catch((error) => {
        console.log("error:", error);
      });
  };
 
    return (

      <div className="App w-1/2 min-h-10 p-5  flex flex-col justify-center items-center  rounded-xl shadow-lg">
        <h1 className='text-center text-white text-3xl font-bold pb-5'>Contáctanos</h1>
        <div className='w-1/2'>
          <form onSubmit={datosSubmit} className='flex flex-col'>

            <label htmlFor="email" className=' text-white text-lg font-bold'>Correo electrónico:</label>
            <input type="email" id="email" name="email" value={datos.email} onChange={valorDatos} required className='text-sm p-2 rounded-xl' placeholder='Ingrese su correo' /> 
            <label htmlFor="Texto" className=' text-white text-lg font-bold'>Mensaje:</label>
            <textarea id="message" name="Texto"  value={datos.Texto} onChange={valorDatos} required className='text-sm p-2 rounded-xl' placeholder='Ingrese Su mensaje y sus datos Personales' />
            <button type="submit" className='text-white bg-gradient-to-r from-sky-600 to-violet-600 rounded-lg mt-5 p-2 font-bold text-xl hover:transition-colors hover:duration-500 hover:ease-in-out w-1/2 justify-center items-center flex  mx-auto'>Enviar</button>
          </form>
        </div>
        
      </div>
    );
  }




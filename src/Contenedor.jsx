import React, { use, useState } from 'react';
import { Formulario } from './Formulario';
import { Listado } from './Listado';

export const Contenedor = () => {
    const [arrayCitas, setCitas] = useState([]);
    const [i, setI] = useState(0);
    const [msg, setMsg] = useState({ text: "", type: "" });

  return (
    <>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
            <div class="row">
                <Formulario msg={msg} setMsg={setMsg} setCitas={setCitas} i={i} setI={setI}/>
                <Listado arrayCitas={arrayCitas} setCitas={setCitas}/>
            </div>
        </div>
        
    </>
  )
}

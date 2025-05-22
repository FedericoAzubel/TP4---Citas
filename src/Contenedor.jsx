import React, { useEffect, useState } from 'react';
import { Formulario } from './Formulario';
import { Listado } from './Listado';

export const Contenedor = () => {
    const [arrayCitas, setCitas] = useState([]);
    const [i, setI] = useState(0);
    const [msg, setMsg] = useState({ text: "", type: "" });

    // ✅ Leer citas desde localStorage al montar el componente
    useEffect(() => {
        const citasGuardadas = localStorage.getItem("citas");
        console.log("Cargando citas desde localStorage:", citasGuardadas);
        if (citasGuardadas) {
            const citasParseadas = JSON.parse(citasGuardadas);
            setCitas(citasParseadas);
            // Actualizar el contador `i` según el mayor ID guardado
            const maxId = citasParseadas.reduce((max, cita) => Math.max(max, cita.id), 0);
            setI(maxId + 1);
        }
    }, []);

    // ✅ Guardar citas en localStorage cada vez que cambie `arrayCitas`
    useEffect(() => {
        localStorage.setItem("citas", JSON.stringify(arrayCitas));
    }, [arrayCitas]);

    return (
        <>
            <h1>ADMINISTRADOR DE PACIENTES</h1>
            <div className="container">
                <div className="row">
                    <Formulario msg={msg} setMsg={setMsg} setCitas={setCitas} i={i} setI={setI} />
                    <Listado arrayCitas={arrayCitas} setCitas={setCitas} />
                </div>
            </div>
        </>
    );
};
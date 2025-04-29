import React from "react";
import { Cita } from "./Cita";

export const Listado = ({ arrayCitas, setCitas }) => {
  // Función que elimina una cita por ID
  const eliminarCita = (id) => {
    const nuevasCitas = arrayCitas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {arrayCitas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        arrayCitas.map((cita) => (
          <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
        ))
      )}
    </div>
  );
};

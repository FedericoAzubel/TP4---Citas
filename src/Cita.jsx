import React from 'react';

export const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="cita">
      <p>
        Mascota: <span>{cita.mascota}</span>
      </p>
      <p>
        Dueño: <span>{cita.dueño}</span>
      </p>
      <p>
        Fecha: <span>{cita.fecha}</span>
      </p>
      <p>
        Hora: <span>{cita.hora}</span>
      </p>
      <p>
        Síntomas: <span>{cita.sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}
      >
        Eliminar ×
      </button>
    </div>
  );
};

import React, { useState } from 'react';

export const Formulario = ({setMsg, setCita}) => {
  const [cita, setCita] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hayCamposVacios = Object.values(cita).some(valor => valor.trim() === '');
    if(hayCamposVacios) {
        setMsg({ text: "Los campos son inválidos", type: "red" });
    }
    else {
        setCita(prev => [...prev, cita]);
        setMsg({ text: "", type: "" });
    }
    console.log('Cita enviada:', cita);
  };

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Nombre Mascota"
          name="mascota"
          value={cita.mascota}
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          name="dueño"
          value={cita.dueño}
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          value={cita.fecha}
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          value={cita.hora}
          onChange={handleChange}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          value={cita.sintomas}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="u-full-width button-primary" onClick={handleSubmit}>
          Agregar Cita
        </button>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import { Mensaje } from "./Mensaje";

export const Formulario = ({ msg, setMsg, setCitas, i, setI }) => {
  const [cita, setCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
    id: i,
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hayCamposVacios = Object.values(cita).some(
      (valor) => String(valor).trim() === ""
    );

    if (hayCamposVacios) {
      setMsg({ text: "Los campos son inválidos", type: "red" });
    } else {
      const nuevaCita = { ...cita, id: i };
      setCitas((prev) => [...prev, nuevaCita]);
      setMsg({ text: "", type: "" });
      setI((prev) => prev + 1);

      // Reiniciar formulario
      setCita({
        mascota: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: "",
      });

      console.log("Cita enviada:", nuevaCita);
    }
  };

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <Mensaje msg={msg} />

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

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
};

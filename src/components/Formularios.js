import React, { useState } from "react";

/* const Formularios = () => {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleChangeName = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={handleChangeName}
        />

        <p>elige tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          defaultChecked
          onChange={(e) => {
            setSabor(e.target.value);
          }}
        />
        <label htmlFor="vanilla">vanilla</label>

        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => {
            setSabor(e.target.value);
          }}
        />
        <label htmlFor="react">react</label>

        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={(e) => {
            setSabor(e.target.value);
          }}
        />
        <label htmlFor="vue">vue</label>

        <p>elige tu lenguaje de programacion favorito</p>
        <select
          name="lenguaje"
          onChange={(e) => {
            setLenguaje(e.target.value);
          }}
          defaultValue=""
        >
          <option value="">...</option>
          <option value="js">Javascript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
        </select>

        <br />
        <label htmlFor="terminos">acepto terminos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <input type="submit" value="enviar" />
      </form>
    </>
  );
}; */

const Formularios = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <p>elige tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          defaultChecked
          onChange={handleChange}
        />
        <label htmlFor="vanilla">vanilla</label>

        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">react</label>

        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">vue</label>

        <p>elige tu lenguaje de programacion favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">...</option>
          <option value="js">Javascript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
        </select>

        <br />
        <label htmlFor="terminos">acepto terminos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <input type="submit" value="enviar" />
      </form>
    </>
  );
};

export default Formularios;

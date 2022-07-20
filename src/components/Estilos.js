import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";

const Estilos = () => {
  let myStyles = {
    borderRadius: "100px",
    margin: "50px",
  };
  return (
    <section className="estilos">
      <h2>Estilos CSS en react</h2>
      <h3 className="bg-react">Estilos css en hoja externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: "25px", margin: 20 + "px" }}
      >
        Estilos css en linea{" "}
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos css en linea{" "}
      </h3>

      <h3 className="bg-react" style={myStyles}>
        Agregando Normalize con @inport-normalize;
      </h3>

      <h3 className={moduleStyles.error}>Estilos con modulos</h3>

      <h3 className={moduleStyles.success}>Estilos con modulos</h3>
    </section>
  );
};

export default Estilos;

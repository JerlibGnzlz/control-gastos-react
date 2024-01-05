import { useState } from "react";
import Mensajes from "./Mensaje";

/* eslint-disable react/prop-types */
const Nuevo_presupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsvalidPresupuesto
}) => {

  const [mensaje, setMensaje] = useState("")

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un Presupuesto valido ")
      return
    }
    setMensaje('')
    setIsvalidPresupuesto(true)
  }

  return (

    <div className="contenedor contenedor-presupuesto sombra">

      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="Number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>


        <input type="submit" value="Añadir" />
        {mensaje && <Mensajes tipo={"error"}>{mensaje}</Mensajes>}
      </form>
    </div >
  );
};

export default Nuevo_presupuesto;

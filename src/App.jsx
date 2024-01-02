import { useState } from "react";
import Header from "./components/Header";
import InuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

const App = () => {


  const [presupuesto, setPresupuesto] = useState(0);
  const [insValidPresupuesto, setIsvalidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)


  const handleNuevoGasto = () => {
    setModal(true)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        insValidPresupuesto={insValidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      />

      {insValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={InuevoGasto}
            alt="Icono nuevo gasto"
            onClick={handleNuevoGasto} />

        </div>
      )}

      {modal && <Modal setModal={setModal} />}

    </div>


  );
};

export default App;

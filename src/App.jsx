import { useState } from "react";
import Header from "./components/Header";
import InuevoGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./helpers";
import Modal from "./components/Modal";
import ListadoGastos from './components/Listado_gasto';

const App = () => {


  const [presupuesto, setPresupuesto] = useState(0);
  const [insValidPresupuesto, setIsvalidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);


  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };


  const guardarGasto = (gasto) => {

    gasto.id = generarId();
    gasto.fecha = Date.now();

    setGastos([...gastos, gasto]);

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);

  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        insValidPresupuesto={insValidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}

      />

      {insValidPresupuesto && (

        <>
          <main>
            <ListadoGastos
              gastos={gastos}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={InuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto} />

          </div>
        </>
      )}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />}

    </div>


  );
};

export default App;

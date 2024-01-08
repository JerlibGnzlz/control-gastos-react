import { useState, useEffect } from "react";
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

  const [gastoEditar, setGastoEditar] = useState({});


  useEffect(() => {

    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);


      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);


  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };


  const guardarGasto = (gasto) => {

    if (gasto.id) {

      const gastoActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);

      setGastos(gastoActualizados);
      setGastoEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);

    }


    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);

  };

  const eliminarGasto = id => {
    const gastoActualizado = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastoActualizado);
    setGastoEditar({});
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        insValidPresupuesto={insValidPresupuesto}
        gastos={gastos}
        setPresupuesto={setPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}

      />

      {insValidPresupuesto && (

        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
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
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}

    </div>


  );
};

export default App;

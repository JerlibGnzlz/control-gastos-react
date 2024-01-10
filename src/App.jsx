import { useState, useEffect } from "react";
import Header from "./components/Header";
import InuevoGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./helpers";
import Modal from "./components/Modal";
import ListadoGastos from './components/Listado_gasto';
import Filtros from "./components/Filtros";


const App = () => {

  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : []
  );

  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem("presupuesto") ?? 0
  );

  const [insValidPresupuesto, setIsvalidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState({});

  const [gastosFiltrados, setGastosFiltrados] = useState([]);



  useEffect(() => {

    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);


  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);


  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);


  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
    if (presupuestoLS > 0) {
      setIsvalidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
    setGastosFiltrados(gastosFiltrados);
    // setFiltro(gastosFiltrados);
  }, [filtro]);



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
        setGastos={setGastos}
        setPresupuesto={setPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}

      />

      {insValidPresupuesto && (

        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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

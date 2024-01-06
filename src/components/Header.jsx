/* eslint-disable react/prop-types */
import NuevoPresupuesto from "./Nuevo_presupuesto";
import ControlPresupuesto from './Control_presupuesto';

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  insValidPresupuesto,
  setIsvalidPresupuesto
}) => {

  return (
    <header>
      <h1>Planificador de Gastos</h1>


      {insValidPresupuesto ? (
        <ControlPresupuesto
          gastos={gastos}
          presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsvalidPresupuesto={setIsvalidPresupuesto}
        />
      )}

    </header>
  );
};

export default Header;

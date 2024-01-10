/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Gasto from "./Gasto";

const Listado_gasto = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrados
}) => {

    return (
        <div className="listado-gastos contenedor">

            {<h2> {gastos != 0 ? "Gastos" : "No hay gastos"}</h2>}

            {
                filtro ?

                    (gastosFiltrados.map((gasto =>
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    ))
                    ) : (
                        gastos.map((gasto =>
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />)
                        )
                    )
            }
        </div >
    );
};

export default Listado_gasto;

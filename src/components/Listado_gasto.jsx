/* eslint-disable react/prop-types */
import Gasto from "./Gasto"

const Listado_gasto = ({ gastos }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{gastos != 0 ? "Gastos" : "No hay gastos"}</h2>

            {gastos.map((gasto) =>
                <Gasto
                    key={gasto.id}
                    gasto={gasto}

                />)}
        </div>
    )
}

export default Listado_gasto

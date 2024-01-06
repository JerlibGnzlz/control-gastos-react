/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Control_presupuesto = ({ presupuesto, gastos }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => {
            return gasto.cantidad + total;
        }, 0);

        const totalDisponible = presupuesto - totalGastado;

        setGastado(totalGastado);
        setDisponible(totalDisponible);


    }, [gastos]);


    const formatearCantiadad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency', currency: 'USD'
        });

    };


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica aqui</p>
            </div>


            <div className='contenido-presupuesto'>
                <p>Presupuesto:
                    <span> ${formatearCantiadad(presupuesto)}</span>
                </p>

                <p>Disponible:
                    <span> {formatearCantiadad(disponible)}</span>
                </p>

                <p>Gastado:
                    <span> {formatearCantiadad(gastado)}</span>
                </p>
            </div>
        </div>

    );
};

export default Control_presupuesto;

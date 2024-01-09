/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Control_presupuesto = ({ presupuesto, gastos }) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;


        const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto) * 100;
        console.log(nuevoPorcentaje);

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1500);

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
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: "#D6002F",
                        textColor: "#D6002F"

                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado `}
                />
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

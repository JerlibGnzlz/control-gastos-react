/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Control_presupuesto = ({
    presupuesto,
    gastos,
    setGastos,
    setPresupuesto,
    setIsvalidPresupuesto

}) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;


        const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto) * 100;
        console.log(totalGastado);

        setDisponible(totalDisponible);
        setGastado(totalGastado);

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1500);



    }, [gastos]);


    const formatearCantiadad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency', currency: 'USD'
        });

    };
    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsvalidPresupuesto(false);
        }
    };

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>

                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
                        textColor: "#D6002F",
                        pathTransitionDuration: 0.9,

                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado `}
                />
            </div>


            <div className='contenido-presupuesto'>
                <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Resetar app
                </button>
                <p>Presupuesto:
                    <span> ${formatearCantiadad(presupuesto)}</span>
                </p>

                <p className={`${disponible < 0 ? "negativo" : ""}`}>Disponible:
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

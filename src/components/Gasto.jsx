/* eslint-disable react/prop-types */
import { formatearFecha } from "../helpers/";
import IconAhorro from "../img/icono_ahorro.svg";
import IconCasa from "../img/icono_casa.svg";
import IconComida from "../img/icono_comida.svg";
import IconOcio from "../img/icono_ocio.svg";
import IconSalud from "../img/icono_salud.svg";
import IconSuscripcion from "../img/icono_suscripciones.svg";
import IconGasto from "../img/icono_gastos.svg";


const diccionarioIconos = {
    ahorro: IconAhorro,
    comida: IconComida,
    casa: IconCasa,
    gastos: IconGasto,
    ocio: IconOcio,
    salud: IconSalud,
    suscripciones: IconSuscripcion,

};

const Gasto = ({ gasto }) => {

    const { nombre, cantidad, categoria, id, fecha } = gasto;
    return (
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
                < img src={diccionarioIconos[categoria]} alt="Icono Gasto" />
                <div className='descripcion-gasto'>
                    <p className='categoria'>{categoria}</p>
                    <p className='nombre-gasto'>{nombre}</p>
                    <p className='fecha-gasto'>Agregado el:{" "}<span> {formatearFecha(fecha)}</span></p>
                </div>
            </div>
            <p className='cantidad-gasto'>${cantidad}</p>
        </div>
    );
};

export default Gasto;

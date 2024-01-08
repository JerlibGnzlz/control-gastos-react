/* eslint-disable react/prop-types */
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';

import "react-swipeable-list/dist/styles.css";


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


const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => console.log('Editar')}>
            Editar...
        </SwipeAction>
    </LeadingActions>
);


const trailingActions = () => (
    <TrailingActions>
        <SwipeAction
            destructive={true}
            onClick={() => console.log('Eliminar')}>
            Eliminar...
        </SwipeAction>
    </TrailingActions>
);


const Gasto = ({ gasto }) => {

    const { nombre, cantidad, categoria, id, fecha } = gasto;
    return (

        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >

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
                </div >
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Gasto;

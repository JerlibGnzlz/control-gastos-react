/* eslint-disable react/prop-types */
import { useState } from 'react';
import cerrarModal from '../img/cerrar.svg';
import Mensaje from './Mensaje';

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [categoria, setCategoria] = useState("");

    const [mensaje, setMensaje] = useState("");


    const ocultarModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !cantidad || !categoria) {
            setMensaje("Todos los campos son requeridos");
            return;
        }
        setTimeout(() => {
            setMensaje('');

        }, 1000);

        guardarGasto({ nombre, cantidad, categoria });
    };



    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img
                    src={cerrarModal}
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto</label>

                    <input
                        id='nombre'
                        type='text'
                        placeholder='Añade el Nombre del Gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}

                    />
                </div>

                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>

                    <input
                        id='cantidad'
                        type='number'
                        placeholder='Añade la Cantidad del Gasto: Ej. 300'
                        value={cantidad}
                        onChange={e => { setCantidad(+e.target.value); }}

                    />

                </div>

                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>

                    <select id='categoria'
                        value={categoria}
                        onChange={e => { setCategoria(e.target.value); }}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type='submit'
                    value="añade Gastos"
                    onChange={e => { e.target.value; }}
                />

            </form>
        </div>
    );
};

export default Modal;

/* eslint-disable react/prop-types */
import cerrarModal from '../img/cerrar.svg'
const Modal = ({ setModal }) => {

    const ocultarModal = () => {
        setModal(false)
    }

    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img
                    src={cerrarModal}
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
        </div>
    )
}

export default Modal

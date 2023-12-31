/* eslint-disable react/prop-types */

const Control_presupuesto = ({ presupuesto }) => {

    const formatearCantiadad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency', currency: 'USD'
        })

    }
    console.log(formatearCantiadad(presupuesto))
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
                    <span> {formatearCantiadad(0)}</span>
                </p>

                <p>Gastado:
                    <span> {formatearCantiadad(0)}</span>
                </p>
            </div>
        </div>

    )
}

export default Control_presupuesto

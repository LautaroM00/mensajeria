import React from 'react'
import './ButtonClearLS.css'

const ButtonClearLS = () => {

    const limpiarLocalStorage = (e) => {
        localStorage.clear()

        alert('Historial reiniciado!')
    }

    return (
        <form onSubmit={limpiarLocalStorage}>
            <button type='submit' className='btn-reiniciar'>Limpiar mensajes agregados</button>
        </form>
    )
}

export default ButtonClearLS
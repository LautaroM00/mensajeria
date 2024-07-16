import React from 'react'
import './MensajeForm.css'
import enviar from "../../../../iconos/enviar.png"

export const MensajeForm = ({ agregarMensaje, isLoading }) => {

    const handleSubmit = (evento) => {
        evento.preventDefault()

        let mensajeNuevo = evento.target[0].value

        if (mensajeNuevo !== '') {
            agregarMensaje(mensajeNuevo)
            evento.target[0].value = ''
        }
    }

    return (
        <>
            {isLoading ?
                <form className='input-submit' onSubmit={(e) => {e.preventDefault()}}>
                    <input className='input-mensaje' />
                    <button type='submit'><img src={enviar} style={{ width: "20px" }} /></button>
                </form> :
                <form className='input-submit' onSubmit={handleSubmit}>
                    <input className='input-mensaje' />
                    <button type='submit'><img src={enviar} style={{ width: "20px" }} /></button>
                </form>}
        </>
    )
}

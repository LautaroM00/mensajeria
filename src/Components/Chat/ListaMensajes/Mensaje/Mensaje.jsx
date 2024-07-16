import React from 'react'
import "./Mensaje.css"

export const Mensaje = ({ lista }) => {
    let url
    let imagen
    let direccion
    let colorFondo
    let { text, day, hour, estado, id, author } = lista
    if (estado === 'visto') {
        url = '../../../../assets/visto.png'
    }
    if (author === 'Tú: ') {
        direccion = 'end'
        colorFondo = "#005c4b"
    }
    /*     if(text.startsWith('../')){
            imagen = <img src={text} style={{width:'170px'}}/>
            text = ''
        } */
    return (
        <>
            <div className='contenedor' style={{ justifyContent: direccion }} key={id}>
                <div className='mensaje' style={{ backgroundColor: colorFondo }}>
                    <p className='texto'>
                        {text}
                    </p>
                    {imagen}
                    <div className='contenedorInferior'>
                        <span className='timeSince'>
                            {`${day} ${hour}`}
                        </span>
                        <img src={url} style={{ width: '20px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

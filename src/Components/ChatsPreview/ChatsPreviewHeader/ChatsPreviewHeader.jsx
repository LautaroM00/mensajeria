import React, { useState } from 'react'
import './ChatsPreviewHeader.css'
import lupita from "../../../../iconos/lupita.png"



const ChatsPreviewHeader = ({setTextoFiltro}) => {
    const [lupitaIsActive, setLupitaIsPressed] = useState(false)
    const [colorLupita, setColorLupita] = useState('')

    const handleClickLupita = () => {
        setLupitaIsPressed(!lupitaIsActive)
        lupitaIsActive ?
            setColorLupita('') :
            setColorLupita('#152027')
    }

    const handleChange = (e) => {
        setTextoFiltro(e.target.value)
    }

    return (
        <div className='ChatsPreviewHeader'>
            <div className={'arriba'}>
                <h2>WhatsApp</h2>
                <div className='contenedorBotonInput'>
                    <input
                        className='input'
                        style={{ display: lupitaIsActive ? '' : 'none' }}
                        onChange={handleChange}
                    >
                    </input>
                    <button
                        className='boton'
                        onClick={handleClickLupita}
                        style={{ backgroundColor: colorLupita, borderRadius: '50%' }}
                    >
                        <img
                            src={lupita}
                            alt="icono-lupita"
                            style={{ width: '21px', height: '21px' }}
                        />
                    </button>
                </div>
            </div>
            <div className={'abajo'}>
                <div className={'selectorChat'}>
                    <span>
                        CHATS
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChatsPreviewHeader
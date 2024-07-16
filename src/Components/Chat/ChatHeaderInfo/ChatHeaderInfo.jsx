import React, { useState } from 'react'
import "./ChatHeaderInfo.css"
import camaraIcono from "../../../../iconos/camara.png"
import telefono from "../../../../iconos/telefono.png"
import lupita from "../../../../iconos/lupita.png"
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from 'react-router-dom'

export const ChatHeaderInfo = ({ nombre, thumbnail, setFiltroMensajes }) => {

    const [lupitaIsActive, setLupitaIsPressed] = useState(false)
    const [colorLupita, setColorLupita] = useState('')

    if (thumbnail === '') {
        thumbnail = "../../../../assets/defaultUser.png"
        nombre = ''
    }

    const handleClickLupita = () => {
        if(lupitaIsActive){
            setFiltroMensajes('')
        }
        setLupitaIsPressed(!lupitaIsActive)
        lupitaIsActive ?
            setColorLupita('') :
            setColorLupita('#152027')
    }

    const handleFiltro = (e) => {
        setFiltroMensajes(e.target.value)
    }

    return (
        <>
            <div className='header'>
                <div className='izquierda'>
                    <Link to={'/'} style={{ display: 'flex' }}>
                        <HiArrowSmLeft style={{ color: 'white', width: '25px', height: '30px' }} />
                    </Link>
                    <img src={thumbnail} className='fotoPerfil' alt='foto-perfil' />
                    <h3>
                        {nombre}
                    </h3>
                </div>
                <div className='derecha'>
                    <button className='boton'>
                        <img src={camaraIcono} alt="icono-camara" />
                    </button>
                    <button className='boton'>
                        <img src={telefono} alt="icono-telefono" style={{ width: '21px', height: '21px' }} />
                    </button>
                    <button
                        className='boton'
                        onClick={handleClickLupita}
                        style={{ backgroundColor: colorLupita, borderRadius: '50%' }}>
                        <img src={lupita} alt="icono-lupita" style={{ width: '21px', height: '21px' }} />
                    </button>
                </div>
            </div>
            <div className='filtro' style={{ display: lupitaIsActive ? '' : 'none' }}>
                <input onChange={handleFiltro}></input>
            </div>
        </>
    )
}

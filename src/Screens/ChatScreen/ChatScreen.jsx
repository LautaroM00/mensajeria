import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './ChatScreen.css'

import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'

import { fetchContactos } from '../index'




export const ChatScreen = () => {

    let urlParams = useParams()
    let idParams = urlParams.id

    const [sumatoriaMensajes, addMsj] = useState('')
    const [filtroMensajes, setFiltroMensajes] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [contactos, setContactos] = useState([
        {
            nombre: '',
            mensajes: [
                {
                    author: "",
                    text: "",
                    estado: "",
                    day: "",
                    hour: "",
                    id: ""
                }
            ],
            thumbnail: '',
            id: Number(idParams)
        }
    ])
    useEffect(() => {
        if (isLoading) {
            setTimeout(
                () => {
                    fetchContactos()
                        .then((contactos) => {
                            setContactos(contactos)
                            const mensajesContacto = contactos[Number(idParams) - 1].mensajes
                            addMsj(mensajesContacto)
                            setLoading(false)
                        })
                    console.log('dentro del timeout')
                }
                , 1000
            )
        }
        if (filtroMensajes && sumatoriaMensajes) {
            const mensajesFiltrados = sumatoriaMensajes.filter((mensaje) => {
                const textoMensaje = mensaje.text.toLowerCase()
                return textoMensaje.includes(filtroMensajes)
            })
            console.clear()
            if(mensajesFiltrados.length !== 0){
                console.log(`Coincidencias encontradas :`)
                sumatoriaMensajes.forEach((mensaje) => {
                    mensajesFiltrados.forEach((mensajeFiltro) => {
                        if(mensaje.id === mensajeFiltro.id){
                            const mensajeResaltado = mensaje.text.replace(filtroMensajes, `|${filtroMensajes}|`)
                            console.log(`       Mensaje n°${mensaje.id}: ${mensajeResaltado}`)
                        }
                    })
                })
            }else{
                console.log('No se encontraron coincidencias')
            }


        }
        if(!filtroMensajes){
            console.clear()
        }
    },
        [filtroMensajes]
    )

    const MOOK_DATA = contactos.find((contacto) => contacto.id === Number(idParams))
    const { nombre, thumbnail, id } = MOOK_DATA


    /*     const mensajesLS = contactosLS[id - 1].mensajes */

    const agregarMensaje = (mensaje) => {
        addMsj(
            [...sumatoriaMensajes, {
                author: 'Tú: ',
                text: mensaje,
                estado: 'visto',
                day: 'hoy',
                hour: '13:28',
                id: sumatoriaMensajes.length + 1
            }]
        )
    }
    return (
        <div className="pantalla">
            {isLoading
                ? <div className='ChatScreen'>
                    <ChatHeaderInfo nombre={nombre} thumbnail={thumbnail} filtroMensajes={filtroMensajes} setFiltroMensajes={setFiltroMensajes} isLoading={true} />
                    <div className='chatLoading'>
                        <ListaMensajes lista={[]} isLoading={true} />
                    </div>
                    <MensajeForm isLoading={true} />
                </div>
                : <div className='ChatScreen'>
                    <ChatHeaderInfo nombre={nombre} thumbnail={thumbnail} filtroMensajes={filtroMensajes} setFiltroMensajes={setFiltroMensajes} />
                    <div className='chat'>
                        <ListaMensajes lista={sumatoriaMensajes} isLoading={false} />
                    </div>
                    <MensajeForm agregarMensaje={agregarMensaje} />
                </div>
            }
        </div>
    )
}
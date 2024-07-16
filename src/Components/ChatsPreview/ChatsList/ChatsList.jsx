import React, { useEffect, useState } from 'react'
import './ChatsList.css'
import { ChatPreview } from '../index'
import { Link } from 'react-router-dom'
import { fetchContactos } from '../../../Screens'
import { defaultChatPreview } from './loading.js'

const ChatsList = ({ textoFiltro }) => {

    const [contactos, setContactos] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(
        () => {
            setTimeout(() => {
                fetchContactos().then((contactos) => {
                    setContactos(contactos)
                    setLoading(false)
                })
            },
                1000
            )
        }
    )

    const contactosFiltrados = contactos.filter((contacto) => {
        return contacto.nombre.toLowerCase().includes(textoFiltro)
    }) 

    return (
        <div className='ChatsList'>
            {
                isLoading ?
                    <>
                        <ChatPreview datos={defaultChatPreview[0]} />
                        <ChatPreview datos={defaultChatPreview[0]} />
                        <ChatPreview datos={defaultChatPreview[0]} />
                    </> :
                    textoFiltro ?
                            contactosFiltrados.map((contacto, index) => {
                                return (
                                    <Link key={index} to={'chat/' + contacto.id}>
                                        <ChatPreview datos={contacto} />
                                    </Link>
                                )
                            }):
                        contactos.map((contacto, index) => {
                            return (
                                <Link key={index} to={'chat/' + contacto.id}>
                                    <ChatPreview datos={contacto} />
                                </Link>
                            )
                        })
            }
        </div>
    )
}

export default ChatsList
import React from 'react'
import { Mensaje } from '../index'
import './ListaMensajes.css'
import { ProgressSpinner } from 'primereact/progressspinner'

export const ListaMensajes = ({ lista, isLoading }) => {
    return (
        <>
            {
                isLoading ?
                    <div className='contenedor' style={{ justifyContent: 'center', alignContent: 'center' }}>
                        <ProgressSpinner />
                    </div> :
                    lista.map((mensaje, index) => {
                        return (
                            <Mensaje lista={mensaje} key={index} />
                        )
                    })}
        </>
    )
}

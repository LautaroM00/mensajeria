const setearLS = () => { //LS: localStorage
    let valorDeKey = localStorage.getItem('contactos')

    if(valorDeKey === null){
        let contactos_string = JSON.stringify(contactos)

        localStorage.setItem('contactos', contactos_string)
    }
}

const traerContactosLS = () => { //LS: localStorage
    setearLS()

    let contactos_string = localStorage.getItem('contactos')

    let contactos_objeto = JSON.parse(contactos_string)

    return contactos_objeto
}

const guardarMensajeLS = (id, nuevoMensaje) => {

    const contactosLS = traerContactosLS()

    contactosLS[id].mensajes.push(nuevoMensaje)

    let contactosLS_string = JSON.stringify(contactosLS)

    localStorage.setItem('contactos', contactosLS_string)
}

export { traerContactosLS, guardarMensajeLS } 
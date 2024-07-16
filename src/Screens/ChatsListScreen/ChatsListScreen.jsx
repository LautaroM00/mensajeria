import React, { useState } from 'react'
import './ChatsListScreen.css'

import { ChatsList, ChatsPreviewFooter, ChatsPreviewHeader } from '../../Components/ChatsPreview'

const ChatsListScreen = () => {

    const [textoFiltro, setTextoFiltro] = useState('')
    return (
        <div className={'pantalla'}>
            <div className={'ChatsListScreen'}>
                <ChatsPreviewHeader setTextoFiltro={setTextoFiltro}/>
                <ChatsList textoFiltro={textoFiltro}/>
{/*                 <ChatsPreviewFooter /> */}
            </div>
        </div>
    )
}

export default ChatsListScreen
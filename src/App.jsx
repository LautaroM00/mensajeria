import React from "react"
import { Route, Routes } from "react-router-dom"

import { ChatScreen } from "./Screens"
import ChatsListScreen from "./Screens/ChatsListScreen/ChatsListScreen"

function App() {

    return (
        <Routes>
            <Route path="/" element={<ChatsListScreen />} />
            <Route path='chat/:id' element={<ChatScreen />} />
        </Routes>
    )
}

export default App

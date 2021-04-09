import React from 'react'
import Chat from '../../components/chat/Chat'
import Sidebar from '../../components/sidebar/Sidebar'
import './styles.css'

function MessageScreen() {
    return (
        <div className='imessage'>
            {/* Sidebar component which holds message rooms */}
            <Sidebar />
            <Chat />
            {/* Chat */}
        </div>
    )
}

export default MessageScreen

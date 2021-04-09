import { MicNone } from '@material-ui/icons';
import React, { useState } from 'react'
import './styles.css'

function Chat() {
    //useState initial value & function to update initial value
    const [message, setMessage] = useState('');

    //when button fires this function it'll give event data to us
    const sendMessage = (e) => {
        e.preventDefault();
        //firebase ....

        setMessage('')

    }

    return (
        <div className='chat'>
            {/* HEADER. INFO about who are you texting with. or name of room*/}
            <div className='chat__header'>
                <h4>To: <span className='chat__name'>Chanell name</span></h4>
                <strong>Details</strong>
            </div>
            {/* chat messages */}
            <div className='chat__messages'>

            </div>

            {/* chat input */}
            <div className='chat__input'>
                <form>
                    <input placeholder='Message'
                        value={message} type='text'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send message</button>
                </form>

                <MicNone className='chat__mic' />
            </div>

        </div>
    )
}

export default Chat

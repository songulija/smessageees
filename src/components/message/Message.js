import { Avatar } from '@material-ui/core'
import React from 'react'
import {useSelector} from 'react-redux'
import './styles.css'

//destructure props that are send to this component
function Message({id, content: {timestamp, displayName, email, message, photo, uid}}) {
    //useSelector is functin to get global state & we can pullout user state from it
    const user = useSelector((state)=>state.user)
    const {currentUser} = user;

    console.log(message)


    return (//if logged user email is equal to this message component email then. this message will have additional style
        <div className={`message ${user.email === email && 'message__sender'}`}>
            <Avatar className='message__photo' src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default Message

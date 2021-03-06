import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import {useSelector} from 'react-redux'
import './styles.css'

//forwardRef is for animation
//destructure props that are send to this component
const Message = forwardRef(({id, content: {timestamp, displayName, email, message, photo, uid}}, ref)=> {
    //useSelector is functin to get global state & we can pullout user state from it
    const user = useSelector((state)=>state.user)
    const {currentUser} = user;

    console.log(message)


    return (//if logged user email is equal to this message component email then. this message will have additional style
        <div ref={ref} className={`message ${currentUser.email === email && 'message__sender'}`}>
            <Avatar className='message__photo' src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
})

export default Message

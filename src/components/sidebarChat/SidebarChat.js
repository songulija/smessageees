import { Avatar } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { setChat } from '../../redux/actions/chatActions'
import firestore from '../../firebase/firebase'
import './styles.css'

//destructuring props that are send to this component
function SidebarChat({id, chatName}) {

    const dispatch = useDispatch()
    const [chatInfo, setChatInfo] = useState([]);


    useEffect(()=>{
        //go to chats collection, to document with chatId, and to messages collection.
        //and order documents by timestamp, descending
        firestore.collection('chats').doc(id).collection('messages')
        .orderBy('timestamp', 'desc').onSnapshot(snapshot =>{//on any change in messages collection
            //we'll receive list of updated documents. map through each document of snapshot doucuments
            setChatInfo(snapshot.docs.map((doc) => doc.data()))
            //we will have in chatInfo all messages collection documents data

        })

    }, [id])//if chatId changes then it'll trigger useEffect function

    const handleChat = ()=>{
        // dispatch setChat action and pass selected chatId and chatName
        dispatch(setChat({chatId: id, chatName: chatName}))
    }

    return (
        // when click on chat it will dispatch setChat.
        <div onClick={handleChat} className='sidebarChat'>
            <Avatar src={chatInfo[0]?.photo}/>
            <div className='sidebarChat__info'>
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>{new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}</small>
            </div>
        </div>
    )
}

export default SidebarChat

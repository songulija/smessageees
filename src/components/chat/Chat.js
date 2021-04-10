import { MicNone } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Message from '../message/Message';
import firestore from '../../firebase/firebase'
import firebase from 'firebase'
import './styles.css'

function Chat() {
    //useState initial value & function to update initial value
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([])


    const user = useSelector((state)=>state.user)
    const {currentUser} = user;
    
    //useSelector is function to get global state & we cal pullout chat state from it
    const chat = useSelector((state)=>state.chat)
    const {currentChat} = chat;
    



    useEffect(()=>{
        if(currentChat){//if currentChat has any data on it meaning chat was selectedd
            console.log('Selected')
            firestore.collection('chats').doc(currentChat.chatId)
                .collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
                    //onSnapshot means when something in database changes we get snapshot
                    //get all documents and map through each of document

                    //map through every single docuemnt, we map it to object
                    setMessages(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),//set data to data from document
                        uid: currentUser.uid,
                        photo: currentUser.photo,
                        email: currentUser.email,
                        displayName: currentUser.displayName
                    })))//set uid, photo, email from logged user data
                    //so we store all messages from db to messages array
            })
        }
        
    },[currentChat])
    //currentChat changes then it'll trigger useEffect
    
    //if var inside these [] changes it will trigger useEffect function 

    //when button fires this function it'll give event data to us
    const sendMessage = (e) => {
        e.preventDefault();
        //firebase ..... . go into chats collection. into document with that id
        //and access messages collection if it exists if not create. add new document to messages col
        firestore.collection('chats').doc(currentChat.chatId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: currentUser.uid,
            photo: currentUser.photo,
            email: currentUser.email,
            displayName: currentUser.displayName
        })
        //timestamp will give actual time of server. no matter where you are

        setInput('')

    }

    return (
        <div className='chat'>
            {/* HEADER. INFO about who are you texting with. or name of room*/}
            <div className='chat__header'>
                <h4>To: <span className='chat__name'>{currentChat? currentChat.chatName : 'Select chat'}</span></h4>
                <strong>Details</strong>
            </div>
            {/* chat messages */}
            <div className='chat__messages'>
                {/* map through messages array, destructure each message to id and data */}
                {messages.map(({id, data})=>(
                    <Message key={id} id={id} content={data}/>
                ))}
            </div>

            {/* chat input */}
            <div className='chat__input'>
                <form>
                    <input placeholder='Message'
                        value={input} type='text'
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send message</button>
                </form>

                <MicNone className='chat__mic' />
            </div>

        </div>
    )
}

export default Chat

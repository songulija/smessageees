import { Avatar, IconButton } from '@material-ui/core'
import { RateReviewOutlined, Search, ExitToApp } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {auth} from '../../firebase/firebase'
import firestore from '../../firebase/firebase'
import SidebarChat from '../sidebarChat/SidebarChat'
import './styles.css'

function Sidebar() {

    const [chats, setChats] = useState([])

    //useSelector allows to get global state & we can pullout user state from it
    const user = useSelector((state)=>state.user)
    const {currentUser} = user;
    //useEffect triggers when components loads up
    useEffect(()=>{
        //create new collection in firestore if it doesnt exist
        //onSnapshot gives us real time list, which gives snapshot of database
        //whenever something changes
        firestore.collection('chats').onSnapshot(snapshot => {
            //when something in database changes we get snapshot
            //get all documents and map through each of document
            setChats(snapshot.docs.map((doc) =>({//it returns an object
                id: doc.id,//set id to document id
                data: doc.data(),//and set data to doc data
            })))
            //when that changes setChats
        })
    },[])


    const addChat = ()=>{
        //prompt will popup and you can write chat name
        const chatName = prompt('Please enter chat name')
        //add new document to chats collection
        if(chatName){
            firestore.collection('chats').add({
                chatName: chatName,
            })
        }
        
    }


    return (
        <div className='sidebar'>
            {/* first we have sideba header in in sidebar input */}
            <div className='sidebar__header'>
                <Avatar src={currentUser.photo} className='sidebar__avatar' />
                {/* Search box */}
                <div className='sidebar__input'>
                    <Search />
                    <input type='text' placeholder='Search' />
                </div>
                {/* wrapping  RateReviewOutlined icon in IconButton so it will be clickable*/}
                <IconButton variant='outlined' className='sidebar__inputButton'>
                    <RateReviewOutlined onClick={addChat}/>
                </IconButton>
                <IconButton variant='outlined' className='logout__button' onClick={()=> auth.signOut()}>
                    <ExitToApp/>
                </IconButton>
            </div>

            <div className='sidebar__chats'>
                {/* for each chat in chats array create SidebarChat component, destructure chat  */}
                {chats.map(({id, data: {chatName}}) => (
                    <SidebarChat key={id} id={id} chatName={chatName}/>
                ))}
                
            </div>

        </div>
    )
}

export default Sidebar

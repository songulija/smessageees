import { Button } from '@material-ui/core'
import React from 'react'
import {auth, provider} from '../../firebase/firebase'
import './styles.css'


function LoginScreen() {

    const signIn = (e)=>{
        // it will show google popup to sign in
        auth.signInWithPopup(provider)
        .catch((error)=>alert(error.message))
        //if error it will catch it
    }

    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png' atl=''/>
            </div>
        <Button onClick={signIn}>Sign In</Button>
            
        </div>
    )
}

export default LoginScreen
 
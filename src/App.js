import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import MessageScreen from './screens/messageScreen/MessageScreen'
import './App.css';
import LoginScreen from './screens/loginScreen/LoginScreen';
import {auth} from './firebase/firebase'
import { loginUser, logoutUser } from './redux/actions/userActions';

function App() {

  const dispatch = useDispatch();

  //useSelector that gets global state & we can pullout user state from it
  const user = useSelector((state) => state.user)
  const { currentUser } = user;
  console.log(currentUser)

  useEffect(() => {
    //listening for any authentication changes. when any change occursX go ahead
    //and use authUser
    auth.onAuthStateChanged(authUser => {
      if(authUser){//if there was authUser then use is logged in
        //dispatch loginUser action and provide user object
        dispatch(loginUser({//pass object. setting uid to what comes back  from google when we login
          uid: authUser.uid,
          photo: authUser.photoURL,//we can get authUser photoUrl, email and display name
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }else{//else user is logged out
        //dispatch logoutUser action. reducer will set currentUser back to null
        dispatch(logoutUser())
      }
    })
  },[])
  //if you put something in []. when that var changes it will trigger useEffect function

  return (
    //BAM naming conventions.
    <div className="app">
      {currentUser ? (
        <MessageScreen />
      ) : (
        <LoginScreen />
      )}

    </div>
  );
}

export default App;

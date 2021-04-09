import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBTTjcoodPt5e6j9vCKEWkBIUzHyE5xNrE",
    authDomain: "messageees.firebaseapp.com",
    projectId: "messageees",
    storageBucket: "messageees.appspot.com",
    messagingSenderId: "723806408554",
    appId: "1:723806408554:web:8ca870d711e27ab794df13",
    measurementId: "G-6GSXWYT5VE"
};

//initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig)
//getting hold of firestore and auth
const db = firebaseApp.firestore()
const auth = firebase.auth();

//creating new GoogleAuthProvider so we can login with google
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;//export firebase by default




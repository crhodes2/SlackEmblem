import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCQg5mNHRnzG2n44EIfPyqeZRvw-HOMRg0",
    authDomain: "slackemblem.firebaseapp.com",
    projectId: "slackemblem",
    storageBucket: "slackemblem.appspot.com",
    messagingSenderId: "249481743763",
    appId: "1:249481743763:web:6ac2edef154203fe616c66"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;

import firebase from 'firebase';
import firestore from 'firebase/firestore';
import database from 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyC1YN5op5xwvooZeFHuLoxstB2V7KfiTIM",
    authDomain: "react-firebase-project-5b973.firebaseapp.com",
    projectId: "react-firebase-project-5b973",
    storageBucket: "react-firebase-project-5b973.appspot.com",
    messagingSenderId: "351269995670",
    appId: "1:351269995670:web:0b45065875c751d683eeb7"  
};

const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
 

export default fire;
export {db};
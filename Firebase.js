
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAvSzxoP3VjisX_e2CLeqbrpLJmrG_NHZM",
  authDomain: "insta-clone-801f5.firebaseapp.com",
  projectId: "insta-clone-801f5",
  storageBucket: "insta-clone-801f5.appspot.com",
  messagingSenderId: "53251449431",
  appId: "1:53251449431:web:a3ca930ad808ce23b73912",
};

!firebase.apps.length?
firebase.initializeApp(firebaseConfig):
firebase.app()

const db = firebase.firestore();
export {firebase,db};
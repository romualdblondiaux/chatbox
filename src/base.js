import Rebase from 're-base'
// optimisation (plus rzapide et plus legère)
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTdLa5-IUicwtQBhiHmddnUGMucOIcxR0",
    authDomain: "chatbox-d7712.firebaseapp.com",
    databaseURL: "https://chatbox-d7712-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebase.database())  // gestion de la base de données

export {firebaseApp}  // initialisation de l'application'

export default base
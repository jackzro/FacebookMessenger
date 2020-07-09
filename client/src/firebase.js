import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBH1Df_U4iI1srKdwVL_23HNyjJLjwOWCA",
    authDomain: "facebook-messenger-clone-4c669.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-4c669.firebaseio.com",
    projectId: "facebook-messenger-clone-4c669",
    storageBucket: "facebook-messenger-clone-4c669.appspot.com",
    messagingSenderId: "288145499501",
    appId: "1:288145499501:web:f6129cef5f18fad7592664"
})

const db = firebaseApp.firestore()


export default db
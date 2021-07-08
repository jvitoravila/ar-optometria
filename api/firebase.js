import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCiPsh5SlZUokyR35SlzRZJUXXJLfwSlfQ",
    authDomain: "ar-optometria-cacb1.firebaseapp.com",
    projectId: "ar-optometria-cacb1",
    storageBucket: "ar-optometria-cacb1.appspot.com",
    messagingSenderId: "868408896220",
    appId: "1:868408896220:web:0e94a5d025c980fa296219",
    measurementId: "G-6NWSDRPP3F"
}

if (!firebase.apps.length) {
    let firebaseApp = firebase.initializeApp(firebaseConfig);
}
let db = firebase.firestore();

export { db, firebase };
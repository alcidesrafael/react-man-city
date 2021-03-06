import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBv09E-5cODqRVobo_BIG0tXjxaM4CBfCo",
    authDomain: "m-city-34563.firebaseapp.com",
    databaseURL: "https://m-city-34563.firebaseio.com",
    projectId: "m-city-34563",
    storageBucket: "m-city-34563.appspot.com",
    messagingSenderId: "532549266612"
}

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}

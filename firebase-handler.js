import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD9iR4okBA8TRKZZtOGd_F57CF54kQpExQ",
    authDomain: "colorassn.firebaseapp.com",
    databaseURL: "https://colorassn-default-rtdb.firebaseio.com/",
    projectId: "colorassn",
    storageBucket: "colorassn.appspot.com",
    messagingSenderId: "820973011771",
    appId: "1:820973011771:web:80d213bbd5a510cc2d2d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function write2DB(userId, text) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        text: text
    });
}
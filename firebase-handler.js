// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// Documentation: https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
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

const dbRef = ref(getDatabase());
get(child(dbRef, `/`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val().users);
        window.userData = snapshot.val().users;
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
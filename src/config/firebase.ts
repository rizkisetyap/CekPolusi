// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDi5lYEiVZ__pyKM8hyQqkcvBsPDy5ShcE",
	authDomain: "cekpolusi-150f9.firebaseapp.com",
	databaseURL: "https://cekpolusi-150f9-default-rtdb.firebaseio.com",
	projectId: "cekpolusi-150f9",
	storageBucket: "cekpolusi-150f9.appspot.com",
	messagingSenderId: "248031045834",
	appId: "1:248031045834:web:ca5829fe261562cec12c33",
	measurementId: "G-YG84LC03W0",
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const realtimeDB = getDatabase(app);

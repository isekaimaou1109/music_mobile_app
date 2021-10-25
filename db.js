import { initializeApp } from 'firebase/app';
import { collection, doc, query, where, getDocs, getFirestore } from "firebase/firestore"; 
import { GoogleAuthProvider } from "firebase/auth";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgnpWekFMyo1elRZZYAJgJAS8vJtC5PJg",
    authDomain: "isekai-storage.firebaseapp.com",
    databaseURL: "https://isekai-storage-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "isekai-storage",
    storageBucket: "isekai-storage.appspot.com",
    messagingSenderId: "1084009847633",
    appId: "1:1084009847633:web:9ce7b1044599cf63a89170"
};

initializeApp(firebaseConfig)

export const db = getFirestore();
const provider = new GoogleAuthProvider();

export async function getUser(username, password = null) {
    const q = query(collection(db, "entities"), where("username", "==", username), where("password", "==", password));
    const result = {}

    const docs = await (await getDocs(q)).docs;

    for(let doc of docs) {
        return {
            id: doc.id,
            ...doc.data()
        }
    }
}

export function createuser() {

}
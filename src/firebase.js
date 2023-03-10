import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const app = firebase.initializeApp({
  apiKey: "AIzaSyCXoG-qz3w42y0-NJwIXN0P6XD3QQf3gQk",
  authDomain: "drive-clone-1e567.firebaseapp.com",
  projectId: "drive-clone-1e567",
  storageBucket: "drive-clone-1e567.appspot.com",
  messagingSenderId: "516007695497",
  appId: "1:516007695497:web:5da691617f79aca9106258",
  measurementId: "G-9K6FCHP178",
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app

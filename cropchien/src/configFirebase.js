
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyAx5EoCa2QecbDQmdz9Y7r15jRTOuCW8V4",
  authDomain: "cropchien-17502.firebaseapp.com",
  databaseURL: "https://cropchien-17502.firebaseio.com",
  projectId: "cropchien-17502",
  storageBucket: "cropchien-17502.appspot.com",
  messagingSenderId: "153804693029",
  appId: "1:153804693029:web:743942715c70660f"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default {
  db
}
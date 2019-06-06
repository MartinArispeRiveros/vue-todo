
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
 apiKey: 'AIzaSyAx5EoCa2QecbDQmdz9Y7r15jRTOuCW8V4',
 authDomain: '<Your auth Domain here>',
 databaseURL: 'https://cropchien-17502.firebaseio.com/',
 projectId: 'cropchien-17502',
 storageBucket: '<Your storageBucket here>',
 messagingSenderId: '<Your messagingSenderId here>'
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
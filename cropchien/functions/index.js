const functions = require('firebase-functions');
const admin = require('firebase-admin');
var cors = require('cors') ({ origin:true });
const express = require('express');
const axios = require('axios');
const serverKey = require('./serverKey');

// const app = express();

// app.get('/timestamp', (req, res) => {
//   res.send(`${Date.now()}`);
// });
admin.initializeApp(functions.config().firebase);
let firestore = admin.firestore()
// exports.generalSubscription = functions.https.onRequest(app);




exports.generalSubscription = functions.https.onRequest((req, res) => { 
  cors(req, res, function() {
    axios.post(`https://iid.googleapis.com/iid/v1/${req.body.token}/rel/topics/general/`,
    {},
    {
      headers: {
        'Content-Type':'application/json',
        'Authorization': `key=${serverKey}`
      },
    }).then((res) => {
      firestore.collection('tokens').add({ token: req.body.token }).then(ref => {
        res.status(200).send(`notifications subscription successful`);
      });
    }).catch((err) => {
      res.status(500).send({ 
        message: 'Whops! there was an error',
        error:err.response
      });
    })
  }); 
});

exports.createDog = functions.firestore.document('dogs/{dogId}').onCreate(event => {
  var dog = event.data();
  console.log('dog.comment'. dog.comment);

  axios.post(`https://fcm.googleapis.com/fcm/send`,{
    "to" : "/topics/general",
    "priority" : "high",
    "notification" : {
        "title" : "Nueva publicación",
        "body" : dog.comment,
        "click_action":"http://localhost:8081",
        "icon":"http://localhost:8081/chrome/chrome-installprocess-128-128.png",
    },
  },{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `key=${serverKey}`
    },
  }).then((response) => {
    console.log(response);
    console.log(response.data);
  }).catch(err => {
    console.log(err.response);
  })
});
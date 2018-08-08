  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyATpHiBE7deZAi56mekXmJ2ohzj8enjfgo",
    authDomain: "registratemyvisit.firebaseapp.com",
    databaseURL: "https://registratemyvisit.firebaseio.com",
    projectId: "registratemyvisit",
    storageBucket: "registratemyvisit.appspot.com",
    messagingSenderId: "511424147980"
  };
  firebase.initializeApp(config);


  firebase.initializeApp({
    apiKey: "AIzaSyATpHiBE7deZAi56mekXmJ2ohzj8enjfgo",
    authDomain: "registratemyvisit.firebaseapp.com",
    projectId: "registratemyvisit"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

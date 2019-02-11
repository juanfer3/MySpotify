import * as firebase from 'firebase'; 



// Initialize Firebase
const config = {
    apiKey: "AIzaSyBJ7E-Ey1_PGgswfR9EQO7cQiVNndcIrXc",
    authDomain: "myspotify-a9a04.firebaseapp.com",
    databaseURL: "https://myspotify-a9a04.firebaseio.com",
    projectId: "myspotify-a9a04",
    storageBucket: "myspotify-a9a04.appspot.com",
    messagingSenderId: "997555286226"
  };
  firebase.initializeApp(config);

  function getInfo(){
    const usuarios = firebase.database().ref().child('usuarios')
    
    console.log(firebase.database().ref().child('form').child('usuarios'))
    return usuarios
}

export {
    getInfo
}

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUw1hOBSkI7gQGB0ysfyM0nWKFrObZTEw",
    authDomain: "voting-app-5ff13.firebaseapp.com",
    projectId: "voting-app-5ff13",
    storageBucket: "voting-app-5ff13.appspot.com",
    messagingSenderId: "1064229738112",
    appId: "1:1064229738112:web:fa50faeaf2cc69be463865"
});

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}


const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          setTimeout(() => {
            window.location.href = "vote.html";
            console.log(result)
          } , 2000)
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
      });
}


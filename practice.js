// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDxuGYyOIfI9s9ZePFSX9ulsHYJL5YKjd8",
    authDomain: "class94kwitter-app.firebaseapp.com",
    databaseURL: "https://class94kwitter-app-default-rtdb.firebaseio.com",
    projectId: "class94kwitter-app",
    storageBucket: "class94kwitter-app.appspot.com",
    messagingSenderId: "838665090968",
    appId: "1:838665090968:web:bf9960eb57dcd5cc11dded"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function Add_UserName() 
{
    
  username = document.getElementById("username").value;
  firebase.database().ref("/").child(username).update({
 purpose:"adding user"});
 console.log(username)
}
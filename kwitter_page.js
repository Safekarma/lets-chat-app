var firebaseConfig = {
    apiKey: "AIzaSyBtzsdqcvDBizUHwjQfAFNj5nBUMNciB1g",
    authDomain: "lets-chat-app-94988.firebaseapp.com",
    databaseURL: "https://lets-chat-app-94988-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-94988",
    storageBucket: "lets-chat-app-94988.appspot.com",
    messagingSenderId: "68207915690",
    appId: "1:68207915690:web:fda8c73dd8c38c6d0396d3",
    
  };

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function getData() {firebase.database().ref("/"+room_name).on('value' , function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firbase_message_id = childkey;
    message_data = childData;


  } }); }); }
  getData();
  function send()
  {
    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value = "";
  }

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
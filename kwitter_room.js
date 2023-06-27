var firebaseConfig = {
    apiKey: "AIzaSyBtzsdqcvDBizUHwjQfAFNj5nBUMNciB1g",
    authDomain: "lets-chat-app-94988.firebaseapp.com",
    databaseURL: "https://lets-chat-app-94988-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-94988",
    storageBucket: "lets-chat-app-94988.appspot.com",
    messagingSenderId: "68207915690",
    appId: "1:68207915690:web:fda8c73dd8c38c6d0396d3",
    
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome   "+ user_name+ "!";
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

    comsole.log("Room name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;

    getData();

function addRoom()
    {
        room_name = documnet.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
    purpose: " adding room name"
});

localStorage.setItem("room_name", room_name);

window.location="kwitter_page.html";
    }

    function redirectToRoomName(name)
    {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location="kwitter_page.html";
    }

    function logout()
    {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
    }
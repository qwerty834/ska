var firebaseConfig = {
      apiKey: "AIzaSyAyECeDzvoWISuJKOZYOp53P28qQBpSijc",
      authDomain: "kiwtter-8b34e.firebaseapp.com",
      databaseURL: "https://kiwtter-8b34e-default-rtdb.firebaseio.com",
      projectId: "kiwtter-8b34e",
      storageBucket: "kiwtter-8b34e.appspot.com",
      messagingSenderId: "671537579284",
      appId: "1:671537579284:web:a4a5b45006af3e17e0ae01",
      measurementId: "G-D6X5D6S61P"
    };
    firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem('ask.2');
    var room_name = localStorage.getItem('room_name');
    function out(){
      localStorage.removeItem("ask.2");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

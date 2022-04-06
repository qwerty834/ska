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
    document.getElementById('user').innerHTML = "Welcome " + user_name;
    function add_room_f(){
          room_name = document.getElementById('add_room').value;
          firebase.database().ref("/").child(room_name).update({
            purpose : "add your roomname"  
      });
      localStorage.setItem('room_name',room_name);
      window.location = "kwitter_room.html";     
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+"onclick='redirect_to_Room_name(this.id)'>#"+Room_names+"</div>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirect_to_Room_name(name){
      console.log(name);
      localStorage.setItem("room",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("ask.2");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


var firebaseConfig = {
  apiKey: "AIzaSyA1-3fVmkXEtkg00Xvk44XpIkdv2vm0h20",
  authDomain: "chatapp4142.firebaseapp.com",
  databaseURL: "https://chatapp4142.firebaseio.com",
  projectId: "chatapp4142",
  storageBucket: "chatapp4142.appspot.com",
  messagingSenderId: "1073445067012",
  appId: "1:1073445067012:web:d978f4ab9db76f8810d851",
  measurementId: "G-8WP2HWHDJB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
 { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

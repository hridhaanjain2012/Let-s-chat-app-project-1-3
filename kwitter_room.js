
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBP74d-p30r1dXuoY0QX1PvUgrVr61nxns",
      authDomain: "let-s-chat-app-60cb4.firebaseapp.com",
      projectId: "let-s-chat-app-60cb4",
      storageBucket: "let-s-chat-app-60cb4.appspot.com",
      messagingSenderId: "269461612261",
      appId: "1:269461612261:web:c551a42a6a935734fa160c",
      measurementId: "G-34SYDZ9PNH"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
 purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Names - " + Room_names);
       row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName'(this.id)'>#"+ Room_names +"</div><hr>"
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
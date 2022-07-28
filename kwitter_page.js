function logout(){
    localStorage.removeItem("User_Name");
    localStorage.removeItem("room_select");
    window.location = "index.html"
}

const firebaseConfig = {
    apiKey: "AIzaSyAx4BX-1oxN-51XsKoAZ5-CKeD0w1PQfXM",
    authDomain: "kwitter-4d9f1.firebaseapp.com",
    databaseURL: "https://kwitter-4d9f1-default-rtdb.firebaseio.com",
    projectId: "kwitter-4d9f1",
    storageBucket: "kwitter-4d9f1.appspot.com",
    messagingSenderId: "329547716687",
    appId: "1:329547716687:web:17e1a65c8c6be989e6723a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
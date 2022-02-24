const firebaseConfig = {
  apiKey: "AIzaSyDyfB9UP-RmZLdf0pW3KJhLBSRok5itPzU",
  authDomain: "mrashed-me.firebaseapp.com",
  projectId: "mrashed-me",
  storageBucket: "mrashed-me.appspot.com",
  messagingSenderId: "295257431828",
  appId: "1:295257431828:web:9806f8175bdcdf4c22ec01",
  measurementId: "G-3C9J734R29"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("ContactData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let Name = document.getElementById('name').value
  let Email = document.getElementById('email').value
  let Subject = document.getElementById('subject').value
  let Message = document.getElementById('message').value

  //Save Form Data To Firebase
  db.doc().set({
    Name: Name,
    Email: Email,
    Subject: Subject,
    Message: Message
  }).then( () => {
    console.log("Data saved")
    alert("Your Form Has Been Submitted Successfully")
  }).catch((error) => {
    console.log(error)
  })
})
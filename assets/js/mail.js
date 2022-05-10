const firebaseConfig = {
  apiKey: "AIzaSyDyfB9UP-RmZLdf0pW3KJhLBSRok5itPzU",
  authDomain: "mrashed-me.firebaseapp.com",
  databaseURL: "https://mrashed-me-default-rtdb.firebaseio.com",
  projectId: "mrashed-me",
  storageBucket: "mrashed-me.appspot.com",
  messagingSenderId: "295257431828",
  appId: "1:295257431828:web:9806f8175bdcdf4c22ec01",
  measurementId: "G-3C9J734R29",
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactFrom");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var subject = getElementVal("subject");
  var message = getElementVal("message");

  saveMessages(name, email, subject, message);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, subject, message) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

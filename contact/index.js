// security pass: xblbqnhbanjhpfdi
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "your data",
  authDomain: "your data",
  databaseURL: "your data",
  projectId: "your data",
  storageBucket: "your data",
  messagingSenderId: "your data",
  appId: "your data",
  measurementId: "your data"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

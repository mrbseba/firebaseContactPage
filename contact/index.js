// security pass: xblbqnhbanjhpfdi
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDiAMDEF74g0QZeQxmZywI70QnZN6YhwDo",
  authDomain: "js-test-ae710.firebaseapp.com",
  databaseURL: "https://js-test-ae710-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "js-test-ae710",
  storageBucket: "js-test-ae710.appspot.com",
  messagingSenderId: "691903707435",
  appId: "1:691903707435:web:d52af30be9a9e5ea99ed6e",
  measurementId: "G-2W7PDT4726"
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
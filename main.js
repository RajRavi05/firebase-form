// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQMHHV4lVmBf_kDG9TI72DMm4aTXBsBio",
    authDomain: "contact-form-550c1.firebaseapp.com",
    databaseURL: "https://contact-form-550c1.firebaseio.com",
    projectId: "contact-form-550c1",
    storageBucket: "contact-form-550c1.appspot.com",
    messagingSenderId: "210194807244",
    appId: "1:210194807244:web:f9d1921166e3828eff8569"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

//   show alert
    document.querySelector('.showAlert').style.display = 'block';

    // hide alert
    setTimeout(function(){
        document.querySelector('.showAlert').style.display = 'none';
    },3000);

    // reset
    document.getElementById('contactForm').reset();
}
// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
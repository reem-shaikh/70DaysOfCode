const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyDbrazNQRPx3xhDGD2Zqn82AP3zRmFCjL8",
    authDomain: "contactform-511d8.firebaseapp.com",
    databaseURL: "https://contactform-511d8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contactform-511d8",
    storageBucket: "contactform-511d8.appspot.com",
    messagingSenderId: "972073534913",
    appId: "1:972073534913:web:7901463ebe08312663db40"
  
  };
  
  // firebase is the object were retreiving from the CDN we retreived 
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  //when user clicks on subit, it triggers this function
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    console.log(name, emailid, msgContent)
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  //save message to firebase 
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
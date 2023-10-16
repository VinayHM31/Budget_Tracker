const form = document.querySelector("form"),
  usernameField = form.querySelector(".username-field"),
  usernameInput = usernameField.querySelector(".username"),  

  lastnameField = form.querySelector(".lastname-field"),
  lastnameInput = lastnameField.querySelector(".lastname"),

  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  
  phonenumberField = form.querySelector(".phonenumber-field"),
  phonenumberInput = phonenumberField.querySelector(".mobile_number"),

  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),

  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

//username Validation
function checkUsername(){
    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    if(!usernameInput.value.match(usernamePattern)){
        return usernameField.classList.add("invalid");
    }
    usernameField.classList.remove("invalid");
};

function lastnameCheck(){
  const lastnamePattern = /^[a-zA-Z]{2,10}$/;
  if(!lastnameInput.value.match(lastnamePattern)){
    return lastnameField.classList.add("invalid");
  }
  lastnameField.classList.remove("invalid");
}

// Email Validtion
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
}

// PhoneNumber validation
function phonenumberCheck(){
    const phonenumberPattern = /^(?:\+\d{1,3\s?)?\d{8,15}$/;
    if(!phonenumberInput.value.match(phonenumberPattern)){
        return phonenumberField.classList.add("invalid");
    }
    phonenumberField.classList.remove("invalid");
}

// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!*])(?!.*\s).{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid");
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUsername();
  lastnameCheck();
  checkEmail();
  phonenumberCheck();
  createPass();
  confirmPass();

  //calling function on key up
  usernameInput.addEventListener("keyup", checkUsername);
  lastnameInput.addEventListener("keyup", lastnameCheck);
  emailInput.addEventListener("keyup", checkEmail);
  phonenumberInput.addEventListener("keyup", phonenumberCheck);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (!usernameField.classList.contains("invalid") && !lastnameField.classList.contains("invalid") && !emailField.classList.contains("invalid") && !phonenumberField.classList.contains("invalid") &&!passField.classList.contains("invalid") && !cPassField.classList.contains("invalid")) {
    location.href = form.getAttribute("action");
  }
});


// document.getElementById("registrationForm").addEventListener("submit", function(event){
//   event.preventDefault();
//   const formData = new FormData(this);
//   const data = {};
//   formData.forEach((value, key) => {
//     data[key]=  value;
//   });

//   fetch("/register", {
//     method: "POST",
//     headers: {
//       "Content-Type":"application/json",
//     },
//     body: JSON.stringify(data),
//   })
//   .then(result =>{
//     document.getElementById("message").innerText = result.message;
//   })
//   .catch(error=>{
//     console.error(error);
//   });
// });
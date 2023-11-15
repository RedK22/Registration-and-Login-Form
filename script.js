//! To randomize the backgrounds

// document.addEventListener("DOMContentLoaded", function () {
//   var backgrounds = ["./img1.png", "./img2.png", "./img3.png", "./img.jpg"];
//   var randomIndex = Math.floor(Math.random() * backgrounds.length);
//   var selectedBackground = backgrounds[randomIndex];
//   document.body.style.backgroundImage = "url(" + selectedBackground + ")";
// });

//! Checking Credentials and Changing background if wrong

function checkCreds() {
  expectedEmail = "user@gmail.com";
  expectedPass = "user@123";

  var emailInput = document.getElementById("emailInput");
  var passInput = document.getElementById("passInput");

  console.log(`Entered email: ${emailInput.value}`);
  console.log(`Entered password: ${passInput.value}`);

  if (expectedEmail === emailInput.value && expectedPass === passInput.value) {
    alert("Login successful!");
  } else {
    alert("Invalid credentials. Please try again.");

    //* Changing the background on unsuccessful attempt.
    var backgrounds = ["./img1.png", "./img2.png", "./img3.png", "./img.jpg"];
    var randomIndex = Math.floor(Math.random() * backgrounds.length);
    var selectedBackground = backgrounds[randomIndex];
    document.body.style.backgroundImage = "url(" + selectedBackground + ")";
  }
}

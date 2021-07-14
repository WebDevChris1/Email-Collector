const emailInput = document.getElementById("email-input");
const subBtn = document.getElementById("sub-btn");
const errorText = document.getElementById("error-text");
const confirmText = document.getElementById("confirm-text");
const userInput = document.getElementById("user-input");
let emailList = [];
let errorMsg = "";

// initiates when subscribe button is clicked
subBtn.addEventListener("click", function () {
  // prevent form from reloading
  event.preventDefault();
  // render error if no email is enetered
  if (emailInput.value === "") {
    errorMsg = "Please enter your Email";
    errorText.textContent = errorMsg;
  } else {
    // save email to variable
    emailList.push(emailInput.value);
    // render confirmation message
    emailInput.remove();
    subBtn.remove();
    errorText.textContent = "";
    confirmText.textContent = "Thank You!";
    // check if email is being stored
    console.log(emailList);
  }
});

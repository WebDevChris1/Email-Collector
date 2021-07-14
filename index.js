let emailInput = document.getElementById("email-input");
let subBtn = document.getElementById("sub-btn");
let errorText = document.getElementById("error-text");
let confirmText = document.getElementById("confirm-text");
let emailList = [];
let errorMsg = "";

subBtn.addEventListener("click", function () {
  event.preventDefault();
  if (emailInput.value === "") {
    errorMsg = "Please enter your Email";
    errorText.textContent = errorMsg;
  } else {
    emailInput.remove();
    subBtn.remove();
    errorText.textContent = "";
    emailList.push(emailInput.value);
    console.log(emailList);
    confirmText.textContent = "Thank You!";
  }
});

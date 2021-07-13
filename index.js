let emailInput = document.getElementById("email-input");
let subBtn = document.getElementById("sub-btn");
let emailList = [];

subBtn.addEventListener("click", function () {
  emailList.push(emailInput.value);
  console.log(emailList);
});

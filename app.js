const checkemail = "gertrudeaag@gmail.com";
const emailInput = document.getElementById("email");

const correctPassword = "get89";

const checkname = "Getrude";
const nameInput = document.getElementById("name");

const form = document.getElementById("account-form");
const passwordInput = document.getElementById("passcode");

form.addEventListener("submit", function (f) {
    f.preventDefault();
    if (emailInput.value ===  checkemail && nameInput.value === checkname && passwordInput.value === correctPassword) {
        alert("successful");
       }   
       else {
        alert("incorrect input");
    }

});

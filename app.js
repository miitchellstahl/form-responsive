const form = document.querySelector('.signup');
const first = document.querySelector("#first-name");
const last = document.querySelector("#last-name");
const email = document.querySelector("#email-name");
const pass = document.querySelector("#password-name");
let firstPrompt = document.querySelector('#firstMessage');
let lastPrompt = document.querySelector('#lastMessage');
let emailPrompt = document.querySelector('#emailMessage');
let passPrompt = document.querySelector('#passMessage');
let resize = document.querySelector(".right-bottom");


form.addEventListener('submit', function (e) {

    e.preventDefault();


    if (first.value.length == 0) {
        first.style.border = "2px solid hsl(0, 100%, 74%)";
        firstPrompt.style.display = "block";

    }
    else {
        first.style.border = "1px solid hsl(246, 25%, 77%)";
        firstPrompt.style.display = "none";
    }
    if (last.value.length == 0) {
        last.style.border = "2px solid hsl(0, 100%, 74%)";
        lastPrompt.style.display = "block";
    }
    else {
        last.style.border = "1px solid hsl(246, 25%, 77%)";
        lastPrompt.style.display = "none";
    }
    if (email.value.length == 0) {
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        emailPrompt.style.display = "block";
    }
    else {
        email.style.border = "1px solid hsl(246, 25%, 77%)";
        emailPrompt.style.display = "none";
    }
    if (pass.value.length == 0) {
        pass.style.border = "2px solid hsl(0, 100%, 74%)";
        passPrompt.style.display = "block";
    }
    else {
        pass.style.border = "1px solid hsl(246, 25%, 77%)";
        passPrompt.style.display = "none";
    }


})
const showPassword = document.querySelector("#show-password");

const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function(){
    this.classList.tonight("fa-eye-slash");

    const type = passwordField.getAttribute("typpe") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type)
})
const form =  document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const pass2 = document.getElementById("pass2");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const pass2Value = pass2.value.trim();

    if(userNameValue === '') {
        setErrorMessage(userName, "Username cannot be blank");
    } else if(emailValue.match(/^[^ ]+\.[a-z]{2,3}$/)){
        setErrorMessage(userName, "Please Enter Valid Email Addres");
    } else {
        setSuccessMessage(userName);
    };

    if(emailValue === '') {
        setErrorMessage(email, "Email cannot be blank");
    } else {
        setSuccessMessage(email);
    };

    if(passValue === '') {
        setErrorMessage(pass, "Password cannot be blank");
    } else {
        setSuccessMessage(pass);
    };

    if(pass2Value === '') {
        setErrorMessage(pass2, "Username cannot be blank");
    } else if(passValue !== pass2Value) {
        setErrorMessage(pass2, "Password does not match")
    } else {
        setSuccessMessage(pass2);
    };
}

function setErrorMessage(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerHTML = message;

    formControl.className = "form-control error";
}

function setSuccessMessage(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}


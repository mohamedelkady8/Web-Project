//form validation
let form = document.querySelector("form");
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let messageBox = document.getElementById('messageBox');
let messageText = document.getElementById('messageText');


form.addEventListener(('submit'), (e)=> {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    let validEmail = /\b[A-Za-z0-9._-]+@(gmail|yahoo).com/;
    let validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d@$!%*?&])[a-zA-Z\d]{8,10}$/;

    if (!email.match(validEmail)) {
        showMsg('Invalid email format. Please enter a valid email address.');
    } else if (!(password.match(validPassword))) {
        showMsg('Password must contain at least 8 characters, including uppercase, lowercase, and a number or special character.');
    } else if (!email.match(validEmail) && !(password.match(validPassword))){
        showMsg('Invalid email and password Please try again.');
    } else {
        window.location.href = "home.html";
    }
});

function showMsg(msg) {
    messageText.textContent = msg;
    form.style.display = 'none';
    messageBox.style.display = 'block';
}

function closeMsg() {
    form.style.display = 'block';
    messageBox.style.display = 'none';
}
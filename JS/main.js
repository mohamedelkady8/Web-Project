//animation & nav
let nav = document.querySelector('nav');
let BoxesAnimations = document.querySelectorAll('.ani');
window.onscroll = function() {
    nav.style.position = 'fixed';
    BoxesAnimations.forEach ((animation) => {
        let OffsetTop = animation.offsetTop;
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        if (windowScrollTop > (OffsetTop - windowHeight)) {
            animation.classList.add('animation');
        }
    })
}



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
    let validEmail = /\b[A-Za-z0-9._-]+@(gmail|yahoo).com/ig;
    let validPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d@$!%*?&]){6,}/ig;

    if (email.match(validEmail) && (password.match(validPassword))){
        window.location.href = "products.html";
    }else {
        form.style.display = 'none';
        messageBox.style.display = 'block';
    }
});


//close msg box
function closeMsg() {
    form.style.display = 'block';
    messageBox.style.display = 'none';
}
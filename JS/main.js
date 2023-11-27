//animation
let BoxesAnimations = document.querySelectorAll('.ani');

window.onscroll = function() {
    BoxesAnimations.forEach ((animation) => {
        let OffsetTop = animation.offsetTop;
        let OuterHeight = animation.offsetHeight;
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        if (windowScrollTop > (OffsetTop - windowHeight)) {
            animation.classList.add('animation');
        }
    })
}


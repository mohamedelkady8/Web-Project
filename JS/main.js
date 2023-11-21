let animations = document.querySelectorAll('.ani');

//animation
window.onscroll = function() {
    animations.forEach ((animation) => {
        let OffsetTop = animation.offsetTop;
        let OuterHeight = animation.offsetHeight;
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        if (windowScrollTop > (OffsetTop - windowHeight)) {
            animation.classList.add('animation');
        }
    })
}
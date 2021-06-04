const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links');
    // }

    links.classList.toggle('show-links')
})

window.addEventListener('scroll', () => {
    const navHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-links');
    } else {
        topLink.classList.remove('show-links');
    }
})
// const navToggle = document.querySelector('.nav-toggle');
// const links = document.querySelector('.links');

// navToggle.addEventListener('click', function() {
//     // if (links.classList.contains('show-links')) {
//     //     links.classList.remove('show-links')
//     // } else {
//     //     links.classList.add('show-links');
//     // }

//     links.classList.toggle('show-links')
// })

//*************close Links*****************
const toggleBtn = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', function() {
    const containerheight = linkContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;

    if (containerheight === 0) {
        linkContainer.style.height = `${linkHeight}px`;
    } else {
        linkContainer.style.height = 0;
    }

})

// *********** Fixed Nav bar *************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')


window.addEventListener('scroll', () => {
    const navHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})
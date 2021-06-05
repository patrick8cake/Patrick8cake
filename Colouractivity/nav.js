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
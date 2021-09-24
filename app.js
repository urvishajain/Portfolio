const navtoggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
navtoggle.addEventListener('click', function() {

    links.classList.toggle("show-links");
});
// Toggle class active (kalo ada jadi ada & sebaliknya)
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Humberger Menu Di Klik
document.querySelector('#humberger-menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click, function(e)') {
    if(!humberger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.contains 
};


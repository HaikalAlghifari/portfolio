// hamburger dan nav-menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// // klik diluar hamburger
// window.addEventListener('click', function (e) {
//   if (e.target != hamburger && e.target != navMenu) {
//     hamburger.classList.remove('hamburger-active');
//     navMenu.classList.add('hidden');
//   }
// });

// header
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#toTop');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// const nav = document.querySelector('nav a');
// const section = document.querySelector('section');

// let currentSection = 'hero';
// window.addEventListener('scroll', () => {
//   section.forEach((section) => {
//     if (window.scrollY >= section.offsetTop) {
//       currentSection = section.id;
//     }
//   });

//   nav.forEach((nav) => {
//     if (nav.href.includes(currentSection)) {
//       document.querySelector('.active').classList.remove('.active');
//       nav.classList.add('active');
//     }
//   });
// });

let i = 0;
let tulis = 'Full Stack Developer & Front End Developer';
function mengetik() {
  if (i < tulis.length) {
    document.getElementById('tulisan').innerHTML += tulis.charAt(i);
    i++;
    setTimeout(mengetik, 100);
  }
}
mengetik();

// dark mode

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
});

// bersihkan form
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};

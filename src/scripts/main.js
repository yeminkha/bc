const header = document.querySelector("header");

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 200);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
const menu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menuLinks');
let isOpen = true;
menu.addEventListener('click', () => {
    
   if (isOpen) {
    menuLinks.classList.remove('active') ;
    isOpen=false;
  } else {
    menuLinks.classList.add('active');
    isOpen=true;
  }
});
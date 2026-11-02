const header = document.querySelector("header");

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 200);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
// Función para abrir el menú mobile con el ícono hamburguesa
const mobileMenuIcon = document.querySelector(".bi-list");
mobileMenuIcon.addEventListener("click", openMobileMenu);

const mobileMenu = document.getElementById("menu-desplegable");

function openMobileMenu() {
    mobileMenu.style.left = "0rem";
    mobileMenu.style.position = "fixed";
}


// Función para cerrar el menú mobile con la X y con cualquier opción del menú
const close_menu_x = document.getElementById("close_menu_x");
close_menu_x.addEventListener("click", closeMobileMenu);

const mobile_home = document.getElementById("mobile-home");
mobile_home.addEventListener("click", closeMobileMenu);

const mobile_collections = document.getElementById("mobile-collections");
mobile_collections.addEventListener("click", closeMobileMenu);

const mobile_about = document.getElementById("mobile-about");
mobile_about.addEventListener("click", closeMobileMenu);

const mobile_contact = document.getElementById("mobile-contact");
mobile_contact.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
    mobileMenu.style.left = "-28rem";
    mobileMenu.style.position = "absolute";
}


// Evento para que al hacer scroll hacia arriba, aparezca el header; y al hacer scroll hacia abajo, desaparezca el header. Nota: El header debe tener transition: transform 0.8s, position: sticky, top: 0 y z-index: 1. También hay que tener reglas css para las clases scroll-up y scroll-down.
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  console.log(currentScroll);
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }
  
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down 
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up 
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

// const header = document.querySelector(".header");
// const headerClass = "header";
// let windowSize;
// window.addEventListener("change", adjustHeader);

// function adjustHeader() {
//     windowSize = window.innerWidth;
//     if(windowSize >= 1024) {
//         header.classList.remove(headerClass);
//         header.style.position = "static";
//     } else {
//         header.classList.add(headerClass);
//         header.style.position = "sticky";
//     }
// }


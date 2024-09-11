/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scroll
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);


// document.addEventListener('DOMContentLoaded', () => {
//   const teamImg = document.getElementById('teamImg');
//   const overlay = document.getElementById('overlay');

//   teamImg.addEventListener('click', () => {
//     // Alterna la clase 'clicked' en la superposición
//     overlay.classList.toggle('clicked');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const teamImg = document.getElementById('teamImg');
  const overlay = document.getElementById('overlay');

  teamImg.addEventListener('click', () => {
    // Alterna la clase 'clicked' en la superposición
    overlay.classList.toggle('clicked');
  });
});

// function loader() {
//   const loader = document.getElementById("preloader");
//   window.addEventListener("load", function()
//     {
//       setTimeout(function()
//         {
//           loader.style.display = "none";
//         },1500);      
//     })
// };




// Tiempo de visualización en milisegundos
const DISPLAY_DURATION = 300000; // 300000 ms = 5 minutos

// Función para mostrar el preloader
function showPreloader() {
    document.querySelector(".preloader").style.display = "flex";
    document.querySelector(".preloader").style.opacity = "1"; // Asegúrate de que sea visible
    document.querySelector(".main-content").style.display = "none";
}

// Función para ocultar el preloader
function hidePreloader() {
    document.querySelector(".preloader").style.opacity = "0"; // Añadir una transición de opacidad
    document.querySelector(".preloader").style.transition = "opacity 0.5s ease";
    document.querySelector(".main-content").style.display = "block";
    
    // Ocultar el preloader completamente después de la transición
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 500); // Asegúrate de que coincide con el tiempo de la transición
}

// Función para manejar el preloader
function handlePreloader() {
    const now = Date.now();
    const preloaderEndTime = localStorage.getItem('preloaderEndTime');

    if (!preloaderEndTime || now > preloaderEndTime) {
        // Si no hay tiempo registrado o el tiempo registrado ha pasado, mostrar el preloader
        localStorage.setItem('preloaderEndTime', now + DISPLAY_DURATION);
        showPreloader();
    } else {
        // Si el tiempo registrado no ha pasado, ocultar el preloader
        hidePreloader();
    }
}

// Al cargar el contenido del DOM
document.addEventListener("DOMContentLoaded", function() {
    handlePreloader(); // Maneja la visualización del preloader

    // Cuando toda la página (incluidos los recursos como imágenes) esté completamente cargada
    window.addEventListener("load", function() {
        // Al cargar la página, verifica si el preloader aún debe ser mostrado
        handlePreloader();
    });
});
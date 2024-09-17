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




document.addEventListener("DOMContentLoaded", function() { 
  // Seleccionar los elementos por clase
  var preloader = document.querySelector(".preloader");
  var maincontent = document.querySelector(".main-content");
  var scrollUpButton = document.querySelector("#scroll-up");

  if (preloader && maincontent) {
      // Mostrar el preloader
      preloader.style.display = "flex";
      preloader.style.opacity = "1"; // Asegurar que el preloader es visible
      maincontent.style.display = "none"; // Ocultar el contenido principal

      // Ocultar el botón de scroll-up mientras se muestra el preloader
      if (scrollUpButton) {
          scrollUpButton.style.display = "none";
      }

      // Simular un retraso en la carga para visualizar el preloader
      setTimeout(function() {
          // Añadir una transición de desvanecimiento al preloader
          preloader.style.opacity = "0";
          preloader.style.transition = "opacity 0.5s ease"; // Suavizar la transición

          // Después de la transición, ocultar completamente el preloader y mostrar el contenido
          setTimeout(function() {
              preloader.style.display = "none"; // Ocultar el preloader después de desvanecer
              maincontent.style.display = "block"; // Mostrar el contenido principal
              
              // Mostrar el botón de scroll-up después de que se haya mostrado el contenido
              if (scrollUpButton) {
                  scrollUpButton.style.display = "block";
              }
          }, 500); // Tiempo que coincide con la transición de opacidad (0.5 segundos)
      }, 2500); // El preloader se oculta después de 1.5 segundos (simulando carga)
  } else {
      console.error("No se encontró el preloader o el contenido principal en el DOM");
  }
});

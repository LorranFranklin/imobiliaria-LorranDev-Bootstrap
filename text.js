window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  direction: "horizontal",
  lazyLoading: true,
  spaceBetween: 7,
  grabCursor: false,
  centeredSlides: true,
  loop: true,
  keyboard: {
    enabled: true,
  },

  // responsive break
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },

  // navigation Arrows
  navigation: {
    nextEl: ".swiper-custom-nav-next",
    prevEl: ".swiper-custom-nav-prev",
  },
});

// FAQ Section
function toggleAccordion(accordionId) {
  const accordionItem = document.getElementById(accordionId);
  const answer = accordionItem.querySelector(".answer");
  const arrow = accordionItem.querySelector(".fa-arrow-up");

  if (accordionItem.classList.contains("active")) {
    accordionItem.classList.remove("active");
    answer.style.maxHeight = 0;
    arrow.style.transform = "rotate(0deg)";
  } else {
    accordionItem.classList.add("active");
    answer.style.maxHeight = answer.scrollHeight + "px";
    arrow.style.transform = "rotate(180deg)";
  }
}

// index Page Parallax
document.addEventListener("DOMContentLoaded", function () {
  const heroPageImg = document.getElementsByClassName("hero-page-img");
  const sobreImg = document.getElementsByClassName("about-img");
  const propriedadesImg = document.getElementsByClassName("property-img");

  new simpleParallax(heroPageImg, {
    delay: 0.6,
    scale: 1.1,
    orientation: "right",
    transition: "cubic-bezier(0,0,0,1)",
  });
  new simpleParallax(sobreImg, {
    delay: 0.6,
    scale: 1.1,
    orientation: "right",
    transition: "cubic-bezier(0,0,0,1)",
  });
  new simpleParallax(propriedadesImg, {
    delay: 0.6,
    scale: 1.1,
    orientation: "left",
    transition: "cubic-bezier(0,0,0,1)",
  });
});

// Scroll Reveal 
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 100,
  easing: "ease-in-out",
});

sr.reveal("#hero-slogan");
sr.reveal("#hero-tittle", { delay: 400 });
sr.reveal("#hero-description", { delay: 500 });
sr.reveal("#hero-btn-customer", { delay: 600 });
sr.reveal(".hero-page-imgs", { delay: 700 });
sr.reveal(".collab");
sr.reveal(".about-imgs");
sr.reveal(".about-headlines", { delay: 400 });
sr.reveal(".about-projects", { delay: 500 });
sr.reveal(".services");
sr.reveal("#properties-title");
sr.reveal("#properties-description", { delay: 400 });
sr.reveal(".swiper", { delay: 500 });
sr.reveal(".faq-header");
sr.reveal(".property-page");
sr.reveal(".service-page-title");
sr.reveal(".service-page-container", { delay: 600 });
sr.reveal(".contact-headline");
sr.reveal(".contact-content", { delay: 600 });

// FAQ Questions Reveal 
const delayIncrement = 100;
totalQuestions = 5;

for (let i = 1; i < totalQuestions; i++) {
  const selector = `#question${i}`;
  const delay = 400 + i * delayIncrement;

//  basicamente revelá-lo a cada 100 segundos para não ser repetido
  sr.reveal(selector, { delay });
}
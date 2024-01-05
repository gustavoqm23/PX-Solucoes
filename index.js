'use strict';


/* Ativando biblioteca de animações */
AOS.init();

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for(let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}
    
/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function() {
    if(window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

});

/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }


/* ------- ACCORDION ------- */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {
  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if(lastActiveAccordion && lastActiveAccordion != currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);
}

for(let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }

//Linkando o home até a sessão de início

var linkHome = document.getElementById('linkHome');
linkHome.addEventListener("click", function(event) {
    event.preventDefault();

    var secaoHome = document.getElementById('home-link');
    secaoHome.scrollIntoView( { behavior: 'smooth'})
})


//Linkando o link serviços até a sessão de serviços

var linkServicos = document.getElementById('linkServicos');
linkServicos.addEventListener("click", function(event) {
    event.preventDefault();

    var secaoServicos = document.getElementById('servicos-link');
    secaoServicos.scrollIntoView({ behavior: 'smooth'});

})


//Linkando o link "sobre nós" até a sessão de Sobre Nós
var linkHome = document.getElementById('linkAbout');
linkHome.addEventListener("click", function(event) {
    event.preventDefault();

    var secaoHome = document.getElementById('about-link');
    secaoHome.scrollIntoView( { behavior: 'smooth'})
})


//Linkando o link "resultados" até a sessão de Resultados
var linkHome = document.getElementById('linkResultados');
linkHome.addEventListener("click", function(event) {
    event.preventDefault();

    var secaoHome = document.getElementById('resultados-link');
    secaoHome.scrollIntoView( { behavior: 'smooth'})
})


//Linkando o link "localizacao" até a sessão de Localização
var linkHome = document.getElementById('linkLocalizacao');
linkHome.addEventListener("click", function(event) {
    event.preventDefault();

    var secaoHome = document.getElementById('localizacao-link');
    secaoHome.scrollIntoView( { behavior: 'smooth'})
})
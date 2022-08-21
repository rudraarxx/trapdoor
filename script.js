$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

const swiper = new Swiper('.hero-Swiper', {
    speed: 500,
    effect:'fade',
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
AOS.init();
const swiper2 = new Swiper('.fifth-pg-swiper', {
    speed: 500,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
const hamburger2 = document.querySelector(".hamburger2");
const navLinks2 = document.querySelector(".nav-links2");
const links2 = document.querySelectorAll(".nav-links2 li");

hamburger2.addEventListener('click', ()=>{
   //Animate Links
    navLinks2.classList.toggle("open");
    links2.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger2.classList.toggle("toggle");
});

window.onload = function () {
  var txtPassword = document.getElementById("passwordId");
  var txtConfirmPassword = document.getElementById("confirmPasswordId");
  txtPassword.onchange = ConfirmPassword;
  txtConfirmPassword.onkeyup = ConfirmPassword;
  function ConfirmPassword() {
      txtConfirmPassword.setCustomValidity("");
      if (txtPassword.value != txtConfirmPassword.value) {
          txtConfirmPassword.setCustomValidity("Passwords do not match.");
      }
  }
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-6.3rem";
  }
}


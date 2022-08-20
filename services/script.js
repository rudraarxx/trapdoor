$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
  })

  // When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-6.3rem";
  }
}

var button = document.getElementsByClassName('but'),
tabContent = document.getElementsByClassName('tab-content');
button[0].classList.add('active');
tabContent[0].style.display = 'block';

// var button1 = document.getElementById('login-btn');
// button1.onclick = function() {
//   window.location='../log-in/login.html';
// }
// var button2 = document.getElementById('login-btn2');
// button2.onclick = function() {
//   window.location='../log-in/login.html';
// }

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// hamburger menu

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

function city(e, city) {
    var i;
    for (i = 0; i < button.length; i++) {
        tabContent[i].style.display = 'none';
        button[i].classList.remove('active');
    }
    document.getElementById(city).style.display = 'block';
    e.currentTarget.classList.add('active');
}

AOS.init();

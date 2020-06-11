var openNav = document.querySelector(".open");
var closeNav = document.querySelector(".close");
var mobileNav = document.querySelector(".mobile");
var goUp = document.querySelector(".icon-up");
var nav = document.querySelector(".navbar");


openNav.addEventListener("click", function(){
    mobileNav.style.right = "0";
});

closeNav.addEventListener("click", function(){
    mobileNav.style.right = "-100%";
});

window.addEventListener("scroll", function () {
  goUp.classList.toggle("up", window.scrollY > 3500);
});

window.addEventListener("scroll", function () {
  nav.classList.toggle("nav-scrolled", window.scrollY > 0);
});


$(document).ready(function () {
  $(".img-box").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    look: true,
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    animateOut: "fadeOutDown",
    animateIn: "easeIn",
  });

  $(".slides").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    look: true,
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    margin: 10,
    autoHeight: true,
    animateOut: "fadeOutDown",
    animateIn: "easeIn",
    nav: true,
    navText: [
      "<i class='fa fa-arrow-up'></i>",
      "<i class='fa fa-arrow-down'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      700: {
        items: 2,
      },
      850: {
        items: 3,
      },
    },
  });
});

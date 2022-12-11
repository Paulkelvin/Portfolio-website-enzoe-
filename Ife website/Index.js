"use strict";

// VARIABLE DECLARATION
const menu = document.querySelector(".fa-bars");
const header = document.querySelector(".user");
const links = document.querySelectorAll("a");
const navLinks = document.querySelectorAll("header .navbar ul li a");
const navLists = document.querySelectorAll("header .navbar ul li");

// MENU NAVIGATION TRIGGER
menu.addEventListener("click", (e) => {
  header.classList.toggle("add--toggle");
  menu.classList.toggle("fa-times");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    header.classList.remove("add--toggle");
    menu.classList.remove("fa-times");
  });
});

// ACTIVE NAVIGATION
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    const et = e.target;
    const active = document.querySelector(".active--nav");
    if (active) {
      active.classList.remove("active--nav");
    }
    et.classList.add("active--nav");
  });
});

// $(document).on("scroll", () => {
//   var pageTop = $(document.scrollTop());
//   var pageBottom = pageTop + $(window).height();
//   var fadeIn = $(".fade--in");

//   for (var i = 0; i < fadeIn.length; i++) {
//     var fade = fadeIn[i];

//     if ($(fade).position().top < pageBottom) {
//       $(fade.addClass("visible"));
//     } else {
//       $(fade).removeClass("visible");
//     }
//   }
// });

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var fadeIns = $(".fade--ins");

  for (var i = 0; i < fadeIns.length; i++) {
    var fadeIn = fadeIns[i];

    if ($(fadeIn).position().top < pageBottom) {
      $(fadeIn).addClass("visible");
    } else {
      $(fadeIn).removeClass("visible");
    }
  }
});

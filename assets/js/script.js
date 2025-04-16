jQuery(document).ready(function ($) {
  const oneFourthScreen = $(window).height() / 4;
  const halfScreen = $(window).height() / 2 + 100;
  const header = $(".default-header");

  /** SCROLLING EFFECT */
  $(window).scroll(function () {
    if ($(window).scrollTop() > oneFourthScreen) {
      header.addClass("fixed-header");
      if ($(window).scrollTop() > halfScreen) {
        header.removeClass("hide-header");
        header.addClass("show-header");
      } else {
        header.addClass("hide-header");
        header.removeClass("show-header");
      }
    } else {
      header.removeClass("fixed-header");
    }

    jQuery(".skill-progress").each(function () {
      if (!jQuery(this).hasClass("animate-bar")) {
        if (
          jQuery(window).scrollTop() + jQuery(window).height() >
          jQuery(this).offset().top
        ) {
          jQuery(this).addClass("animate-bar");
        } else {
          jQuery(this).removeClass("animate-bar");
        }
      }
    });
  });
  /** END SCROLLING EFFECT */
});
document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = [
    "I am a Web Developer based in the Philippines.",
    "I am excited to bring my expertise to your next project.",
    "Let us create something amazing together!",
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector(".typewriter-animation").innerHTML =
        text.substring(0, i + 1) + '<caret aria-hidden="true"></caret>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 700);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

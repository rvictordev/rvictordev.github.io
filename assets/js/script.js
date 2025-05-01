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

  /** Get Year */
  const year = new Date();
  $("#copyright-year").html(year.getFullYear());
});

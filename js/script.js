jQuery(document).ready(function ($) {
  const oneFourthScreen = $(window).height() / 4;
  const halfScreen = $(window).height() / 2 + 100;
  const header = $(".default-header");
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
  });
});

jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    $(".fadein-up").each(function () {
      const winHeight = $(window).scrollTop() + $(window).height();
      let boxOffset = 0;
      let fadeInClass = "";
      let isBoxFadeIn = false;
      if ($(this).hasClass("box-fadein")) {
        boxOffset = 400;
        fadeInClass = "animate-box-fadein-up";
        isBoxFadeIn = true;
      } else {
        boxOffset = 200;
        fadeInClass = "animate-fadein-up";
      }
      if (winHeight > $(this).offset().top + boxOffset) {
        $(this).addClass(fadeInClass);
        if (isBoxFadeIn) {
          $(this).find(".horizontal-line").addClass("animate-element");
          $(this).find(".wcl--up").addClass("animate-element");
          $(this).find(".wcl--bottom").addClass("animate-element");
        }
      }
    });
  });
});

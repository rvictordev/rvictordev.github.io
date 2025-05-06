jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    $(".fadein-up").each(function () {
      const winHeight = $(window).scrollTop() + $(window).height();
      if (winHeight > $(this).offset().top + 200) {
        $(this).addClass("animate-fadein-up");
      }
    });
  });
});

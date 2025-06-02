jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      if (
        $(window).scrollTop() >
        $("#footer").offset().top - $(window).height()
      ) {
        $(".floating-links a").each(function (i) {
          const link = $(this);
          setTimeout(function () {
            link.addClass("hide-links");
          }, 100 * i);
        });
      } else {
        $(".floating-links a").each(function (i) {
          const link = $(this);
          setTimeout(function () {
            link.removeClass("hide-links");
          }, 100 * i);
        });
      }
    } else {
      $(".floating-links a").each(function (i) {
        const link = $(this);
        setTimeout(function () {
          link.addClass("hide-links");
        }, 100 * i);
      });
    }
  });
});

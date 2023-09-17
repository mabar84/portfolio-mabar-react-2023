$(document).ready(function () {
  $(".bc-accordeon .bc-accordeon-block")
    .hide()
    .prev()
    .click(function () {
      if ($(this).parents(".bc-accordeon").hasClass("bc-accordeon-active")) {
        $(".bc-accordeon").removeClass("bc-accordeon-active");
      } else {
        $(".bc-accordeon").removeClass("bc-accordeon-active");
        $(this).parents(".bc-accordeon").addClass("bc-accordeon-active");
      }

      $(this).parents().find(".bc-accordeon-block").not(this).slideUp().prev();
      $(this).next().not(":visible").slideDown().prev().parents();

      $(".bc-accordeon .bc-icon-accordeon").text("+");
      $(".bc-accordeon.bc-accordeon-active .bc-icon-accordeon").text("-");
    });

  const topsellerSlider = new Swiper(".swiper-container", {
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  const beauty = $(".bc-beauty__img");
  beauty.on("click", function () {
    $(".bc-beauty__img").css("display", "none");
    $(".bc-beauty__video").css("display", "block");
    // console.log("+++");
  });
});

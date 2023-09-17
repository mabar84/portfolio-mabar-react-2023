var swiper = new Swiper(".header-slider", {
  slidesPerView: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
  },
});

var swiper = new Swiper(".main-slider", {
  slidesPerView: 1,
  speed: 800,
  loop: true,
  loopFillGroupWithBlank: true,
  paginationClickable: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".main .swiper-button-next",
    prevEl: ".main .swiper-button-prev",
  },
  pagination: {
    el: ".main .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".products-slider", {
  slidesPerView: 4,
  paginationClickable: true,
  pagination: {
    el: ".products .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    10: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

/*var swiper = new Swiper('.products-swiper', {
  slidesPerView: 2,
  paginationClickable: true,
  pagination: {
    el: '.products-content .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
  	10: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  }
});*/

var swiper = new Swiper(".categories-wrapper", {
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".news-slider", {
  slidesPerView: 1,
  paginationClickable: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var galleryThumbs = new Swiper(".productCard-slider2", {
  spaceBetween: 10,
  slidesPerView: 5,
  loopedSlides: 6, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  noSwiping: true,
});

var galleryTop = new Swiper(".productCard-slider1", {
  spaceBetween: 10,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  loopedSlides: 6, //looped slides should be the same
  paginationClickable: true,
  pagination: {
    el: ".productCard-images .swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: galleryThumbs,
  },
  breakpoints: {
    768: {
      paginationClickable: false,
    },
  },
});

$(document).ready(function () {
  $(".products-swiper").each(function () {
    let $this = $(this),
      id = $this.attr("id"),
      cnt = $this.attr("data-visible");

    new Swiper("#" + id, {
      slidesPerView: cnt,
      paginationClickable: true,
      pagination: {
        el: "#" + id + " .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        10: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: cnt < 2 ? cnt : 2,
        },
        1200: {
          slidesPerView: cnt,
        },
      },
    });
  });

  $(".category-swiper").each(function () {
    let $this = $(this),
      id = $this.attr("id"),
      cnt = $this.attr("data-visible");

    new Swiper("#" + id, {
      slidesPerView: cnt,
      paginationClickable: true,
      pagination: {
        el: "#" + id + " .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        10: {
          slidesPerView: 1,
        },
        460: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: cnt,
        },
      },
    });
  });

  //menu mob
  // $(".header-bar, .mobileMenu-top .close-ico").on("click", function () {
  //   $(".mobileMenu").toggleClass("open");
  // });
  //menu mob drop
  // $(".mobileMenu-item .icon-accordeon").on("click", function () {
  //   $(this)
  //     .parents(".mobileMenu-item")
  //     .toggleClass("active")
  //     .find(".mobileMenu-item__drop")
  //     .slideToggle();
  // });

  //filter
  //drop
  // $(".filter-drop__top").on("click", function (e) {
  //   e.preventDefault();

  //   if ($(window).width() <= 768) {
  //     $(this)
  //       .parents(".filter-drop")
  //       .toggleClass("active")
  //       .find(".filter-drop__info")
  //       .slideToggle();
  //   } else {
  //     if ($(this).parents(".filter-drop").hasClass("active")) {
  //       $(".filter-drop").removeClass("active");
  //     } else {
  //       $(".filter-drop").removeClass("active");
  //       $(this).parents(".filter-drop").addClass("active");
  //     }
  //   }
  // });
  // $(document).on("click", function (e) {
  //   var block = $(".filter-drop");
  //   if (!block.is(e.target) && block.has(e.target).length === 0)
  //     $(".filter-drop").removeClass("active");
  // });

  //filter-mob
  // $(".filter-mob, .filter-top .hb-ico, .filter-bottom .second-btn").on(
  //   "click",
  //   function (e) {
  //     e.preventDefault();

  //     $(".filter-all").toggleClass("active");
  //   }
  // );

  //search
  // $(".search-close").on("click", function (e) {
  //   e.preventDefault();

  //   $(".search-block").toggleClass("active");
  //   setTimeout(function () {
  //     $(".search-block").toggleClass("search-open");
  //   }, 200);
  // });

  //faq
  // $(".faq-item").on("click", function () {
  //   var attr = $(this).attr("data-faq");

  //   $(".faq-row").slideUp();
  //   $("#" + attr).slideDown();
  // });

  //drop
  // $(".footer-menu__title").on("click", function (e) {
  //   e.preventDefault();

  //   if ($(window).width() <= 768) {
  //     $(this)
  //       .parents(".footer-col")
  //       .toggleClass("active")
  //       .find("ul")
  //       .slideToggle();
  //   }
  // });

  //accordeons
  $(".bc-accordeon .bc-accordeon-block")
    .hide()
    .prev()
    .click(function () {
      if ($(this).parents(".bc-accordeon").hasClass("bc-accordeon-active")) {
        $(".bc-accordeon").removeClass("bc-accordeon-active");
        //$(".bc-icon-accordeon").text("+");
        // console.log("1");
      } else {
        $(".bc-accordeon").removeClass("bc-accordeon-active");
        $(this).parents(".bc-accordeon").addClass("bc-accordeon-active");
        //$(".bc-icon-accordeon").text("-");
        // console.log("2");
      }

      $(this).parents().find(".bc-accordeon-block").not(this).slideUp().prev();
      $(this).next().not(":visible").slideDown().prev().parents();

      $(".bc-accordeon .bc-icon-accordeon").text("+");
      $(".bc-accordeon.bc-accordeon-active .bc-icon-accordeon").text("-");
    });

  //basket
  // $(".basket-btn").on("click", function (e) {
  //   e.preventDefault();

  //   $(".basket, .basket-bg").addClass("open");

  //   setTimeout(function () {
  //     $(".basket, .basket-bg").removeClass("open");
  //   }, 8000);
  // });

  // $(".basket .close-ico").on("click", function () {
  //   $(".basket, .basket-bg").removeClass("open");
  // });
});

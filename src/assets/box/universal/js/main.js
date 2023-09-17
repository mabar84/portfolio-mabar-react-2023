$(document).ready(function () {
  var tabsItem = $(".main-right__item");
  var contentItem = $(".main-left__item");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("main-right__item--active");
    contentItem.removeClass("main-left__item--active");
    $(activeContent).toggleClass("main-left__item--active");
    $(this).toggleClass("main-right__item--active");
  });

  var label = $(".label");
  label.on("click", function (event) {
    $(this).toggleClass("active");
  });

  var topLabel = $(".top-label");
  topLabel.on("click", function (event) {
    $(this).toggleClass("top-label--active");
  });

  const publicationSlider = new Swiper(".publication-slider", {
    loop: true,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: ".publication-slider__button--next",
      prevEl: ".publication-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const swiper = new Swiper(".hot-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  $(".parallax-window").parallax({});

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    // console.log("Клик по кнопке меню");
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  addEventListener("keydown", (e) => {
    if (e.which == "27") {
      closeModal(e);
    }
  });

  var modal__overlay = $(".modal__overlay");
  modal__overlay.on("click", function (e) {
    closeModal(e);
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    document.body.style.overflow = "hidden";
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    document.body.style.overflow = "auto";
  }

  var commentsButton = $("[data-toggle=comments-loading]");
  commentsButton.on("click", loadingComments);

  function loadingComments() {
    var loadMore = $(".comments-card");
    loadMore.removeClass("comments-card--hidden");
  }

  // Обработка форм

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",

      messages: {
        name: {
          required: "Пожалуйста, введите ФИО",
          minlength: "Недостаточно символов!",
        },
        phone: {
          required: "Пожалуйста, введите номер телефона",
          minlength: "Недостаточно цифр!",
        },
        email: {
          required: "Пожалуйста, введите электронную почту",
          email: "Формат: name@domain.com",
        },
        comment: {
          required: "Не менее 100 символов",
          minlength: "Не менее 100 символов",
        },
      },
    });
  });
  $(".phone").mask("+7(000) 000-00-00");

  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1000);
  });

  $('a[href^="#"]').on("click", function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;

    $("html, body").animate({ scrollTop: dn }, 800);
  });

  var feedback = $(".feedback");
  feedback.on("click", function (event) {
    event.preventDefault();
  });

  // AOS.init();

  $(".navbar-menu__link").on("click", function () {
    // console.log("Клик по кнопке меню");
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });
});

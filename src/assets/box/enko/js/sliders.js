const nikolskySlider = new Swiper(".nikolsky-swiper", {
  navigation: {
    prevEl: ".nikolsky-swiper-button--prev",
    nextEl: ".nikolsky-swiper-button--next",
  },
  speed: 2000,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

const specialSlider = new Swiper(".special-swiper", {
  navigation: {
    nextEl: ".special-swiper-button--next",
    prevEl: ".special-swiper-button--prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  speed: 2000,
  initialSlide: 3,
  slidesPerView: "auto",
});

const selectionSlider = new Swiper(".selection-swiper", {
  spaceBetween: 25,
  slidesPerGroup: 1,
  speed: 2000,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      spaceBetween: 25,
      slidesPerView: 3,
      centeredSlides: true,
    },
    550: {
      spaceBetween: 27,
      slidesPerView: 2,
      centeredSlides: true,
    },
    400: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
});

const solutionsSlider = new Swiper(".solutions-swiper", {
  navigation: {
    nextEl: ".solutions-swiper-button--next",
    prevEl: ".solutions-swiper-button--prev",
  },
  speed: 2000,
  loop: true,
});

const servicesSlider = new Swiper(".services-swiper", {
  navigation: {
    nextEl: ".services-swiper-button--next",
    prevEl: ".services-swiper-button--prev",
  },
  spaceBetween: 25,
  slidesPerView: 4,
  slidesPerGroup: 1,
  speed: 2000,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      spaceBetween: 25,
      slidesPerView: 3,
      centeredSlides: true,
    },
    550: {
      spaceBetween: 27,
      slidesPerView: 2,
      centeredSlides: true,
    },
    375: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
});

const infrastructureSlider = new Swiper(".infrastructure-swiper", {
  slidesPerView: 9,
  slidesPerGroup: 1,
  initialSlide: 0,
  speed: 2000,
  loop: true,
});

const progress2021Slider = new Swiper(".progress2021-swiper", {
  navigation: {
    nextEl: ".progress2021-swiper-button--next",
    prevEl: ".progress2021-swiper-button--prev",
  },
  slidesPerView: 7.1,
  simulateTouch: false,
  slidesPerGroup: 1,
  initialSlide: 0,
  speed: 2000,
  loop: true,
  breakpoints: {
    1920: {
      slidesPerView: 11,
    },
    1200: {
      slidesPerView: 8,
    },
    992: {
      slidesPerView: 7,
    },
    768: {
      slidesPerView: 6,
    },
    640: {
      slidesPerView: 5,
    },
    480: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 3,
    },
  },
});

const progress2020Slider = new Swiper(".progress2020-swiper", {
  navigation: {
    nextEl: ".progress2020-swiper-button--next",
    prevEl: ".progress2020-swiper-button--prev",
  },
  slidesPerView: 7.1,
  simulateTouch: false,
  slidesPerGroup: 1,
  initialSlide: 0,
  speed: 2000,
  loop: true,
  breakpoints: {
    1920: {
      slidesPerView: 11,
    },
    1200: {
      slidesPerView: 8,
    },
    992: {
      slidesPerView: 7,
    },
    768: {
      slidesPerView: 6,
    },
    640: {
      slidesPerView: 5,
    },
    480: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 3,
    },
  },
});

const progress2019Slider = new Swiper(".progress2019-swiper", {
  navigation: {
    nextEl: ".progress2019-swiper-button--next",
    prevEl: ".progress2019-swiper-button--prev",
  },
  slidesPerView: 7.1,
  simulateTouch: false,
  slidesPerGroup: 1,
  initialSlide: 0,
  speed: 2000,
  loop: true,
  breakpoints: {
    1920: {
      slidesPerView: 11,
    },
    1200: {
      slidesPerView: 8,
    },
    992: {
      slidesPerView: 7,
    },
    768: {
      slidesPerView: 6,
    },
    640: {
      slidesPerView: 5,
    },
    480: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 3,
    },
  },
});

const progress = document.querySelector(".progress");
const years = progress.querySelectorAll(".years p");
const progressWrappers = progress.querySelectorAll(".progress-wrapper");

const months21 = document.getElementsByClassName("month21");
const months20 = document.getElementsByClassName("month20");
const months19 = document.getElementsByClassName("month19");

const sliders21 = progress.querySelectorAll(".mon21-swiper");
const sliders20 = progress.querySelectorAll(".mon20-swiper");
const sliders19 = progress.querySelectorAll(".mon19-swiper");

progress.addEventListener("click", (e) => {
  if (e.target.closest(".years")) {
    years.forEach((p) => {
      p.classList.remove("active");
      e.target.classList.add("active");
    });

    progressWrappers.forEach((wrapper) => {
      wrapper.classList.remove("active");
    });

    if (e.target.id == "y21") progressWrappers[0].classList.add("active");
    if (e.target.id == "y20") progressWrappers[1].classList.add("active");
    if (e.target.id == "y19") progressWrappers[2].classList.add("active");
  }

  months21.forEach((month) => {
    if (month.parentNode.className.includes("swiper-slide-active")) {
      let code = month.id;

      sliders21.forEach((item) => {
        item.classList.add("hidden");

        if (item.classList.contains(code)) {
          item.classList.remove("hidden");
        }
      });
    }
  });

  months20.forEach((month) => {
    if (month.parentNode.className.includes("swiper-slide-active")) {
      let code = month.id;

      sliders20.forEach((item) => {
        item.classList.add("hidden");

        if (item.classList.contains(code)) {
          item.classList.remove("hidden");
        }
      });
    }
  });

  months19.forEach((month) => {
    if (month.parentNode.className.includes("swiper-slide-active")) {
      let code = month.id;

      sliders19.forEach((item) => {
        item.classList.add("hidden");

        if (item.classList.contains(code)) {
          item.classList.remove("hidden");
        }
      });
    }
  });
});

const mon21Slider = new Swiper(".mon21-swiper", {
  navigation: {
    nextEl: ".mon21-swiper-button--next",
    prevEl: ".mon21-swiper-button--prev",
  },
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  initialSlide: 0,
  speed: 2000,
  loop: true,
  breakpoints: {
    1500: {
      slidesPerView: 2.9,
    },
    1024: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1.1,
    },
  },
});

const mon20Slider = new Swiper(".mon20-swiper", {
  navigation: {
    nextEl: ".mon20-swiper-button--next",
    prevEl: ".mon20-swiper-button--prev",
  },
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  initialSlide: 0,
  speed: 2000,
  loop: true,
  breakpoints: {
    1500: {
      slidesPerView: 2.9,
    },
    1024: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1.1,
    },
  },
});

const mon19Slider = new Swiper(".mon19-swiper", {
  navigation: {
    nextEl: ".mon19-swiper-button--next",
    prevEl: ".mon19-swiper-button--prev",
  },
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  initialSlide: 0,
  speed: 2000,
  loop: true,
  breakpoints: {
    1500: {
      slidesPerView: 2.9,
    },
    1024: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1.1,
    },
  },
});

const galleryTabs = document.querySelector(".gallery-tabs");
const galleryTabsItems = document.querySelectorAll(".gallery-tabs p");
const galleryContent = document.querySelectorAll(".gallery-content");

const g1 = document.getElementById("g1");
const g2 = document.getElementById("g2");
const g3 = document.getElementById("g3");
const g4 = document.getElementById("g4");
const g5 = document.getElementById("g5");

galleryTabs.addEventListener("click", (e) => {
  if (e.target.closest(".gallery-tabs")) {
    let codeTab = e.target.id;
    if (window.screen.width < 768) {
      if (codeTab == "g1") {
        g1.style.order = "1";
        g2.style.order = "2";
        g3.style.order = "3";
        g4.style.order = "4";
        g5.style.order = "5";
      }
      if (codeTab == "g2") {
        g1.style.order = "5";
        g2.style.order = "1";
        g3.style.order = "2";
        g4.style.order = "3";
        g5.style.order = "4";
      }
      if (codeTab == "g3") {
        g1.style.order = "4";
        g2.style.order = "5";
        g3.style.order = "1";
        g4.style.order = "2";
        g5.style.order = "3";
      }
      if (codeTab == "g4") {
        g1.style.order = "3";
        g2.style.order = "4";
        g3.style.order = "5";
        g4.style.order = "1";
        g5.style.order = "2";
      }
      if (codeTab == "g5") {
        g1.style.order = "2";
        g2.style.order = "3";
        g3.style.order = "4";
        g4.style.order = "5";
        g5.style.order = "1";
      }
    }

    galleryTabsItems.forEach((p) => {
      p.classList.remove("active");
      e.target.classList.add("active");
    });

    galleryContent.forEach((item) => {
      if (item.classList.contains(codeTab)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
});

// g1.style.order = "2";
// g2.style.order = "3";
// g3.style.order = "4";
// g4.style.order = "5";
// g5.style.order = "1";

const gallery1Slider = new Swiper(".gallery1-swiper", {
  navigation: {
    nextEl: ".gallery1-swiper-button--next",
    prevEl: ".gallery1-swiper-button--prev",
  },
  pagination: {
    el: ".gallery1-swiper-pagination",
    type: "fraction",
  },

  effect: "coverflow",

  coverflowEffect: {
    rotate: 5,
    stretch: 50,
    slideShadows: true,
  },

  initialSlide: 0,
  speed: 2000,
  loop: true,
});

const gallery2Slider = new Swiper(".gallery2-swiper", {
  navigation: {
    nextEl: ".gallery2-swiper-button--next",
    prevEl: ".gallery2-swiper-button--prev",
  },
  pagination: {
    el: ".gallery2-swiper-pagination",
    type: "fraction",
  },

  effect: "coverflow",

  coverflowEffect: {
    rotate: 5,
    stretch: 50,
    slideShadows: true,
  },

  initialSlide: 0,
  speed: 2000,
  loop: true,
});

const gallery3Slider = new Swiper(".gallery3-swiper", {
  navigation: {
    nextEl: ".gallery3-swiper-button--next",
    prevEl: ".gallery3-swiper-button--prev",
  },
  pagination: {
    el: ".gallery3-swiper-pagination",
    type: "fraction",
  },

  effect: "coverflow",

  coverflowEffect: {
    rotate: 5,
    stretch: 50,
    slideShadows: true,
  },

  initialSlide: 0,
  speed: 2000,
  loop: true,
});

const gallery4Slider = new Swiper(".gallery4-swiper", {
  navigation: {
    nextEl: ".gallery4-swiper-button--next",
    prevEl: ".gallery4-swiper-button--prev",
  },
  pagination: {
    el: ".gallery4-swiper-pagination",
    type: "fraction",
  },

  effect: "coverflow",

  coverflowEffect: {
    rotate: 5,
    stretch: 50,
    slideShadows: true,
  },

  initialSlide: 0,
  speed: 2000,
  loop: true,
});

const gallery5Slider = new Swiper(".gallery5-swiper", {
  navigation: {
    nextEl: ".gallery5-swiper-button--next",
    prevEl: ".gallery5-swiper-button--prev",
  },
  pagination: {
    el: ".gallery5-swiper-pagination",
    type: "fraction",
  },

  effect: "coverflow",

  coverflowEffect: {
    rotate: 5,
    stretch: 50,
    slideShadows: true,
  },

  initialSlide: 0,
  speed: 2000,
  loop: true,
});

const parkingSlider = new Swiper(".parking-swiper", {
  navigation: {
    nextEl: ".parking-swiper-button--next",
    prevEl: ".parking-swiper-button--prev",
  },
  spaceBetween: 25,
  slidesPerView: 3,
  slidesPerGroup: 1,
  speed: 2000,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

const pantriesSlider = new Swiper(".pantries-swiper", {
  navigation: {
    nextEl: ".pantries-swiper-button--next",
    prevEl: ".pantries-swiper-button--prev",
  },
  spaceBetween: 25,
  slidesPerView: 3,
  slidesPerGroup: 1,
  speed: 2000,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

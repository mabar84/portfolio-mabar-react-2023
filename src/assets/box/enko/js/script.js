$(function () {
  $("#aivazovskiMap").click(function () {
    $("#aivazovskiMap").toggleClass("act_item");
    $("#peobraghenskMap,#peobraghenskMoskMap,#nikolskiMap").removeClass(
      "act_item"
    );
  });
  $("#peobraghenskMap").click(function () {
    $("#peobraghenskMap").toggleClass("act_item");
    $("#aivazovskiMap,#peobraghenskMoskMap,#nikolskiMap").removeClass(
      "act_item"
    );
  });
  $("#peobraghenskMoskMap").click(function () {
    $("#peobraghenskMoskMap").toggleClass("act_item");
    $("#aivazovskiMap,#peobraghenskMap,#nikolskiMap").removeClass("act_item");
  });
  $("#nikolskiMap").click(function () {
    $("#nikolskiMap").toggleClass("act_item");
    $("#peobraghenskMap,#peobraghenskMoskMap,#aivazovskiMap").removeClass(
      "act_item"
    );
  });

  // $('.mobile-burger').click(function(){
  //     $('.mobile-menu').slideToggle();
  // });

  // $('.geo').click(function(){
  //     $('.geo').toggleClass('actprop');
  //     $('.__enco_map').slideToggle();
  //     $('.offices').hide();
  //     $('.mono').removeClass('actprop');
  // });
  // $('.mono').click(function(){
  //     $('.mono').toggleClass('actprop');
  //     $('.offices').slideToggle();
  //     $('.geo').removeClass('actprop');
  //     $('.__enco_map').hide();
  // });

  flatSearchSwitcher({
    media: "min-width: 992px",
  });

  // $('#call,.call1,.header-btn').click(function(e){
  //     e.preventDefault();
  //     $('.__enco_call_modal').addClass('active_modal');
  // });

  // $('.modal_mask,.__enco_call_modal_btn').click(function(e){
  //     e.preventDefault();
  //     $('.__enco_call_modal').removeClass('active_modal');
  // });

  $(document).on("scroll", function (e) {
    if (window.scrollY > 2) {
      $(".header-desktop").addClass("scrolled");
      $("main").addClass("scrolled");
    }
    if (window.scrollY === 0) {
      $(".header-desktop").removeClass("scrolled");
      $("main").removeClass("scrolled");
    }
  });

  $(".mobile-burger").click(function () {
    $(".mobile-menu").toggleClass("active");
  });

  $(".slider-nav").slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<div class="prev"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
    nextArrow:
      '<div class="next"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        },
      },
    ],
  });

  initBusinessSlider();

  $("#online_phone").keyup(function (e) {
    this.value = this.value.replace(/[^0-9\.]/g, "");
  });

  let it = document.getElementsByClassName("__enco_business_track_item");
  let a;

  // for (a = 0; a < it.length; a++) {
  //     it[a].addEventListener("click", function() {
  //         this.classList.toggle('active');
  //         this.classList.toggle('slick-center');
  //     });
  // }
  document.querySelector(".mobile-burger").addEventListener("click", () => {
    document.querySelector(".mobile-burger").classList.toggle("active");
    document.querySelector(".mobile-menu").classList.toggle("active");
    document.body.classList.toggle("overflow");
  });

  let acc = document.getElementsByClassName("accordion1");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      let accbtn = this.lastElementChild;
      accbtn.classList.toggle("active");
      let p = accbtn.firstElementChild;
      let m = accbtn.lastElementChild;
      p.classList.toggle("none");
      m.classList.toggle("inline");
      let bl = this.parentElement;
      bl.classList.toggle("act");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
      "map",
      {
        center: [57.165705, 65.59889],
        zoom: 11,
      },
      {
        searchControlProvider: "yandex#search",
      }
    );
    const iconsPath = [
      {
        passive: "./img/aiva.svg",
        active: "./img/aivaact.svg",
      },
      {
        passive: "./img/preobr.svg",
        active: "./img/preobract.svg",
      },
      {
        passive: "./img/nikol.svg",
        active: "./img/nikolact.svg",
      },
      {
        passive: "./img/preobr.svg",
        active: "./img/preobract.svg",
      },
    ];
    const icons = [];
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="map-icon">$[properties.iconContent]</div>'
    );
    const aivazovsky = new ymaps.Placemark(
      [57.165705, 65.59889],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/aiva.svg",
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38],
      }
    );
    const peobraghensk = new ymaps.Placemark(
      [57.117535, 65.501678],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/preobr.svg",
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38],
      }
    );
    const peobraghenskMosk = new ymaps.Placemark(
      [57.123623, 65.470245],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/preobr.svg",
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38],
      }
    );
    const nikolski = new ymaps.Placemark(
      [57.088936, 65.515488],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/nikol.svg",
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38],
      }
    );
    icons.push(aivazovsky, peobraghensk, peobraghenskMosk, nikolski);
    document.querySelector("#aivazovskiMap").addEventListener("click", () => {
      aivazovsky.options.set("iconImageHref", "./img/aivaact.svg");
    });
    document.querySelector("#peobraghenskMap").addEventListener("click", () => {
      peobraghensk.options.set("iconImageHref", "./img/preobract.svg");
    });
    document
      .querySelector("#peobraghenskMoskMap")
      .addEventListener("click", () => {
        peobraghenskMosk.options.set("iconImageHref", "./img/preobract.svg");
      });
    document.querySelector("#nikolskiMap").addEventListener("click", () => {
      nikolski.options.set("iconImageHref", "./img/nikolact.svg");
    });
    $(function () {
      $("#aivazovskiMap").click(function () {
        peobraghensk.options.set("iconImageHref", "./img/preobr.svg");
        peobraghenskMosk.options.set("iconImageHref", "./img/preobr.svg");
        nikolski.options.set("iconImageHref", "./img/nikol.svg");
      });
      $("#peobraghenskMap").click(function () {
        aivazovsky.options.set("iconImageHref", "./img/aiva.svg");
        peobraghenskMosk.options.set("iconImageHref", "./img/preobr.svg");
        nikolski.options.set("iconImageHref", "./img/nikol.svg");
      });
      $("#peobraghenskMoskMap").click(function () {
        peobraghensk.options.set("iconImageHref", "./img/preobr.svg");
        aivazovsky.options.set("iconImageHref", "./img/aiva.svg");
        nikolski.options.set("iconImageHref", "./img/nikol.svg");
      });
      $("#nikolskiMap").click(function () {
        peobraghensk.options.set("iconImageHref", "./img/preobr.svg");
        peobraghenskMosk.options.set("iconImageHref", "./img/preobr.svg");
        aivazovsky.options.set("iconImageHref", "./img/aiva.svg");
      });
    });

    aivazovsky.events.add("click", () => {
      $(function () {
        $("#aivazovskiMap").toggleClass("act_item");
        $("#peobraghenskMap,#peobraghenskMoskMap,#nikolskiMap").removeClass(
          "act_item"
        );
      });
      aivazovsky.options.set("iconImageHref", "./img/aivaact.svg");
      peobraghensk.options.set("iconImageHref", "./img/preobr.svg");
      nikolski.options.set("iconImageHref", "./img/nikol.svg");
      peobraghenskMosk.options.set("iconImageHref", "./img/preobr.svg");
    });
    peobraghensk.events.add("click", () => {
      $(function () {
        $("#peobraghenskMap").toggleClass("act_item");
        $("#aivazovskiMap,#peobraghenskMoskMap,#nikolskiMap").removeClass(
          "act_item"
        );
      });
      peobraghensk.options.set("iconImageHref", "./img/preobract.svg");
      nikolski.options.set("iconImageHref", "./img/nikol.svg");
      aivazovsky.options.set("iconImageHref", "./img/aiva.svg");
      peobraghenskMosk.options.set("iconImageHref", "./img/preobr.svg");
    });
    peobraghenskMosk.events.add("click", () => {
      $(function () {
        $("#peobraghenskMoskMap").toggleClass("act_item");
        $("#aivazovskiMap,#peobraghenskMap,#nikolskiMap").removeClass(
          "act_item"
        );
      });
      peobraghenskMosk.options.set("iconImageHref", "./img/preobract.svg");
      peobraghensk.options.set("iconImageHref", "./img/preobr.svg");
      nikolski.options.set("iconImageHref", "./img/nikol.svg");
      aivazovsky.options.set("iconImageHref", "./img/aiva.svg");
    });
    nikolski.events.add("click", () => {
      $(function () {
        $("#nikolskiMap").toggleClass("act_item");
        $("#peobraghenskMap,#peobraghenskMoskMap,#aivazovskiMap").removeClass(
          "act_item"
        );
      });
      nikolski.options.set("iconImageHref", "./img/nikolact.svg");
      peobraghensk.options.set("iconImageHref", "./img/preobr.svg");
      aivazovsky.options.set("iconImageHref", "./img/aiva.svg");
      peobraghenskMosk.options.set("iconImageHref", "./img/preobr.svg");
    });
    function clearIcons() {
      icons.forEach((el, index) => {
        el.options.set("iconImageHref", iconsPath[index].passive);
      });
    }
    myMap.geoObjects
      .add(aivazovsky)
      .add(peobraghensk)
      .add(peobraghenskMosk)
      .add(nikolski);
    myMap.behaviors.disable(["scrollZoom"]);
    myMap.controls.remove("searchControl"); // удаляем поиск
    myMap.controls.remove("trafficControl"); // удаляем контроль трафика
    myMap.controls.remove("typeSelector"); // удаляем тип
    myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
    myMap.controls.remove("rulerControl"); // удаляем контрол правил
  });
});

const BannerTop = {
  bannerBlock: null,
  closeBtn: null,
  logoNew: null,
  logoOld: null,
  init() {
    this.bannerBlock = document.querySelector(".banner-top");
    this.closeBtn = this.bannerBlock.querySelector(".banner-top-close");
    this.logoOld = this.bannerBlock.querySelector("#logo-old");
    this.logoNew = this.bannerBlock.querySelector("#logo-new");
    this.logoNew.classList.add("active");
    this.closeBtn.addEventListener("click", () => {
      this.bannerBlock.remove();
    });
    setInterval(() => {
      this.toggleLogo();
    }, 3000);
  },
  toggleLogo() {
    if (this.logoNew.classList.contains("active")) {
      this.logoNew.classList.remove("active");
      this.logoOld.classList.add("active");
    } else {
      this.logoNew.classList.add("active");
      this.logoOld.classList.remove("active");
    }
  },
};
/**
 * Class of custom select, based on checkbox.
 * params: { selector } - HTML element (select block)
 * if you want to init but not use, add too your select class - 'disable'
 */
class CustomSelect {
  constructor(selector) {
    this.select = selector;
    this.optionsBlock = this.select.querySelector(".custom-select-options");
    this.visibleBlock = this.select.querySelector(".custom-select-title");
    this.checkedValues = [];
    this.options = this.optionsBlock.querySelectorAll("input");
    this._init();
    console.log("CustomSelect inited");
    console.log(this.visibleBlock);
  }
  _init() {
    this.options.forEach((el) => {
      if (el.checked) {
        this.checkedValues.push(el.value);
      }
    });
    this.select.addEventListener("click", () => {
      if (!this.select.classList.contains("disable")) {
        this.toggleOptions();
      }
    });
    this.optionsBlock.style.maxHeight = null;
    this.showSelected();
    this.options.forEach((el) => {
      el.addEventListener("change", (e) => {
        this.changeValues(e);
      });
    });
  }
  showSelected() {
    this.visibleBlock.innerHTML = this.checkedValues.join(", ");
    this.visibleBlock.dataset.values = this.checkedValues.join(", ");
  }
  changeValues(e) {
    if (e.target.checked) {
      this.checkedValues.push(e.target.dataset.value);
      this.showSelected();
    } else {
      this.checkedValues = this.checkedValues.filter(
        (el) => el !== e.target.dataset.value
      );
      this.showSelected();
    }
  }
  toggleOptions() {
    this.select.classList.toggle("open");
    if (!this.optionsBlock.style.maxHeight) {
      this.optionsBlock.style.maxHeight = `${this.optionsBlock.scrollHeight}px`;
    } else {
      this.optionsBlock.style.maxHeight = null;
    }
  }
}
const HiddenFilters = {
  hiddenBlock: null,
  buttonInitiator: null,
  currentText: "",
  init() {
    this.hiddenBlock = document.querySelector(".filter-hidden");
    this.buttonInitiator = document.querySelector(".filter-visible-more");
    this.useDefaultParams();
  },
  useDefaultParams() {
    this.hiddenBlock.style.maxHeight = null;
    this.buttonInitiator.addEventListener("click", () => {
      this.toggleHiddenBlock();
    });
    this.currentText = this.buttonInitiator.textContent;
  },
  toggleHiddenBlock() {
    if (this.hiddenBlock.style.maxHeight) {
      this.buttonInitiator.classList.remove("open");
      this.hiddenBlock.style.maxHeight = null;
      this.toggleButtonInfo();
    } else {
      this.buttonInitiator.classList.add("open");
      this.hiddenBlock.style.maxHeight = `${this.hiddenBlock.scrollHeight}px`;
      this.toggleButtonInfo();
    }
  },
  toggleButtonInfo() {
    this.currentText = this.buttonInitiator.textContent;
    this.buttonInitiator.innerHTML = this.buttonInitiator.dataset.dinamic;
    this.buttonInitiator.dataset.dinamic = this.currentText;
  },
};

// initialisation

document.querySelectorAll(".custom-select").forEach((el) => {
  new CustomSelect(el);
});
if (document.querySelector(".banner-top")) {
  BannerTop.init();
}
function topAnimate() {
  if (pageYOffset > 1) {
    document.querySelector(".header-desktop").classList.add("scrolled");
    if (document.querySelector(".banner-top")) {
      BannerTop.bannerBlock.remove();
    }
  } else {
    document.querySelector(".header-desktop").classList.remove("scrolled");
  }
}
window.addEventListener("scroll", topAnimate);
if (document.querySelector(".filter-hidden")) {
  if (window.innerWidth > 768) {
    HiddenFilters.init();
  } else {
    document
      .querySelector(".filter-visible-more")
      .addEventListener("click", () => {
        document.body.classList.add("overflow");
        document.querySelector(".filter").classList.add("active");
      });
    document
      .querySelector(".filter-mobile-close")
      .addEventListener("click", () => {
        document.body.classList.remove("overflow");
        document.querySelector(".filter").classList.remove("active");
      });
  }
}

// Rages

var $priceRange = $(".price-range-slider"),
  $priceInputFrom = $("#price-input-from"),
  $priceInputTo = $("#price-input-to"),
  priceInstance,
  priceMin = parseInt($priceInputFrom.data("min").replace(/\s/g, "")),
  priceMax = parseInt($priceInputTo.data("max").replace(/\s/g, "")),
  priceFrom = parseInt($priceInputFrom.data("start").replace(/\s/g, "")),
  priceTo = parseInt($priceInputTo.data("end").replace(/\s/g, ""));
$priceRange.ionRangeSlider({
  skin: "round",
  type: "double",
  min: priceMin,
  max: priceMax,
  from: priceFrom,
  to: priceTo,
  onStart: updatePriceInputs,
  onChange: updatePriceInputs,
});
priceInstance = $priceRange.data("ionRangeSlider");
function updatePriceInputs(data) {
  from = splitNumber(data.from);
  to = splitNumber(data.to);
  $priceInputFrom.prop("value", from);
  $priceInputTo.prop("value", to);
}
$priceInputFrom.on("input", function () {
  $(this).val(
    $(this)
      .val()
      .replace(/[A-Za-zА-Яа-яЁё]/, "")
  );
  $(this).val(splitNumber($(this).val()));
  var val = $(this).prop("value").replace(/\s/g, "");
  if (val < priceMin) {
    val = priceMin;
  } else if (val > priceTo) {
    val = priceTo;
    console.log(val);
  }
  priceInstance.update({
    from: val,
  });
});

$priceInputTo.on("input", function () {
  $(this).val(
    $(this)
      .val()
      .replace(/[A-Za-zА-Яа-яЁё]/, "")
  );
  $(this).val(splitNumber($(this).val()));
  var val = $(this).prop("value").replace(/\s/g, "");
  if (val < from) {
    val = from;
  } else if (val > priceMax) {
    val = priceMax;
  }
  priceInstance.update({
    to: val,
  });
});

function splitNumber(val) {
  let num = val.toString();
  num = num.replace(/ /g, "");
  num = num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return num;
}

//floor range

var $floorRange = $(".floor-range-slider");
var $floorInputFrom = $("#floor-input-from");
var $floorInputTo = $("#floor-input-to");
var floorInstance;
var floorMin = $floorInputFrom.data("min");
var floorMax = $floorInputTo.data("max");
var floorFrom = $floorInputFrom.data("start");
var floorTo = $floorInputTo.data("end");
$floorRange.ionRangeSlider({
  skin: "round",
  type: "double",
  min: floorMin,
  max: floorMax,
  from: floorFrom,
  to: floorTo,
  onStart: updateFloorInputs,
  onChange: updateFloorInputs,
  onFinish: updateFloorInputs,
});
floorInstance = $floorRange.data("ionRangeSlider");
function updateFloorInputs(data) {
  from = data.from;
  to = data.to;

  $floorInputFrom.prop("value", from);
  $floorInputTo.prop("value", to);
}
$floorInputFrom.on("change", function () {
  var val = $(this).prop("value");
  if (val < floorMin) {
    val = floorMin;
  } else if (val > to) {
    val = to;
  }
  floorInstance.update({
    from: val,
  });
  $(this).prop("value", val);
});
$floorInputTo.on("change", function () {
  var val = $(this).prop("value");
  if (val < from) {
    val = from;
  } else if (val > floorMax) {
    val = floorMax;
  }
  floorInstance.update({
    to: val,
  });
  $(this).prop("value", val);
});

var $squareRange = $(".square-range-slider");
var $squareInputFrom = $("#square-input-from");
var $squareInputTo = $("#square-input-to");
var squareInstance;
var squareMin = $squareInputFrom.data("min");
var squareMax = $squareInputTo.data("max");
var squareFrom = $squareInputFrom.data("start");
var squareTo = $squareInputTo.data("end");

$squareRange.ionRangeSlider({
  skin: "round",
  type: "double",
  min: squareMin,
  max: squareMax,
  from: squareFrom,
  to: squareTo,
  step: 0.5,
  onStart: updateSquareInputs,
  onChange: updateSquareInputs,
  onFinish: updateSquareInputs,
});
squareInstance = $squareRange.data("ionRangeSlider");
function updateSquareInputs(data) {
  from = data.from;
  to = data.to;

  $squareInputFrom.prop("value", from);
  $squareInputTo.prop("value", to);
}
$squareInputFrom.on("change", function () {
  var val = $(this).prop("value");
  if (val < squareMin) {
    val = squareMin;
  } else if (val > to) {
    val = to;
  }
  squareInstance.update({
    from: val,
  });
  $(this).prop("value", val);
});
$squareInputTo.on("change", function () {
  var val = $(this).prop("value");
  if (val < from) {
    val = from;
  } else if (val > squareMax) {
    val = squareMax;
  }
  squareInstance.update({
    to: val,
  });
  $(this).prop("value", val);
});
document.querySelector(".mobile-burger").addEventListener("click", () => {
  document.querySelector(".mobile-burger").classList.toggle("active");
  document.querySelector(".mobile-menu").classList.toggle("active");
  document.body.classList.toggle("overflow");
});

function initBusinessSlider() {
  const $businessSlider = $(".__enco_business_track");
  const $bgSlider = $(".__enco_business_img");
  $businessSlider.children().each(function (i) {
    this.dataset.index = i;
  });

  if ($businessSlider.length) {
    $businessSlider.slick({
      infinite: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      // centerPadding: '60px',
      appendArrows: $(".__enco_business_nav"),
      prevArrow:
        '<div class="prev1"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
      nextArrow:
        '<div class="next1"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        // {
        //     breakpoint: 768,
        //     settings: {
        //         slidesToShow: 3,
        //     }
        // },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            adaptiveHeight: true,
            // centerMode: false,
          },
        },
        {
          breakpoint: 540,
          settings: {
            // slidesToShow: 1.5,
            slidesToShow: 1,

            adaptiveHeight: true,
            // centerMode: false,
          },
        },
        // {
        //     breakpoint: 400,
        //     settings: {
        //         slidesToShow: 0.85,
        //         adaptiveHeight:true,
        //         // centerMode: false,
        //     }
        // },
      ],
      asNavFor: ".__enco_business_img",
    });
    $bgSlider.slick({
      dots: false,
      arrows: false,
      fade: true,
      asNavFor: ".__enco_business_track",
    });
    $businessSlider.on("click", ".slick-slide", function () {
      $businessSlider.slick("slickGoTo", +this.dataset.index);
    });
  }
}

function flatSearchSwitcher({ media } = {}) {
  const $controls = $(".flat-search-view-switch-control");
  if (!$controls.length) return;
  if ((media && window.matchMedia(`(${media})`).matches) || !media) {
    // let $activeControl = $controls.filter('.actprop');
    $controls.addClass("activated");
    let $activeControl;
    const $content = {
      showed: null,
      hidden: null,
    };
    $controls.each(function () {
      const contentId = this.dataset.contentId;
      if (this.classList.contains("actprop")) {
        $activeControl = $(this);
        $content.showed = $("#" + contentId);
      } else {
        $content.hidden = $("#" + contentId);
      }
    });
    if (!$activeControl) {
      console.error("set active for flat-search-view-switch-control");
      return;
    }
    $controls.click(function () {
      const $selectedControl = $(this);
      if ($selectedControl !== $activeControl) {
        $controls.removeClass("actprop");
        $activeControl = $selectedControl.addClass("actprop");
        const $needHide = $content.showed.fadeOut();
        $content.showed = $content.hidden.fadeIn();
        $content.hidden = $needHide;
      }
    });
  }
} /* /local/templates/new/js/jquery.fancybox.min.js?163169909345539*/ /* /local/templates/new/js/jquery.inputmask.bundle.min.js?163169909376313*/ /* /local/templates/new/js/formSubmit.js?16365253468218*/ /* /local/templates/new/js/main.js?163169909323802*/ /* /local/templates/new/js/general.js?16316990931304*/

/* End */

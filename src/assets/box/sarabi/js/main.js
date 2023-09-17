$(".reviews-wrapper").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

// $(document).ready(function () {
//   $("form").submit(function () {
//     var o = $(this);
//     return (
//       $.ajax({
//         type: "POST",
//         url: "mail.php",
//         data: o.serialize(),
//       }).done(function () {
//         alert("Thank you!"),
//           setTimeout(function () {
//             o.trigger("reset");
//           }, 1e3);
//       }),
//       !1
//     );
//   });
// });

// input range
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1500,
    values: [0, 900],
    slide: function (event, ui) {
      $("#amount").val("" + ui.values[0] + " - " + ui.values[1]);
    },
  });
  $("#amount").val(
    "" +
      $("#slider-range").slider("values", 0) +
      " - " +
      $("#slider-range").slider("values", 1)
  );
});

// /

(function ($) {
  $(window).on("load", function () {
    $(".mycustom-scroll").mCustomScrollbar();
  });
})(jQuery);

$(".mycustom-scroll").mCustomScrollbar({
  axis: "y", // вертикальный скролл
  theme: "rounded-dark", // тема
  scrollInertia: "330", // продолжительность прокрутки, значение в миллисекундах
  setHeight: "100%", // высота блока (переписывает CSS)
  mouseWheel: {
    deltaFactor: 300, // кол-во пикселей на одну прокрутку колёсика мыши
  },
});

// mobile menu
$(".header-bottom__btn").on("click", function () {
  $(".header-bottom__btn").toggleClass("header-bottom__btn--active");
  $(".header-bottom__list").toggleClass("header-bottom__list--active");
  $("html").toggleClass("overflow--hidden");
});

$(".header-bottom__link").on("click", function () {
  $(".header-bottom__btn").removeClass("header-bottom__btn--active");
  $(".header-bottom__list").removeClass("header-bottom__list--active");
  $("html").removeClass("overflow--hidden");
});

$(".faq-box__item-title").on("click", function () {
  $(".faq-box__item").removeClass("faq-box__item--active");
  $(this).parent().toggleClass("faq-box__item--active");
});

//   modal

$(".detail-box__list-edit").on("click", function () {
  $(".modal-edit").addClass("modal--active");
  $("html").addClass("hidden");
});
$(".modal-close").on("click", function () {
  $(".modal-doc").removeClass("modal--active");
  $(".modal-edit").removeClass("modal--active");
  $(".modal-save").removeClass("modal--active");
  $(".modal--add").removeClass("modal--active");
  $("html").removeClass("hidden");
});

$(".modal-edit-btn").on("click", function () {
  $(".modal-edit").removeClass("modal--active");
  $("html").removeClass("hidden");
});

$(".modal-edit-btn").on("click", function () {
  $(".modal-save").addClass("modal--active");
  $("html").addClass("hidden");
});

$(".modal-download").on("click", function () {
  $(".modal--add").addClass("modal--active");
  $("html").addClass("hidden");
});

$(".modal-open").on("click", function () {
  $(".modal--add").removeClass("modal--active");
  $(".modal-doc").addClass("modal--active");
  $("html").addClass("hidden");
});

//   $('.modal--add').on('click', function () {
//     $('.modal-doc').removeClass('modal--active');
//     $('html').addClass('hidden');
//   });

// events for titles
$(".select__item-red").on("click", function () {
  $(".color-active").addClass("color-active-red");

  $(".color-active").removeClass("color-active-yellow");
  $(".color-active").removeClass("color-active-black");
  $(".color-active").removeClass("color-active-green");
});

$(".select__item-yellow").on("click", function () {
  $(".color-active").addClass("color-active-yellow");

  $(".color-active").removeClass("color-active-red");
  $(".color-active").removeClass("color-active-black");
  $(".color-active").removeClass("color-active-green");
});

$(".select__item-black").on("click", function () {
  $(".color-active").addClass("color-active-black");

  $(".color-active").removeClass("color-active-red");
  $(".color-active").removeClass("color-active-yellow");
  $(".color-active").removeClass("color-active-green");
});

$(".select__item-green").on("click", function () {
  $(".color-active").addClass("color-active-green");

  $(".color-active").removeClass("color-active-red");
  $(".color-active").removeClass("color-active-yellow");
  $(".color-active").removeClass("color-active-black");
});

jQuery(($) => {
  $(".select").on("click", ".select__head", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).next().fadeOut();
    } else {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();

      $(this).addClass("open");
      $(this).next().fadeIn();
    }
  });

  $(".select").on("click", ".select__item", function () {
    $(".select__head").removeClass("open");
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".select").length) {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
    }
  });
});

$("#adults_minus").click(function () {
  const adults_result = $("#adults_result");
  let adults_text = $("#adults_text");
  let get_adults_text = adults_text.text();
  let num = +/\d+/.exec(get_adults_text);
  let result = num - 1;

  if (result <= 1) {
    adults_text.text(1 + " взрослый");
    adults_result.val(1 + " взрослый");
  } else {
    adults_text.text(result + " взрослых");
    adults_result.val(result + " взрослых");
  }
});

$("#adults_plus").click(function () {
  const adults_result = $("#adults_result");
  const get_adults_result = adults_result.text();

  let adults_text = $("#adults_text");
  let get_adults_text = adults_text.text();
  let num = +/\d+/.exec(get_adults_text);
  let result = ++num;

  adults_text.text(result + " взрослых");
  adults_result.val(result + " взрослых");
});

$("#kids_result").click(function () {
  const get_adults_result = $("#adults_result").val();
  let kids_result = $("#kids_result").val();
  let adults_text = $("#adults_text").text();

  if (kids_result != "") {
    if (kids_result != 1) {
      let result = adults_text + " " + kids_result + " детей";
      $("#adults_result").val(result);
    } else {
      let result = adults_text + " " + kids_result + " ребенок";
      $("#adults_result").val(result);
    }
  }
});

$("#date").click(function () {
  $(this).find(".search-form__date").fadeIn();
});

$("#form_nights").click(function () {
  $(this).find(".search-form__nights").fadeIn();
});

$("#form_tourists").click(function () {
  $(this).find(".search-form__peoples").fadeIn();
});

$(document).click(function (e) {
  let modal_date = $(".search-form__date");
  let input_date = $("#date");

  if (
    !modal_date.is(e.target) &&
    modal_date.has(e.target).length === 0 &&
    !input_date.is(e.target) &&
    input_date.has(e.target).length === 0
  ) {
    modal_date.fadeOut();
  }
});

$(document).click(function (e) {
  let modal_nights = $(".search-form__nights");
  let input_nights = $("#form_nights");

  if (
    !modal_nights.is(e.target) &&
    modal_nights.has(e.target).length === 0 &&
    !input_nights.is(e.target) &&
    input_nights.has(e.target).length === 0
  ) {
    modal_nights.fadeOut();
  }
});

$(document).click(function (e) {
  let modal_peoples = $(".search-form__peoples");
  let input_peoples = $("#form_tourists");

  if (
    !modal_peoples.is(e.target) &&
    modal_peoples.has(e.target).length === 0 &&
    !input_peoples.is(e.target) &&
    input_peoples.has(e.target).length === 0
  ) {
    modal_peoples.fadeOut();
  }
});

$(".search-result__more-one").on("click", function () {
  $(".search-more").toggleClass("search-more--hidden");
  $(".search-more__upload").toggleClass("search-more--hidden");
  $(".search-more__close").toggleClass("search-more--hidden");
});

//
$(".search-more__upload").on("click", function () {
  $(".more-results").addClass("search-more--show");
});
//

$(".search-more__close").on("click", function () {
  $(".search-more").toggleClass("search-more--hidden");
  $(".search-more__upload").toggleClass("search-more--hidden");
  $(".search-more__close").toggleClass("search-more--hidden");
});

$(".search-result__more-one").on("click", function () {
  $(".search-result__more-pic").toggleClass("close-cart");
});

// items for checkbox
// item one
$(".minus--one").on("click", function () {
  $(".minus--one").addClass("hide-total");
  $(".plus--one").addClass("show");
  $(".items-one").addClass("hide-total");
});

$(".plus--one").on("click", function () {
  $(".minus--one").removeClass("hide-total");
  $(".plus--one").removeClass("show");
  $(".items-one").removeClass("hide-total");
});

// item two

$(".plus--two").on("click", function () {
  $(".minus--two").addClass("show");
  $(".plus--two").addClass("hide-total");
  $(".items-two").addClass("show");
});

$(".minus--two").on("click", function () {
  $(".minus--two").removeClass("show");
  $(".plus--two").removeClass("hide-total");
  $(".items-two").removeClass("show");
});

// item three

$(".plus--three").on("click", function () {
  $(".minus--three").addClass("show");
  $(".plus--three").addClass("hide-total");
  $(".items-tree").addClass("show");
});

$(".minus--three").on("click", function () {
  $(".minus--three").removeClass("show");
  $(".plus--three").removeClass("hide-total");
  $(".items-tree").removeClass("show");
});

// item four
$(".plus--four").on("click", function () {
  $(".minus--four").addClass("show");
  $(".plus--four").addClass("hide-total");
  $(".items-four").addClass("show");
});

$(".minus--four").on("click", function () {
  $(".minus--four").removeClass("show");
  $(".plus--four").removeClass("hide-total");
  $(".items-four").removeClass("show");
});

// status for select
$(".status-item__select").on("click", function () {
  $(".status-item--sel").addClass("show");
});

$(".status-item__selectt").on("click", function () {
  $(".status-item--selectt").addClass("show");
});

$(".status-item__se").on("click", function () {
  $(".status-item--s").addClass("show");
});

$(document).ready(function () {
  $(".js-select2").select2({
    placeholder: "Выберите город",
    maximumSelectionLength: 2,
    language: "ru",
  });
});

// for calendar
$(function () {
  $.datepicker.setDefaults($.datepicker.regional["ru"]);
  $("#datepickerFrom, #datepickerTo").datepicker({
    minDate: "1",
    defaultDate: "0",
    onSelect: function (date, datepicker) {
      if (datepicker.id == "datepickerFrom") {
        let datepickerTo = $("#datepickerTo");
        let endDate = datepickerTo.datepicker("getDate");
        datepickerTo.datepicker("option", "minDate", date);
        if (endDate < date) {
          datepickerTo.datepicker("setDate", date);
        }
        // set value to hidden
        /*let date = $("#datepickerFrom").datepicker("getDate").ToString();
        $("input[name='hiddenDateFrom']").val(date);*/
      }

      onChangeDatepicker();
    },
    onChangeMonthYear: function () {
      // console.log("CHANGED");
      event.stopPropagation();
      // $(".search-form__date").fadeIn();
    },
  });

  // define default values
  onChangeDatepicker();

  // delete arrows 1st time
  deleteArrows();

  // set names for spans in calendar-header
  let datepickerFrom = $("#datepickerFrom");
  let datepickerTo = $("#datepickerTo");
  let curMonth = datepickerFrom.datepicker("getDate").getMonth();

  let dateNow = Date.now();
  let year_was = false;

  for (let i = 0; i <= 12; i++) {
    let isYear = false;
    let name = "#calendar-header-" + i;
    let el = $(name);
    let month = curMonth + i;
    let text = getMonthName(month);
    // set YEAR
    if (text == "ГОД") {
      text = datepickerFrom.datepicker("getDate").getFullYear() + 1;
      text = text.toString();
      text = "'" + text.substring(2, 4);
      isYear = true;
      year_was = true;
      // console.log("ГОД", text);
    }
    // set onClick event

    if (!isYear) {
      el.click(function () {
        let count = i;
        if (month > 12) count = i - 1;

        // console.log("i = ", i, ", year_was = ", year_was, ", count = ", count);

        // let add_month = "+"+i+"m";
        datepickerFrom.datepicker("setDate", dateNow + "+" + count + "m");
        datepickerTo.datepicker("setDate", dateNow + "+" + count + "m");
        deleteArrows();
      });
    }

    el.text(text);
    // if (!isYear) count++;
  }

  // delete arrows when hover calendars
  $(".months").hover(function () {
    deleteArrows();
  });
});

function onChangeDatepicker() {
  var startDate = $("#datepickerFrom").datepicker("getDate");
  var endDate = $("#datepickerTo").datepicker("getDate");
  // console.log("start = ", getMonthName(startDate.getMonth()), ", endDate = ", getMonthName(endDate.getMonth()));
  var diff = endDate.getDate() - startDate.getDate() + 1;
  $("#dayCount").text(diff); //.parent().show();

  // set days to the main input
  let text =
    startDate.getDate() +
    " " +
    getMonthName(startDate.getMonth()) +
    " - " +
    endDate.getDate() +
    " " +
    getMonthName(endDate.getMonth());
  let inputDate = $("input[name='date']");
  inputDate.placeholder = text;
  inputDate.val(text);
}

function deleteArrows() {
  // console.log("DELETE");
  // $("#datepickerFrom .ui-datepicker-next").remove();
  // $("#datepickerFrom .ui-datepicker-prev").remove();
  // $("#datepickerTo .ui-datepicker-prev").remove();
}

function getMonthName(m) {
  switch (m) {
    case 0:
      return "янв";
    case 1:
      return "фев";
    case 2:
      return "мар";
    case 3:
      return "апр";
    case 4:
      return "май";
    case 5:
      return "июн";
    case 6:
      return "июл";
    case 7:
      return "авг";
    case 8:
      return "сен";
    case 9:
      return "окт";
    case 10:
      return "ноя";
    case 11:
      return "дек";
    case 12:
      return "янв";
    case 13:
      return "ГОД";
    case 14:
      return "фев";
    case 15:
      return "мар";
    case 16:
      return "апр";
    case 17:
      return "май";
    case 18:
      return "июн";
    case 19:
      return "июл";
    case 20:
      return "авг";
    case 21:
      return "сен";
    case 22:
      return "окт";
    case 23:
      return "ноя";
    case 24:
      return "дек";

    default:
      return "";
  }
}

// for get parameters
$(function () {
  // from
  let from = getGet("from");
  // console.log(from);
  if (from) $("input[name='from']").val(from);

  // to
  let to = getGet("to");
  if (to) $("input[name='to']").val(to);

  // date
  let date = getGet("date");
  if (date) $("input[name='date']").val(date);

  // nights
  let nights = getGet("nights");
  if (nights) $("input[name='nights']").val(nights);

  // peoples
  let peoples = getGet("peoples");
  if (peoples) $("input[name='peoples']").val(peoples);

  // kids
  let kids = getGet("kids");
  if (kids) $("select[name='kids']").val(kids);
});

// get GET parameter from url
function getGet(name) {
  var s = window.location.search;
  s = s.match(new RegExp(name + "=([^&=]+)"));
  return s ? decodeURI(s[1]).replaceAll("+", " ") : false;
}

// $(".search-form__nights-checkbox").click(function () {
//   if (this.checked) {
//     let k = $(this).next("span");
//     console.log("k=", k.text());
//   }
// });

// work with night checkboxes
$(".search-form__nights-checkbox").click(function () {
  let allChecked = $(".search-form__nights-checkbox:checked + span");

  let min = 0;
  let max = 0;
  allChecked.each(function (index, value) {
    // console.log(value.innerText);

    let v = parseInt(value.innerText, 0);
    if (v < min || min == 0) {
      min = v;
    }
    if (v > max || max == 0) {
      max = v;
    }
  });

  // console.log("min = ", min, ", max = ", max);

  let text = min + " - " + max;
  $("input[name='nights']").val(text);
});

$("button.search-form__btn.search-form__btn-apply").click(function () {
  $(".search-form__date").fadeOut();
  $(".search-form__nights").fadeOut();
  event.stopPropagation();
});

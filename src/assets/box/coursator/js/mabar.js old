console.log("mabar.js old version about 336 strings");
const result = {};
const coursator = document.querySelector(".coursator");
const body = document.querySelector("body");
console.log(body);
if (coursator) {
  //close popup
  const popUpCloseBtn = document.getElementById("close-popUpCourse");
  const popUpCourse = document.getElementById("popUpCourse");

  //popup input
  const inputField = document.getElementById("input-field");
  const list = document.getElementById("list");
  const question = document.querySelector(".question");
  const courseNameWrapper = document.querySelector(".course-name_wrapper");
  const courseNameWrapperPhantom = document.querySelector(".course-name_wrapper_phantom");

  // filter inputField

  popUpCloseBtn.addEventListener("click", () => {
    popUpCourse.classList.add("hidden");
    body.style.overflow = "auto";
    body.style.position = "static";
  });

  //change course  open popup
  const change = document.querySelector(".change");
  change.addEventListener("click", () => {
    popUpCloseBtn.classList.remove("hidden");
    popUpCourse.classList.remove("hidden");
    body.style.overflow = "hidden";
    body.style.position = "fixed";
  });

  //select
  const customSelectSchool = document.querySelector(".custom-select-school");
  const customSelectCourse = document.querySelector(".custom-select-course");

  const selectSelectedSchool = customSelectSchool.querySelector(".select-selected");
  const selectItemsSchool = customSelectSchool.querySelector(".select-items");
  const selectItemSchool = customSelectSchool.querySelectorAll(".select-item");

  const selectSelectedCourse = customSelectCourse.querySelector(".select-selected");
  const selectItemsCourse = customSelectCourse.querySelector(".select-items");
  const selectItemCourse = customSelectCourse.querySelectorAll(".select-item");

  const initialValue = selectSelectedCourse.innerText;

  selectSelectedSchool.addEventListener("click", () => {
    customSelectSchool.classList.toggle("open");
  });

  //sessionStorage
  if (sessionStorage.getItem("courseName")) {
    popUpCourse.classList.add("hidden");
    body.style.overflow = "auto";
    body.style.position = "static";
  }

  sessionStorage.getItem("schoolName")
    ? (selectSelectedSchool.innerText = sessionStorage.getItem("schoolName"))
    : (selectSelectedSchool.innerText = "Выберите школу");
  sessionStorage.getItem("courseName")
    ? (selectSelectedCourse.innerText = sessionStorage.getItem("courseName"))
    : (selectSelectedCourse.innerText = "Выберите курс");
  sessionStorage.getItem("manualCourse") ? (inputField.value = sessionStorage.getItem("manualCourse")) : (inputField.value = "");

  //selectSelectedSchool.innerText = sessionStorage.getItem("schoolName");

  const want500 = document.getElementById("want500");
  let schoolNumber = "";
  let schoolName = "";
  let courseNumber = "";
  let courseName = "";
  const courseFromPopup = document.getElementById("course-from-popup");

  courseFromPopup.textContent = `Нажмите, пожалуйста, "Изменить курс"`;

  document.addEventListener("click", (e) => {
    const isClickInsideSchool = customSelectSchool.contains(e.target);
    const isClickInsideCourse = customSelectCourse.contains(e.target);
    if (!isClickInsideSchool) {
      customSelectSchool.classList.remove("open");
    }
    if (!isClickInsideCourse) {
      customSelectCourse.classList.remove("open");
    }
  });

  selectItemSchool.forEach((item) => {
    item.addEventListener("click", () => {
      result.schoolNumber = item.dataset.value;
      result.schoolName = item.textContent;
      sessionStorage.setItem("schoolName", item.textContent);

      schoolName = item.textContent;
      schoolNumber = item.dataset.value; //для дальнейшей работы

      selectSelectedSchool.innerText = item.innerText;
      customSelectSchool.classList.remove("open");
      customSelectCourse.classList.remove("disabled");
      selectSelectedCourse.innerText = initialValue;
    });
  });
  selectSelectedCourse.addEventListener("click", () => {
    // customSelectSchool.classList.add("disabled");

    !customSelectCourse.classList.contains("disabled") && customSelectCourse.classList.toggle("open");
  });
  selectItemCourse.forEach((item) => {
    item.addEventListener("click", () => {
      result.courseNumber = item.dataset.value;
      result.courseName = item.textContent;
      sessionStorage.setItem("courseName", item.textContent);

      courseName = item.textContent;
      courseNumber = item.dataset.value; //для дальнейшей работы
      want500.classList.add("active");

      inputField.value && (courseFromPopup.textContent = inputField.value);
      courseName && (courseFromPopup.textContent = courseName);

      customSelectSchool.classList.remove("disabled");
      selectSelectedCourse.innerText = item.innerText;
      customSelectCourse.classList.remove("open");
    });
  });
  // want500 click
  want500.addEventListener("click", () => {
    popUpCourse.classList.add("hidden");
    body.style.overflow = "auto";
    body.style.position = "static";

    result.manualCourse = inputField.value;
    sessionStorage.setItem("manualCourse", inputField.value);

    // console.log("school", schoolName, " №", schoolNumber);
    // console.log("course", courseName, " №", courseNumber);
    // console.log("manual course=", inputField.value);

    inputField.value && (courseFromPopup.textContent = inputField.value);
    courseName && (courseFromPopup.textContent = courseName);
  });

  // input manual course
  question.addEventListener("click", () => {
    courseNameWrapper.style.display = "block";
    // courseNameWrapperPhantom.style.display = "none";
  });

  inputField.addEventListener("input", (e) => {
    const inputValue = e.target.value;

    const filteredValue = inputValue.replace(/[!^#$%^&/*]/g, "");

    e.target.value = filteredValue;

    list.style.display = "block";
    const searchTerm = inputField.value;

    document.addEventListener("click", (e) => {
      const isClickInsideManualCourse = list.contains(e.target);
      if (!isClickInsideManualCourse) {
        console.log(222);
        list.style.display = "none";
      }
    });

    want500.classList.add("active");

    // фильтрация массива со списком слов по началу
    const filteredList = words.filter((word) => word.toLowerCase().startsWith(searchTerm.toLowerCase()));

    // создание нового списка на основе отфильтрованного массива
    const newList = filteredList.map((item) => `<li>${item}</li>`).join("");
    list.innerHTML = newList;
    if (newList.length > 0) {
      const items = list.querySelectorAll("li");
      items.forEach((item) => {
        item.addEventListener("click", () => {
          inputField.value = item.textContent;
          list.style.display = "none";
        });
      });
    }
  });

  // массив со списком слов
  const words = [];
}
//ratings
const rates = document.querySelectorAll(".rate");
rates.forEach((rate) => {
  rate.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.getAttribute("title") === "text") {
      const name = "." + e.target.getAttribute("for");
      rate.querySelector(name).checked = true;
      const selectedRating = name[6];

      result[rate.id] = selectedRating;
      // console.log("block", rate.id, "has value ", selectedRating);
    }
  });
});

// cashbe-registration
const cashbeRegistration = document.querySelector(".cashbe-registration");
const more = document.querySelector(".more");
const closeCashbe = cashbeRegistration.querySelector(".close");
more.addEventListener("click", () => {
  cashbeRegistration.classList.remove("hidden");
});
closeCashbe.addEventListener("click", () => {
  cashbeRegistration.classList.add("hidden");
});

// money-order  //thanks
const moneyOrder = document.querySelector(".money-order");
const other = moneyOrder.querySelector(".other");
const additionalInputs = moneyOrder.querySelector(".additional-inputs");
const sendModeration = moneyOrder.querySelector(".send-moderation");
const thanks = moneyOrder.querySelector(".thanks");
const thanksClose = thanks.querySelector(".close");

other.addEventListener("click", () => {
  additionalInputs.classList.remove("hidden");
  other.classList.remove("active");
});

//review
const nameField = document.getElementById("name-field");
const emailField = document.getElementById("email-field");
const plusField = document.getElementById("plus-field");
const minusField = document.getElementById("minus-field");
const reviewField = document.getElementById("review-field");
const cachbe = document.getElementById("cachbe");
const yoomoney = document.getElementById("yoomoney");
const qiwi = document.getElementById("qiwi");
const visa = document.getElementById("visa");
const moneyOrderInputs = moneyOrder.querySelectorAll("input");
const allInputs = document.querySelectorAll("input");
const allTextarea = document.querySelectorAll("textarea");
const ratingsRadio = document.querySelectorAll("input[type=radio]");

const hideErrorText = () => {
  document.getElementById("text-error1").style.display = "none";
  document.getElementById("text-error2").style.display = "none";
  document.getElementById("text-error3").style.display = "none";
};

// top fields
nameField.addEventListener("input", () => {
  nameField.classList.remove("error");
  sendModeration.classList.add("active");
  hideErrorText();
});

emailField.addEventListener("input", () => {
  emailField.classList.remove("error");
  sendModeration.classList.add("active");
  hideErrorText();
});

reviewField.addEventListener("input", () => {
  reviewField.classList.remove("error");
  sendModeration.classList.add("active");
  hideErrorText();
});

// 4 inputs for cashback
moneyOrderInputs.forEach((item) => {
  item.addEventListener("input", () => {
    moneyOrder.classList.remove("error");
    sendModeration.classList.add("active");
    hideErrorText();
  });
});

sendModeration.addEventListener("click", () => {
  let isTopFields = nameField.value && emailField.value && reviewField.value ? true : false;
  let isBottomFields = cachbe.value || yoomoney.value || qiwi.value || visa.value ? true : false;

  !nameField.value && nameField.classList.add("error");
  !emailField.value && emailField.classList.add("error");
  !reviewField.value && reviewField.classList.add("error");

  if (!(isTopFields || isBottomFields)) {
    document.getElementById("text-error3").style.display = "block";
    moneyOrder.classList.add("error");
    sendModeration.classList.remove("active");
    document.getElementById("anchor").scrollIntoView({ behavior: "smooth" });
    return;
  }
  if (!isTopFields) {
    document.getElementById("text-error1").style.display = "block";
    document.getElementById("anchor").scrollIntoView({ behavior: "smooth" });
    sendModeration.classList.remove("active");
    return;
  }
  if (!isBottomFields) {
    document.getElementById("text-error2").style.display = "block";
    sendModeration.classList.remove("active");
    moneyOrder.classList.add("error");
    return;
  }

  sendModeration.classList.remove("active");
  thanks.classList.remove("hidden");
  //all values for ajax
  result.name = nameField.value;
  result.email = emailField.value;
  result.plus = plusField.value;
  result.minus = minusField.value;
  result.review = reviewField.value;
  result.cachbe = cachbe.value;
  result.yoomoney = yoomoney.value;
  result.qiwi = qiwi.value;
  result.visa = visa.value;
  console.log(result);

  thanksClose.addEventListener("click", () => {
    thanks.classList.add("hidden");

    //clean all instead of form.submit()
    allInputs.forEach((item) => {
      item.value = "";
    });
    allTextarea.forEach((item) => {
      item.value = "";
    });
    ratingsRadio.forEach((item) => {
      item.checked = false;
    });
  });
});

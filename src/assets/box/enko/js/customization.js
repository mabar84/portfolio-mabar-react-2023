const rangeSlider = document.getElementById("range-slider");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 99999999],
    connect: true,
    step: 1,
    range: {
      min: [0],
      max: [99999999],
    },
  });

  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);

    inputs[handle].value = inputs[handle].value.replace(/[A-Za-zА-Яа-яЁё]/, "");

    inputs[handle].value = inputs[handle].value.replace(
      /(\d)(?=(\d{3})+([^\d]|$))/g,
      "$1 "
    );
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

//Защита от ввода не цифр
function validate(evt) {
  let theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
  let str = "0";
  key = String.fromCharCode(key);
  str = key;
  console.log(str);
  let regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

const scroll = document.querySelector(".layouts-miniatures");
new SimpleBar(scroll);

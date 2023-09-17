fetch("./db/apartments.json")
  .then((response) => response.json())
  .then((data) => {
    renderCards(data);
  });

const renderCards = (data) => {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].rooms);
  }
};

//selection
const selectionForm = document.querySelector(".rooms .inputs");
const roomsLabels = selectionForm.querySelectorAll(".rooms .inputs .label");
const roomsCheckbox = selectionForm.querySelectorAll(
  ".rooms .inputs .checkbox-rooms"
);

roomsCheckbox.forEach((checkbox) => {
  checkbox.checked
    ? checkbox.nextElementSibling.classList.add("checked")
    : checkbox.nextElementSibling.classList.remove("checked");
});

selectionForm.addEventListener("click", (e) => {
  e.target.checked
    ? e.target.nextElementSibling.classList.add("checked")
    : e.target.nextElementSibling.classList.remove("checked");
});

//layouts
const layoutsForm = document.querySelector(".layouts-form");
const layoutsLabels = layoutsForm.querySelectorAll(
  ".layouts-form .layouts-inputs .label"
);
const layoutsCheckbox = layoutsForm.querySelectorAll(
  ".layouts-form .layouts-inputs .layouts-checkbox"
);
const layoutsMiniatures = layoutsForm.querySelectorAll(".card");
const bigcard = layoutsForm.querySelector(".bigcard");

if (layoutsMiniatures) {
  layoutsMiniatures[0].classList.add("active");
}

bigcard.innerHTML = `
<img src="img/miniature-34.png" alt="34">
<div class="bigcard-bottom">
  <div>
    <p>Проект123</p>
    <p>Никольский</p>
  </div>
  <div>
    <p>Площадь</p>
    <p>34,6 — 36,1 м²</p>
  </div>
  <div>
    <p>Этаж</p>
    <p>9</p>
  </div>
  <div>
    <p>Корпус</p>
    <p>ГП-5 с.3</p>
  </div>
  <div>
    <p>от 13 347 688 ₽</p>
    <p>от 62 641 ₽/мес.</p>
  </div>
</div>
`;

layoutsCheckbox.forEach((checkbox) => {
  checkbox.checked
    ? checkbox.nextElementSibling.classList.add("checked")
    : checkbox.nextElementSibling.classList.remove("checked");
});

layoutsForm.addEventListener("click", (e) => {
  e.target.checked
    ? e.target.nextElementSibling.classList.add("checked")
    : e.target.nextElementSibling.classList.remove("checked");

  if (e.target.closest(".card")) {
    layoutsMiniatures.forEach((card) => {
      card.classList.remove("active");
    });

    const cardActive = e.target.closest(".card");

    cardActive.classList.add("active");

    bigcard.innerHTML = `
      ${cardActive.firstElementChild.outerHTML}
      <div class="bigcard-bottom">
        <div>
          <p>Проект</p>
          <p>${cardActive.dataset.project}</p>
        </div>
        <div>
          <p>Площадь</p>
          <p>${cardActive.dataset.area} м²</p>
        </div>
        <div>
          <p>Этаж</p>
          <p>${cardActive.dataset.floor}</p>
        </div>
        <div>
          <p>Корпус</p>
          <p>${cardActive.dataset.housing}</p>
        </div>
        <div>
          <p>от ${cardActive.dataset.price} ₽</p>
          <p>от ${cardActive.dataset.monthly} ₽/мес.</p>
        </div>
      </div>
`;
  }
});

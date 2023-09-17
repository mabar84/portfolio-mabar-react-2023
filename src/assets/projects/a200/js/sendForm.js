const form = document.querySelector(".form-test-drive");
const formModal = document.querySelector(".modal__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let emptyField = false;
  let data = {};

  for (let { name, value } of form.elements) {
    if (name) {
      value = value.trim();
      data[name] = value;
      if (value == "") emptyField = true;
    }
  }
  if (emptyField) {
    alert("Заполнены не все поля формы!");
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        alert("Данные успешно сохранены");
        form.reset();
      })
      .catch((error) => {
        alert("Произошла ошибка, статус" + error.message);
      });
  }
});

formModal.addEventListener("submit", (event) => {
  event.preventDefault();

  let emptyField = false;
  let data = {};

  for (let { name, value } of formModal.elements) {
    if (name) {
      value = value.trim();
      data[name] = value;
      if (value == "") emptyField = true;
    }
  }
  if (emptyField) {
    alert("Заполнены не все поля формы!");
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        alert("Данные успешно сохранены");
        formModal.reset();
        modal.classList.add("hidden");
      })
      .catch((error) => {
        alert("Произошла ошибка, статус" + error.message);
      });
  }
});

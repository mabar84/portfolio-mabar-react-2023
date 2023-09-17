const lists = document.querySelectorAll(".feature-sub");
const buttons = document.querySelectorAll(".feature__link");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    buttons.forEach((btnItem, idx) => {
      if (btnItem === btn) {
        btnItem.classList.toggle("feature__link_active");
        lists[idx].classList.toggle("hidden");
      } else {
        btnItem.classList.remove("feature__link_active");
        lists[idx].classList.add("hidden");
      }
    });
  });
});

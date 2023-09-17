const modalButton = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");

for (let btn of modalButton) {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
}

modal.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target.classList.contains("modal__close") ||
    target.classList.contains("overlay")
  )
    modal.classList.add("hidden");
});

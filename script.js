"use script";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  // console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  // btnsOpenModal[i].addEventListener("click", function () {
  btnsOpenModal[i].addEventListener("click", openModal);
//   console.log("Button clicked");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");

// modal.style.display = "block"; // also we can write this method if we have one property in hidden class
// });

// btnCloseModal.addEventListener("click", function () {
btnCloseModal.addEventListener("click", closeModal);
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
overlay.addEventListener("click", closeModal);
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

document.addEventListener("keydown", function (e) {
  // console.log("A key was pressed");
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

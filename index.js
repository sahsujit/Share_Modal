
// const overlay = document.querySelector("#overlayactive");
// const modal = document.querySelector("#modalcardactive");
// const openBtn = document.querySelector("#openbtn");



// function openmodal(){
//     overlayactive.classList.add("active");
//     modal.classList.add("active");
// }
// function closemodal() {
//     overlayactive.classList.remove("active");
//      modal.classList.remove("active");
//  }

















const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
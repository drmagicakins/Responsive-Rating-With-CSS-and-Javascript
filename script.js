const numbers = document.querySelectorAll(".rating-container button");
const thankYouSection = document.querySelector(".container2");
const container = document.querySelector(".container");
const rating = document.querySelector(".rating-container");

const handleClick = (e) => {
  numbers.forEach((number) => {
    number.classList.remove("active");
  });
  e.target.classList.add("active");
};

numbers.forEach((number) => {
  number.addEventListener("click", handleClick);
});

// define eventListener for Submit buttom
// get the value of the selected rating
// display the thank you container2 and dynamically pass the value
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {
  //e.preventDefault(); // prevent form submission
  const selectedRating = document.querySelector(
    ".rating-container button.active"
  ).textContent;

  //alert(selectedRating);
  // set display to flex
  // set container display to none
  const thankYouSection = document.querySelector(".container2");
  const container = document.querySelector(".container");
  const thankYouText = document.querySelector(".thank-you-text");

  thankYouSection.style.display = "flex";
  container.style.display = "none";
  thankYouSection.style.color = "orange";

  thankYouText.textContent = `You selected ${selectedRating} out of 5`;
  return thankYouText;
});

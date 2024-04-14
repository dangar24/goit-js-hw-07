function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body")
const btnEl = document.querySelector(".change-color")
const spanEl = document.querySelector(".color")
const useRandomColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
btnEl.addEventListener("click", useRandomColor)
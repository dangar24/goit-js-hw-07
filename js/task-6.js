function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEL = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const fatherBox = document.querySelector("#boxes");
const childBox = document.createElement("div");
let inputResult = 0;


const giveValue = (event) => {
    const inputValue = event.target.value;
    if (inputValue >= 1 && inputValue <= 100) {
        inputResult = inputValue;
    } else {
        inputResult = 0;
    }
}
inputEL.addEventListener("input", giveValue);


function destroyBoxes() {
    childBox.innerHTML = "";
    fatherBox.innerHTML = "";
};
destroyBtn.addEventListener("click", destroyBoxes);


const createBoxes = (event) => {
    destroyBoxes();
    let step = 30;
    for (let i = 1; i <= inputResult; i += 1) {
        const createDiv = document.createElement("div");
        createDiv.style.width = `${step}px`;
        createDiv.style.height = `${step}px`;
        createDiv.style.backgroundColor = getRandomHexColor();
        step += 10;
        childBox.append(createDiv);
    };
    fatherBox.append(childBox);
    inputResult = 0;
    step = 30;
    inputEL.value = ""
};
createBtn.addEventListener("click", createBoxes);





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEL = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const fatherBox = document.querySelector("#boxes")
let step = 30;
let inputResult = 0;

const giveValue = (event) => {
    const inputValue = event.target.value;
    if (inputValue >= 1 && inputValue <= 100) {
        inputResult = inputValue;
    }
}
inputEL.addEventListener("input", giveValue);



const createBoxes = (amount) => {
    amount = inputResult;
    for (let i = 1; i <= amount; i += 1) {
        const createDiv = document.createElement(`div${i}`);
        createDiv.style.width = `${step}px`;
        createDiv.style.height = `${step}px`;
        createDiv.style.backgroundColor = getRandomHexColor();
        step += 10;
        fatherBox.append(createDiv);
    }    
    amount.currentTarget.reset();
};

createBtn.addEventListener("click", createBoxes);


function destroyBoxes() {
    fatherBox.innerHTML = "";
};
destroyBtn.addEventListener("click", destroyBoxes);


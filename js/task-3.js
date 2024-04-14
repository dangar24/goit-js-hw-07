const inputEL = document.querySelector("input");
const nameEL = document.querySelector("span");

const userName = (event) => {
    const result = event.target.value;
    const fixedResult = result.trim()
    if (fixedResult === "") {
        nameEL.textContent = "Anonymous"
    } else {
        nameEL.textContent = result; 
    }
}

inputEL.addEventListener("input", userName);

console.log("Number of categories:", categories.children.length);
const itemEl = document.querySelectorAll(".item");
itemEl.forEach(element => {
    const title = element.querySelector("h2");
    console.log("Category:", title.textContent);
    const list = element.querySelector("ul");
    console.log("Elements:", list.children.length)
});
const formEl = document.querySelector(".login-form")
const formSubmit = (event) => {
    event.preventDefault();
    const userEmail = event.currentTarget.elements.email.value;
    const userPsw = event.currentTarget.elements.password.value;
    const checkEmail = userEmail.trim();
    const checkPsw = userPsw.trim();
    if (checkEmail === "" || checkPsw === "") {
        alert("All form fields must be filled in");
    } 
    const userInfo = {
        email: checkEmail,
        password: checkPsw,
    }
    console.log("formSubmit ~ userInfo:", userInfo);

    event.currentTarget.reset();
}
formEl.addEventListener("submit", formSubmit)
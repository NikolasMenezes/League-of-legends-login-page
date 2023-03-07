const inputs = document.querySelectorAll(".input")
const loginBtn = document.querySelector("#login-button")

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span-active")
}

const handleFocusOut = ({ target }) => {
    if (target.value === "") {
        const span = target.previousElementSibling;
        span.classList.remove("span-active")
    }
}

// console.log(loginBtn.removeAttribute('disabled'))

const handleLogin = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >=8) {
        loginBtn.removeAttribute('disabled')
    } else {
        loginBtn.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener("focus", handleFocus))
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut))
inputs.forEach((input) => input.addEventListener("input", handleLogin))
const button = document.getElementById("button");
const form = document.querySelector(".form");
const email = document.getElementById("email");

function showError(input) {
  const formEmail = input.parentElement;
  formEmail.className = "form error";
}

function showSuccess(input) {
  const formEmail = input.parentElement;
  formEmail.classList.remove("error"); // Remove error class on success
  formEmail.classList.add("success");
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    alert("Email sent successfully!");
  } else {
    showError(input);
  }
}

// event listener
button.addEventListener("click", function (e) {
  e.preventDefault();
  checkEmail(email);
});

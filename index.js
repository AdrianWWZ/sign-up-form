const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");

const validatePassword = () => {
  if (password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("Passwords do not match");
    confirm_password.classList.add("error");
  } else {
    confirm_password.setCustomValidity("");
    if (confirm_password.classList.contains("error"))
      confirm_password.classList.remove("error");
  }
};

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

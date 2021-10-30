
//CHANGE ICON EYE
const changeIcon = document.querySelector("[data-password-button");
const showPassword = document.querySelector(".first");
const hidePassword = document.querySelector(".second");
const showPasswordConfirm = document.querySelector(".first-confirm");
const hidePasswordConfirm = document.querySelector(".second-confirm");
const passwordInput = document.getElementById("password");
const passwordInputConfirm = document.getElementById("password-confirm")

let passwordVisibility = false;

changeIcon.addEventListener('click', updateIcon);
showPassword.addEventListener('click', () => {
  passwordVisibility = false;
  passwordInput.type = "text";
  updateIcon();
});

hidePassword.addEventListener('click', () => {
  passwordVisibility = true;
  passwordInput.type = "password";
  updateIcon();
})

showPasswordConfirm.addEventListener('click', () => {
  passwordVisibility = false;
  passwordInputConfirm.type = "text";
  updateIconConfirm();
})
hidePasswordConfirm.addEventListener('click', () => {
  passwordVisibility = true;
  passwordInputConfirm.type = "password"
  updateIconConfirm();
})

function updateIcon() {
  showPassword.style.display = passwordVisibility ? "inline-block" : "none";
  hidePassword.style.display = passwordVisibility ? "none" : "inline-block";
}

function updateIconConfirm() {
  showPasswordConfirm.style.display = passwordVisibility ? "inline-block" : "none";
  hidePasswordConfirm.style.display = passwordVisibility ? "none" : "inline-block";
  
}

//FORM VALIDATION


import Controller from "./controller/controller.js";
import Model from "./model/model.js";
import SectionContainer from "./views/view/section-container.js";
// import validator from "validator";

// const inputEmail = document.querySelector('.input-field-email');
// const inputPassword = document.querySelector('.input-field-password');
// const inputConfirm = document.querySelector('.input-field-confirm');
// const errorMessageMail = document.querySelector('.feedback-message-email');
// const errorMessagePassword = document.querySelector('.feedback-message-password');
// const errorMessageConfirm = document.querySelector('.feedback-message-confirm');

// inputEmail.addEventListener('keyup', validateEmail);
// inputPassword.addEventListener('keyup', validatePassword);
// inputConfirm.addEventListener('keyup', confirmPassword);

// function validateEmail(e) {
//   let userInput = e.target.value;

//   if (!validator.isEmail(userInput)) {
//     errorMessageMail.classList.remove('visually-hidden');
//   } else {
//     errorMessageMail.classList.add('visually-hidden');
//   }
// }

// function validatePassword(e) {
//   let userInput = e.target.value;
//   if (!validator.isStrongPassword(userInput)) {
//     errorMessagePassword.classList.remove('visually-hidden');
//   } else {
//     errorMessagePassword.classList.add('visually-hidden');
//   }
// }

// function confirmPassword(e) {
//   if (inputPassword.value !== e.target.value) {
//     errorMessageConfirm.classList.remove('visually-hidden');
//   } else {
//     errorMessageConfirm.classList.add('visually-hidden');
//   }
// }



const mainBody = document.getElementById("root");

const appModel = new Model();
const appViewCoitainer = new SectionContainer();
const appController = new Controller(appModel, appViewCoitainer);

appController.renderPage(mainBody);

import { signUp, signIn, reset, resetConfirm, patients, emptyPatients } from "./routes/pages";

const routes = {
  "/": signUp,
  "/sign-in": signIn,
  "/reset": reset,
  "resetConfirm": resetConfirm,
  "/patients": patients,
  "/emptyPatients": emptyPatients
};

const mainBody = document.getElementById("root");
mainBody.innerHTML = routes[window.location.pathname];

function onPageChange(pagename) {
  window.history.pushState({}, pagename, window.location.origin + pathname);
  mainBody.innerHTML = routes[pagename];
};
document.onPageChange = onPageChange;
window.onpopstate = () => {
  mainBody.innerHTML = routes[window.location.pathname];
};
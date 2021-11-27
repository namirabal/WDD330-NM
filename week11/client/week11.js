import { makeRequest } from "./authHelpers.js";
import Auth from "./auth.js";
// makeRequest("login", "POST", {
//   password: "user1",
//   email: "user1@email.com",
// });

const auth = new Auth(); //esto crea una instancia
// auth.login();

const loginForm = document.getElementById('login');
loginForm.querySelector('button').addEventListener('click', () => {
  auth.login();
});

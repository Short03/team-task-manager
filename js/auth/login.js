// js/auth/login.js
import { loginUser } from "./authService.js";

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const result = loginUser(username, password);

  if (result.success) {
    alert(result.message);
    window.location.href = "index.html";
  } else {
    alert(result.message);
  }
});

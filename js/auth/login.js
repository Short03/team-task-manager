import { loginUser } from './authService.js';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("loginMessage");

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const result = loginUser(username, password);
    
    if (result.success) {
      message.style.color = "green";
      message.textContent = "Inicio de sesión exitoso. Redirigiendo...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      message.style.color = "red";
      message.textContent = result.message;
    }
  });
});

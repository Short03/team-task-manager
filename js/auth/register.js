import { registerUser } from "./authService.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const message = document.getElementById("registerMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const result = registerUser(username, password);

    message.classList.remove("hidden");
    if (result.success) {
      message.className = "mt-4 text-sm text-green-600 text-center";
      message.textContent = result.message;

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    } else {
      message.className = "mt-4 text-sm text-red-600 text-center";
      message.textContent = result.message;
    }
  });
});

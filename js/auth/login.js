import { loginUser } from './authService.js';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("loginMessage");
  const desktopToggleBtn = document.getElementById('product-desktop-button');
  const desktopSubMenu = document.getElementById('product-desktop-menu');

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

 if (desktopToggleBtn && desktopSubMenu) {
      desktopToggleBtn.addEventListener('click', () => {
        const isExpanded = desktopToggleBtn.getAttribute('aria-expanded') === 'true';
        desktopToggleBtn.setAttribute('aria-expanded', String(!isExpanded));
        desktopSubMenu.classList.toggle('hidden');
      });
    }



});

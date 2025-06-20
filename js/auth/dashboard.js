import { getCurrentUser, logoutUser } from './authService.js';

document.addEventListener("DOMContentLoaded", () => {
  const user = getCurrentUser();

  if (!user) {
    alert("Debes iniciar sesión para acceder al dashboard.");
    window.location.href = "login.html";
    return;
  }

  // Mostrar saludo personalizado
  const welcome = document.getElementById("welcome");
  welcome.textContent = `Bienvenido, ${user.username}!`;

  // Cerrar sesión
  document.getElementById("logout").addEventListener("click", () => {
    logoutUser();
    window.location.href = "login.html";
  });
});

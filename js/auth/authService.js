// js/auth/authService.js

export function registerUser(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    return { success: false, message: "El usuario ya existe" };
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true, message: "Registro exitoso" };
}

export function loginUser(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) return { success: false, message: "Credenciales inválidas" };

  localStorage.setItem("currentUser", JSON.stringify(user));
  return { success: true, message: "Login exitoso" };
}

export function logoutUser() {
  localStorage.removeItem("currentUser");
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

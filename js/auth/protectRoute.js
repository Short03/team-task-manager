import { getCurrentUser } from './authService.js';

document.addEventListener("DOMContentLoades", () =>{
    const user = getCurrentUser();

    if (!user){
        alert("Debes iniciar sesion para acceder.")
        window.location.herf = "login.html"
    }
} );
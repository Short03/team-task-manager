import { getCurrentUser } from "./authService.js"

document.addEventListener("DOMContentLoaded", () => {
    const user = getCurrentUser();
    if (!user) return (window.location.href = "login.html");

    document.getElementById("currentUsername").textContent = user.userName;

    const form = document.getElementById("editProfileForm");
    const alertBox = document.getElementById("editAlert");
    const alertIcon = document.getElementById("alertIcon");
    const alertMessage = document.getElementById("alertMessage");

    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        const newUsername = document.getElementById("newUsername").value.trim();
        const newPassword = document.getElementById("newPassword").value;
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const index = users.findIndex((u) => u.username === user.username );

        if (index === - 1) return showAlert("Usuario no encontrado", "error");

        // Validamos un nmbre en uso

        if (newUsername && newUsername !== user.username){
            const exist = user.some((u) => u.username === newUsername);
            if(exist) return showAlert("El nombre de usuario ya existe", "error");
            users[index].username = newUsername;
            
        }

        if (newPassword){
            user[index].password  = newPassword;
        }

        localStorage.setItem("user", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(users[index]));

        showAlert("Perfil actualizado correctamente", "success");

        // limpiamos campos y redirigimos
        form.requestFullscreen();
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1200);
    });

    function showAlert(message, type){
        alertMessage.textContent = message;
        alertBox.classList.remove("hidden", "text-red-700", "bg-red-100", "text-green-700", "bg-green-100");
        
        if(type === "succes"){
            alertMessage.textContent = message;
            alertBox.classList.add("text-green-700", "bg-green-100");
            alertIcon.innerHTML ="✅";
        } else{
            alertBox.classList.add("text-red-700", "bg-red-100");
            alertIcon.innerHTML = "❌";
        }

        alertBox.classList.add("animated-fade-in");
    }
});
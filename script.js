document.addEventListener("DOMContentLoaded", function() {
    const cookieNotification = document.getElementById("cookie-notification");
    const acceptCookie = document.getElementById("accept-cookie");

    // Verifica se o cookie de aceitação já foi definido
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieNotification.style.display = "block"; // Alterado para "block"
    }

    acceptCookie.addEventListener("click", function() {
        // Define um cookie de aceitação com validade de 30 dias
        const now = new Date();
        now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000);
        document.cookie = "cookiesAccepted=true; expires=" + now.toUTCString() + "; path=/";

        cookieNotification.style.display = "none";
    });
});

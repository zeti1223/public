document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "D3c23admin") {
        localStorage.setItem("loggedInUser", "admin");
        window.location.href = "Admin/index.html";
    } else if (username === "zalan" && password === "ZaxZax") {
        localStorage.setItem("loggedInUser", "zalan");
        window.location.href = "Users/zalan.html";
    } else if (username === "zsoltbotyanszki" && password === "19810105") {
        localStorage.setItem("loggedInUser", "zsoltbotyanszki");
        window.location.href = "Users/Bozso.html";
    } else if (username === "NimY" && password === "NimYvok111") {
        localStorage.setItem("loggedInUser", "nimrod");
        window.location.href = "Users/nimrod.html";
    } else if (username === "New" && password === "New") {
        localStorage.setItem("loggedInUser", "new");
        window.location.href = "New-web/index.html";
    } else {
        errorMessage.textContent = "Hibás felhasználónév vagy jelszó.";
    }
});

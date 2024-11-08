function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
        // Redirect to the currency converter 
        window.location.href = "currency_convertor.html";
    } else {
        message.textContent = "Login failed! Please check your credentials.";
        message.style.color = "red"; 
        // alert("Login failed! Please check your credentials.");
    }
}
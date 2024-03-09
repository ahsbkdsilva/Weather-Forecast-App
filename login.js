document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === "Sasini" && password === "nanosoft") {

        window.location.href = "index.html";
    } else {
        
        document.getElementById("login-error").innerText = "Invalid username or password.";
    }
});

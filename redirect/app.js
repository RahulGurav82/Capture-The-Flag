document.querySelector("#submit").addEventListener("click", () => {
    let pass = document.querySelector("#input").value;
    if (pass === "HACKED" || pass === "Hacked" || pass === "hacked") {
        Swal.fire({
            title: "Congratulations! The last flag is below. Now scan this:",
            text: "103.14.99.119",
            icon: "success", // You can use 'info', 'warning', or 'error' too
            confirmButtonText: "Got it!",
            background: "#1a1a1a", // Optional: Dark theme
            color: "#fff", // Text color
        });
    } else {
        Swal.fire({
            title: "Wrong Password",
            text: "Please try again.",
            icon: "error", // Error icon for incorrect password
            confirmButtonText: "Retry",
            background: "#1d1f20", // Dark background
            color: "#fff", // Light text color
            confirmButtonColor: "#e63946", // Red button color
        });
    }
    
});


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("No Cheating....!");
});
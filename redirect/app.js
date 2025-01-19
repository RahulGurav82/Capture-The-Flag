document.querySelector("#submit").addEventListener("click", () => {
    let pass = document.querySelector("#input").value;
    if (pass === "india" || pass === "Russia" || pass === "America") {
        Swal.fire({
            title: "Congratulations!",
            text: "103.14.99.119",
            icon: "success", // You can use 'info', 'warning', or 'error' too
            confirmButtonText: "Got it!",
            background: "#1a1a1a", // Optional: Dark theme
            color: "#fff", // Text color
        });
    } else {
        alert("Wrong Password..")
    }
});


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("No Cheating....!");
});
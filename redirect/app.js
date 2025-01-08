document.querySelector("#submit").addEventListener("click", () => {
    let pass = document.querySelector("#input").value;
    if (pass === "HACKED") {
        Swal.fire({
            title: "Congratulations!",
            text: "Next Hint Is Click On Skull Head..",
            icon: "success", // You can use 'info', 'warning', or 'error' too
            confirmButtonText: "Got it!",
            background: "#1a1a1a", // Optional: Dark theme
            color: "#fff", // Text color
        });
    }
});


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("No Cheating....!");
});
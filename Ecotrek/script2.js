const bookingButtons = document.querySelectorAll(".card-btn");

bookingButtons.forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
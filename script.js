document.addEventListener("DOMContentLoaded", () => {
    // Handle Venue Image Click
    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        slide.addEventListener("click", () => {
            const popup = slide.querySelector(".info-popup");
            const isVisible = popup.style.display === "block";
            popup.style.display = isVisible ? "none" : "block";
        });
    });

    // Confirmation Dialog for Booking Page
    const bookingForm = document.querySelector("form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission for demo
            const confirmation = confirm("Are you sure you want to proceed with the booking?");
            if (confirmation) {
                alert("Booking confirmed! Redirecting to payment...");
                // Add actual submission logic here if needed
            }
        });
    }
});

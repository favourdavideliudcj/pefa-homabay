
// MOBILE NAVIGATION
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const response = document.getElementById("response");

    if (name === "" || email === "" || message === "") {
        response.style.color = "red";
        response.textContent = "Please fill in all fields.";
        return;
    }

    response.style.color = "green";
    response.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();
});

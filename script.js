// Mobile menu toggle
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Newsletter form submission
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for subscribing!");
  this.reset();
});

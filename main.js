// main.js for Ozark Elite Contractors Demo Site
// Placeholder for interactive features (e.g., form validation, gallery, etc.)

document.addEventListener("DOMContentLoaded", function () {
  // Enhanced form validation and feedback for contact form
  var form = document.querySelector("form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      if (!name.value.trim() || !email.value.trim()) {
        status.textContent = "Please fill in your name and email.";
        status.style.color = "#ff6a3d";
        e.preventDefault();
        name.focus();
        return;
      }
      // Simulate success for demo (no backend)
      e.preventDefault();
      status.textContent = "Thank you! Your request has been received.";
      status.style.color = "#1a2238";
      form.reset();
    });
  }
});

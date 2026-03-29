// main.js for Ozark Elite Contractors
// Premium interactivity and scroll animations

document.addEventListener("DOMContentLoaded", function () {
  // --- Intersection Observer for Scroll Reveals ---
  const reveals = document.querySelectorAll(".reveal");

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, revealOptions);

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });

  // --- Hero Parallax Effect ---
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    window.addEventListener("scroll", () => {
      const scrollValue = window.scrollY;
      heroBg.style.backgroundPositionY = `${scrollValue * 0.5}px`;
    });
  }

  // --- Enhanced Form Handling ---
  const form = document.querySelector("form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      
      if (!name || !email) {
        status.textContent = "Please provide both your name and email address.";
        status.style.color = "#ef4444"; // Error red
        return;
      }

      // Simulate a premium loading state
      const submitBtn = form.querySelector("button");
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = "Sending Request...";
      submitBtn.disabled = true;

      setTimeout(() => {
        status.textContent = "Thank you, " + name + ". Your request has been sent to Mike Harrison. We will contact you within 24 hours.";
        status.style.color = "#f59e0b"; // Accent gold
        form.reset();
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        
        // Scroll to status
        status.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 1500);
    });
  }
});

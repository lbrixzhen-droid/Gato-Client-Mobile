
// PINOY CLIENT MOBILE
// Dashboard interface — live Android integration is not connected yet.

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  function updateNavigation() {
    const currentSection = window.location.hash || "#dashboard";

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === currentSection
      );
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", updateNavigation);
  });

  window.addEventListener("hashchange", updateNavigation);

  updateNavigation();

  console.log("PINOY CLIENT dashboard initialized.");
  console.log("Mode: Static dashboard");
  console.log("Relay integration: Not connected");
});


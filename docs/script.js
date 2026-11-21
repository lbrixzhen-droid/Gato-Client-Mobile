// ==========================================
// PINOY CLIENT MOBILE
// Dashboard Interface
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");

  // SIDEBAR NAVIGATION
  function updateNavigation() {
    const currentSection = window.location.hash || "#dashboard";

    navLinks.forEach(link => {
      const isActive =
        link.getAttribute("href") === currentSection;

      link.classList.toggle("active", isActive);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("href");

      if (target && target.startsWith("#")) {
        history.replaceState(null, "", target);
        updateNavigation();
      }
    });
  });

  window.addEventListener("hashchange", updateNavigation);

  // SECTION NAVIGATION
  sections.forEach(section => {
    section.addEventListener("click", () => {
      const id = section.getAttribute("id");

      if (id) {
        updateNavigation();
      }
    });
  });

  // INITIALIZE DASHBOARD
  updateNavigation();

  console.log("================================");
  console.log("       PINOY CLIENT MOBILE      ");
  console.log("================================");
  console.log("Dashboard: Initialized");
  console.log("Navigation: Ready");
  console.log("Minecraft panel: Ready");
  console.log("Destination: play.lbsg.net");
  console.log("Bedrock port: 19132");
  console.log("Android integration: Pending");
  console.log("Account status: Not connected");
  console.log("================================");
});

// Smooth Scroll for Navigation Links with Active Link Highlighting
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Smooth Scroll to the Target Section
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth",
    });

    // Update Active Class for Links
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Highlight Active Navigation Link on Scroll
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  document.querySelectorAll(".nav-links a").forEach((anchor) => {
    let currentSection = document.querySelector(anchor.getAttribute("href"));

    // Adjust for an offset if you have a fixed header
    let sectionTop = currentSection.offsetTop - 50;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + currentSection.offsetHeight
    ) {
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
      });
      anchor.classList.add("active");
    }
  });
});

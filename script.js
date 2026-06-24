// Simple animation for sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, i) => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(30px)";
    setTimeout(() => {
      sec.style.transition = "all 0.8s ease";
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }, i * 400);
  });
});

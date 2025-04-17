const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("timeline__entry--transition");
      observer.unobserve(entry.target);
    }
  });
});

const animationItems = document.querySelectorAll(".timeline__entry");

animationItems.forEach((item) => {
  observer.observe(item);
});
document.addEventListener("DOMContentLoaded", () => {
  const skillCircles = document.querySelectorAll(".skills .circle");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Add the 'active' class
        } else {
          entry.target.classList.remove("active"); // Remove it when out of view
        }
      });
    },
    { threshold: 0.5 } // Adjust threshold if needed
  );

  skillCircles.forEach((circle) => observer.observe(circle));
});

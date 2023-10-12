const sections = document.querySelectorAll("section");

document.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const scrolled = document.documentElement.scrollTop;
    const { top, height } = section.getBoundingClientRect();
    if (scrolled >= top + height) {
      const sectionId = section.getAttribute("id");
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        if (link.getAttribute("href").includes(sectionId)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
});

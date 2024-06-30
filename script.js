menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});


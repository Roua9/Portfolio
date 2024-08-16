var typed = new Typed(".text", {
  strings: ["Full Stack Developer", "Web Developer", "IT ENGINEERING"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
})
const currentYear = new Date().getFullYear()
document.getElementById("year").textContent = currentYear

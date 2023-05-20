let hamburger = document.getElementById("hamburger");
let navbarMenu = document.getElementById("hamburger-menu");
let cross = document.getElementById("cross");

hamburger.addEventListener("click", () => {
  navbarMenu.classList.add("active");
  navbarMenu.classList.toggle("ds");
  navbarMenu.classList.add("anim");
  cross.classList.toggle("none");
  hamburger.classList.toggle("none");
});

cross.addEventListener("click", async function () {
  navbarMenu.classList.toggle("ds");
  navbarMenu.classList.add("anim1");
  
  await new Promise((resolve) => setTimeout(resolve, 200));
  navbarMenu.classList.remove("active");
  cross.classList.toggle("none");
  hamburger.classList.toggle("none");
  navbarMenu.classList.remove("anim1");
});

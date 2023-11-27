let clound1 = document.getElementById("cloud1");
let clound2 = document.getElementById("cloud2");
let clound3 = document.getElementById("cloud3");
let moon = document.getElementById("moon");
let hill = document.getElementById("hill");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  clound1.style.left = value * 1.5 + "px";
  clound2.style.right = value * 1.5 + "px";
  clound3.style.left = value * 1.5 + "px";

  clound1.style.top = value * -1.5 + "px";
  clound2.style.top = value * -1.5 + "px";
  clound3.style.top = value * -1.5 + "px";
  moon.style.top = value * 1.5 + "px";
});

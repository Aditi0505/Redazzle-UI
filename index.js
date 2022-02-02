const btn_toggle = document.querySelector("#toggle");
const btn_off = document.querySelector(".fa-toggle-off");

handleClick = () => {
  btn_toggle.classList.contains("fa-toggle-off")
    ? handleDarkMode()
    : handleLightMode();
};

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    handleDarkMode();
  } else {
    handleLightMode();
  }
});
handleDarkMode = () => {
  btn_off.classList.remove("fa-toggle-off");
  btn_off.classList.add("fa-toggle-on");
  document.body.classList.toggle("dark-mode");
  const logo = document.querySelector(".logo-img");
  logo.src = "/images/dark.svg";
  const landingHero = document.querySelector(".hero");
  if (landingHero !== null) landingHero.src = "/images/dark_mode.svg";
  localStorage.setItem("theme", "dark");
};
handleLightMode = () => {
  btn_off.classList.remove("fa-toggle-on");
  btn_off.classList.add("fa-toggle-off");
  document.body.classList.remove("dark-mode");
  document.body.classList.toggle("light-mode");
  const logo = document.querySelector(".logo-img");
  logo.src = "/images/REDAZZLE.svg";
  const landingHero = document.querySelector(".hero");
  if (landingHero !== null) landingHero.src = "/images/landing page.svg";
  localStorage.setItem("theme", "light");
};

btn_toggle.addEventListener("click", handleClick);

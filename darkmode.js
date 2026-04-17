let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.removeItem("darkmode");
};

// default = LIGHT MODE
if (darkmode === "active") {
  enableDarkmode();
}

// condition
themeSwitch.addEventListener("click", () => {
  document.body.classList.contains("darkmode")
    ? disableDarkmode()
    : enableDarkmode();
});

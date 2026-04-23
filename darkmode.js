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

// System preference detection (optional)
if (
  !darkmode &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  enableDarkmode();
}

// Listen for system theme changes
if (window.matchMedia) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("darkmode")) {
        if (e.matches) {
          enableDarkmode();
        } else {
          disableDarkmode();
        }
      }
    });
}

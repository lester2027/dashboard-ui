function toggleMenu(element) {
  const submenu = element.nextElementSibling;
  const arrow = element.querySelector(".arrow");

  submenu.classList.toggle("show");
  arrow.classList.toggle("rotate");
}

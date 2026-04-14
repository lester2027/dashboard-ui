// Submenu for the menu of sidebar //
function toggleMenu(element) {
  const submenu = element.nextElementSibling;
  const arrow = element.querySelector(".arrow");

  submenu.classList.toggle("show");
  arrow.classList.toggle("rotate");
}

// sidebar active //
$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});

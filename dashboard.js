// Submenu toggle for the sidebar menu
function toggleMenu(element) {
  const submenu = element.nextElementSibling;
  const arrow = element.querySelector(".arrow");

  submenu.classList.toggle("show");
  arrow.classList.toggle("rotate");
}

// Sidebar toggle (collapse/expand)
$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});

// Close submenu when clicking on a submenu item
$(".submenu li").click(function () {
  $(this).closest(".submenu").removeClass("show");
  $(this).closest(".menu-item").find(".arrow").removeClass("rotate");
});

// Search functionality (optional)
$("#search").on("keyup", function () {
  const searchTerm = $(this).val().toLowerCase();
  $(".menu-link").each(function () {
    const text = $(this).find("a").text().toLowerCase();
    if (text.includes(searchTerm)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

// Add keyboard navigation
$(document).on("keydown", function (e) {
  // ESC key to collapse sidebar
  if (e.key === "Escape") {
    if ($(".sidebar").hasClass("active")) {
      $(".sidebar").removeClass("active");
    }
  }
});

// Responsive sidebar toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  if (menuToggle && sidebar && overlay) {
    const open = () => {
      sidebar.classList.add("open");
      overlay.classList.add("show");
    };

    const close = () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    };

    menuToggle.addEventListener("click", open);
    overlay.addEventListener("click", close);

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }
});

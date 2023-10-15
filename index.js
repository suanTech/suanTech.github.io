const handleMenuClick = () => {
  const menuItems = document.querySelectorAll(".mobile-menu li");
  const hamburgerMenu = document.getElementById("hamburger-toggle");
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      hamburgerMenu.checked = false;
    })
  })
}
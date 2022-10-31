const toggleMenu = document.getElementById("toggle-menu");

// function to toggle menu on small screens
function showHide() {
    let menu = toggleMenu.classList.contains("hide");

    if (menu === true) {
        toggleMenu.classList.remove("hide");
    } else {
      toggleMenu.classList.add("hide");
    }
};
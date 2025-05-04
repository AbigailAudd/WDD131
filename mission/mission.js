const themeSelector = document.querySelector("#themeSelector");
const body = document.body;
const logo = document.querySelector("#logo");

function changeTheme() {
  if (themeSelector.value === "dark") {
    body.classList.add("dark");
    logo.setAttribute("src", "byui-logo-white.png");
  } else {
    body.classList.remove("dark");
    logo.setAttribute("src", "byui-logo-blue.webp");
  }
}

themeSelector.addEventListener("change", changeTheme);

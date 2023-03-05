let darkMode = false;

function toggleTheme() {
  const body = document.querySelector("body");
  if (darkMode) {
    body.setAttribute("data-bs-theme", "light");
    darkMode = false;
  } else {
    body.setAttribute("data-bs-theme", "dark");
    darkMode = true;
  }
}
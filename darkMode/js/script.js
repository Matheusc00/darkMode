const chageThemeBtn = document.querySelector("#change-theme")

// Togle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadtheme() {
    const darkMode = localStorage.getItem("dark")

    if(darkMode) {
        toggleDarkMode();
    }
}
loadtheme()

chageThemeBtn.addEventListener("change",function(){
    toggleDarkMode();

    // Save or remove dark mode
localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark",1);
    }
});
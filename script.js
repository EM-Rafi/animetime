document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const logo = document.getElementById("logo");

    // Function to update the logo based on theme
    function updateLogo() {
        if (body.classList.contains("light-mode")) {
            logo.src = "light logo.png";  // Light mode logo
        } else {
            logo.src = "dark logo.png";  // Dark mode logo
        }
    }

    // Check and apply saved theme on page load
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    } else {
        body.classList.remove("light-mode");  // Ensure default is dark mode
    }

    // Update the logo when the page loads
    updateLogo();

    // Toggle theme on button click
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // Save the user's theme preference in localStorage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

        // Update the logo when the theme is toggled
        updateLogo();
    });
});

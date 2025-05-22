document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".sidebar").classList.toggle("sidebarGo");
    });
});

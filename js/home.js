document.addEventListener("DOMContentLoaded", function () {
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const openSearch = document.getElementById("openSearch");
    const closeSearch = document.getElementById("closeSearch");
    const searchOverlay = document.getElementById("searchOverlay");

    // Mostrar menú lateral
    openMenu.addEventListener("click", () => {
        menuOverlay.classList.add("active");
    });

    // Cerrar menú lateral
    closeMenu.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });

    // Mostrar modal de búsqueda
    openSearch.addEventListener("click", () => {
        searchOverlay.classList.add("active");
    });

    // Cerrar modal de búsqueda
    closeSearch.addEventListener("click", () => {
        searchOverlay.classList.remove("active");
    });
});

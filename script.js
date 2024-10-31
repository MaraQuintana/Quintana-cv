newFunction();

function newFunction() {
    document.addEventListener("DOMContentLoaded", function () {
        const customCursor = document.querySelector(".cursor");

        document.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;

            customCursor.style.left = (x + 15) + "px";
            customCursor.style.top = (y + 15) + "px";
        });
        document.addEventListener("mouseenter", () => {
            customCursor.style.display = "block";
        });

        document.addEventListener("mouseleave", () => {
            customCursor.style.display = "none";
        });
    });
}

/* galeria ampliada */

let scrollPosition = 0;

function mostrarGaleria() {
    scrollPosition = window.scrollY; // Guarda la posición actual
    document.getElementById("galeria").style.display = "flex";
}

function ocultarGaleria() {
    document.getElementById("galeria").style.display = "none";
    window.scrollTo(0, scrollPosition); // Restaura la posición guardada
}
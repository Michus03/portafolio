// ================== SCROLL MENU ACTIVO ==================
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// ================== FILTRO PORTAFOLIO ==================
function filtrar(categoria) {
    const items = document.querySelectorAll('.mosaico .item');

    items.forEach(item => {
        // Preparar transición
        item.style.transition = "opacity 0.3s, transform 0.3s";

        if (categoria === 'all') {
            item.style.display = 'block';
            setTimeout(() => item.style.opacity = 1, 10);
        } else {
            if (item.classList.contains(categoria)) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = 1, 10);
            } else {
                item.style.opacity = 0;
                setTimeout(() => item.style.display = 'none', 300);
            }
        }
    });
}
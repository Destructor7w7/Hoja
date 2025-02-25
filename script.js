document.addEventListener('DOMContentLoaded', () => {
    const portfolioBtn = document.getElementById('portfolio-btn');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');

    // Modo Oscuro
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // GSAP Animaciones
    gsap.from(header, {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    sections.forEach((section, index) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Inicia la animación cuando la parte superior de la sección llega al 80% de la ventana
                // markers: true // Para ver los marcadores de ScrollTrigger durante el desarrollo
            },
            duration: 1,
            x: index % 2 === 0 ? -100 : 100, // Alterna la dirección de entrada para secciones pares e impares
            opacity: 0,
            ease: "power2.out"
        });
    });

    portfolioBtn.addEventListener('click', () => {
        window.location.href = "https://drive.google.com/drive/folders/1Y9Io6GR7WmlTevQ3HO_5p-xsWTW7YZZ6?usp=sharing";
    });
});

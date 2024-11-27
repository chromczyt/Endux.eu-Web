document.addEventListener('DOMContentLoaded', function() {
    // Skrytí loaderu a zobrazení obsahu po načtení stránky
    const loader = document.getElementById('loader');
    const mainContent = document.querySelector('main');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    window.addEventListener('load', function() {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto'; // Obnovíme přetečení obsahu po načtení stránky
    });
});
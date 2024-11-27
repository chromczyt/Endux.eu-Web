// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Skrytí loaderu a zobrazení obsahu po načtení stránky
    const loader = document.getElementById('loader');
    const mainContent = document.querySelector('main');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const packageSelector = document.querySelector('.package-selector');
    
    window.addEventListener('load', function() {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto'; // Obnovíme přetečení obsahu po načtení stránky
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const scrollThresholdFooter = document.documentElement.scrollHeight * 0.90;
        const scrollThresholdHeader = document.documentElement.scrollHeight * 0.10;
        
        if (scrollPosition >= scrollThresholdFooter) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
        
        if (window.scrollY >= scrollThresholdHeader) {
            header.classList.add('hide');
            packageSelector.classList.add('fixed');
        } else {
            header.classList.remove('hide');
            packageSelector.classList.remove('fixed');
        }
    });

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Přesměrování na stránku nákupu.');
            // Zde by mělo být skutečné přesměrování
            // window.location.href = 'nákup.html';
        });
    });
});

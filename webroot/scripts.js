// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Skrytí loaderu a zobrazení obsahu po načtení stránky
    const loader = document.getElementById('loader');
    const mainContent = document.querySelector('main');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
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
        } else {
            header.classList.remove('hide');
        }
    });

    const infoIcons = document.querySelectorAll('.info-icon');
    infoIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const plan = this.closest('.plan');
            const details = plan.querySelector('.plan-details');
            plan.classList.toggle('expanded');
            if (plan.classList.contains('expanded')) {
                this.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                this.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });

    const moreButtons = document.querySelectorAll('.more-button button');
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = '/packages/discord/index.html';
        });
    });

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = '/packages/discord/index.html';
        });
    });
});

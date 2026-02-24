document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navOverlay = document.getElementById('nav-overlay');
    const menuLinks = document.querySelectorAll('.nav-links a');
    
    const openContact = document.getElementById('open-contact');
    const contactSection = document.getElementById('contact-form-section');
    const contactForm = document.getElementById('contact-form');
    const onderwerpSelect = document.getElementById('onderwerp');
    const vraagGroup = document.getElementById('vraag-group');
    const submitBtn = document.getElementById('submit-btn');

    // 1. Hamburger Menu + Scroll Lock
    if (hamburger && navOverlay) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navOverlay.classList.toggle('active');

            // Hiermee blokkeren we het scrollen op de achtergrond
            if (navOverlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 2. Sluit menu bij klik (en zet scrollen weer aan)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navOverlay.classList.remove('active');
            // Zorg dat de gebruiker weer kan scrollen na een klik
            document.body.style.overflow = 'auto';
        });
    });

    // 3. Formulier openen
    if (openContact && contactSection) {
        openContact.addEventListener('click', () => {
            contactSection.style.display = 'block';
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 4. Trapsgewijs formulier
    if (onderwerpSelect) {
        onderwerpSelect.addEventListener('change', () => {
            if (onderwerpSelect.value !== "") {
                if (vraagGroup) vraagGroup.style.display = 'block';
                if (submitBtn) submitBtn.style.display = 'inline-block';
            }
        });
    }

    // 5. Hash check
    if (window.location.hash === '#open-contact' && contactSection) {
        contactSection.style.display = 'block';
        setTimeout(() => {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
});
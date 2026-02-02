document.addEventListener('DOMContentLoaded', () => {
  // DOM-elementen ophalen
  const openContact = document.getElementById('open-contact');
  const contactSection = document.getElementById('contact-form-section');
  const contactSuccess = document.getElementById('contact-success');
  const contactForm = document.getElementById('contact-form');
  const onderwerpSelect = document.getElementById('onderwerp');
  const vraagGroup = document.getElementById('vraag-group');
  const vraagTextarea = document.getElementById('vraag');
  const submitBtn = document.getElementById('submit-btn');
  const formGroups = document.querySelectorAll('.form-group');

  // 🔴 Controleer of alle benodigde elementen bestaan
  if (!openContact) {
    console.error('Element #open-contact niet gevonden');
    return;
  }
  if (!contactSection) {
    console.error('Element #contact-form-section niet gevonden');
    return;
  }
  if (!contactForm) {
    console.error('Element #contact-form niet gevonden');
    return;
  }
  if (!onderwerpSelect) {
    console.error('Element #onderwerp niet gevonden');
    return;
  }
  if (!vraagGroup) {
    console.error('Element #vraag-group niet gevonden');
    return;
  }
  if (!vraagTextarea) {
    console.error('Element #vraag niet gevonden');
    return;
  }
  if (!submitBtn) {
    console.error('Element #submit-btn niet gevonden');
    return;
  }

  // ✅ Alle elementen gevonden — voeg eventlisteners toe

  // Open formulier
  openContact.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.style.display = 'block';
    contactSuccess.style.display = 'none';
    window.scrollTo({
      top: contactSection.offsetTop - 100,
      behavior: 'smooth'
    });
  });

  // Toon vraagveld bij keuze
  onderwerpSelect.addEventListener('change', () => {
    if (onderwerpSelect.value) {
      vraagGroup.style.display = 'block';
    } else {
      vraagGroup.style.display = 'none';
      submitBtn.style.display = 'none';
    }
  });

  // Toon "Verzenden" pas als vraag ingevuld is
  vraagTextarea.addEventListener('input', () => {
    if (vraagTextarea.value.trim()) {
      submitBtn.style.display = 'block';
    } else {
      submitBtn.style.display = 'none';
    }
  });

  // Formulier versturen
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Valideer naam en email
    formGroups.forEach(group => {
      const input = group.querySelector('input, select');
      const error = group.querySelector('.error-message');

      if (!input || !input.value.trim()) {
        group.classList.add('invalid');
        isValid = false;
      } else {
        group.classList.remove('invalid');
      }
    });

    // Valideer vraag
    if (!vraagTextarea.value.trim()) {
      vraagGroup.classList.add('invalid');
      isValid = false;
    } else {
      vraagGroup.classList.remove('invalid');
    }

    if (isValid) {
      contactSection.style.display = 'none';
      contactSuccess.style.display = 'block';
      contactForm.reset();
      submitBtn.style.display = 'none';
      vraagGroup.style.display = 'none';

      window.scrollTo({
        top: contactSuccess.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

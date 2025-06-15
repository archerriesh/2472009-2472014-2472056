const contactForm = document.querySelector('.contact-section form');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert("Isi semua bidang terlebih dahulu ya!");
      return;
    }

    if (confirm('Halo! Sudah siap mengirim pesan?')) {
      alert("Pesan kamu sudah dikirim! Terima kasih!");
      contactForm.reset();
    }
  });
}
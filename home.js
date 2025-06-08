document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });

    const contactForm = document.querySelector('footer form');
    contactForm.addEventListener('submit', e => {
      e.preventDefault(); 
      if(confirm('Halo!Sudah siap mengirim pesan?')) {
        alert("pesan kamu sudah dikirim!Terima kasih-!");
        contactForm.reset();
      }
    });
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });

const contactForm = document.querySelector('footer form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault(); 
    if(confirm('Halo! Sudah siap mengirim pesan?')) {
      alert("Pesan kamu sudah dikirim! Terima kasih!");
      contactForm.reset();
    }
  });
};

fetch("makanan.json")
  .then((res) => res.json())
  .then((reks) => {
  const container = document.querySelector(".carousel-track");
  let htmlContent = "";

  for (let i = 0; i < reks.length; i++) {
    const item = reks[i]; 
    htmlContent += `
      <div class="isi">
        <div class="dalem">
          <div class="kontrol-gambar">
            <div class="gambar">
              <img src="${item.pic}" alt="${item.nama}" />
            </div>
          </div>
          <div class="konten-teks">
            <div class="keterangan">
              <h2 class="judul">${item.nama}</h2>
              <h4 class="punch">${item.punch}</h4>
              <p class="deskripsi">${item.deskripsi}</p>
              <p class="bahan">${item.nama} dimasak sepenuh hati dengan ${item.bahan_utama.join(", ")}.</p>
              <p class="harga">Umumnya, ${item.nama} bisa didapat di kisaran ${item.range_harga}!</p>
            </div>
            <h4 class="kata-orang">Kata orang sih... ${item.nama} tuh,</h4>
            <div class="review">
              <div class="reviews">
                ${item.review.map(r => `
                  <div class="review-bubble">
                    <em>${r}</em>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

    container.innerHTML = htmlContent;
});
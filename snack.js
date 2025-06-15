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

fetch("snack.json")
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
        <button class="carousel-btn up"><i class="fas fa-chevron-up"></i></button>
        <div class="gambar">
          <img src="${item.pic}" alt="${item.nama}" />
        </div>
        <button class="carousel-btn down"><i class="fas fa-chevron-down"></i></button>
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

const items = container.querySelectorAll(".isi");
const totalItems = items.length;
let currentIndex = 0;

container.style.height = `${100 * totalItems}vh`;  

items.forEach((item) => {
  item.style.height = `100vh`;
});

const btnUps = container.querySelectorAll(".carousel-btn.up");
const btnDowns = container.querySelectorAll(".carousel-btn.down");

btnUps.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
});

btnDowns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
});

function updateCarousel() {
  container.style.transform = `translateY(-${100 * currentIndex}vh)`;
}

updateCarousel();

})
.catch((err) => {
console.error("Error fetching data:", err);
});
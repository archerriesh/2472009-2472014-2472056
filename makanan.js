fetch("makanan.json")
  .then((res) => res.json())
  .then((reks) => {
    const container = document.querySelector(".carousel-track");
    let htmlContent = "";

    reks.forEach((item) => {
      htmlContent += `
        <div class="isi">
            <div class="dalem">
                <div class="gambar">
                    <img src="${item.pic}" alt="${item.nama}" />
                </div>
                <div class="konten-teks">
                    <div class="keterangan">
                    <h2 class="judul">${item.nama}</h2>
                    <h4 class="punch">${item.punch}</h4>
                    <p class="deskripsi">${item.deskripsi}</p>
                    <p class="bahan">${item.nama} dimasak sepenuh hati dengan ${item.bahan_utama}.</p>
                    <p class="harga">Umumnya, ${item.nama} bisa didapat di kisaran ${item.range_harga}!</p>
                    </div>
                    <h4 class="kata-orang">Kata orang sih... ${item.nama} tuh,</h4>
                    <div class="review">
                        <div class="reviews">${item.review}</div>
                    </div>
                </div>
            </div>
        </div>
      `;
    });

    container.innerHTML = htmlContent;

    let currentIndex = 0;
    const items = container.querySelectorAll(".isi");
    const totalItems = items.length;

    container.style.height = `${100 * totalItems}vh`;

    items.forEach((item) => {
        item.style.height = `${100}vh`;
    });

    document.querySelector(".carousel-btn.down").addEventListener("click", () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarousel();
    }
    });

    document.querySelector(".carousel-btn.up").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
    });

    function updateCarousel() {
        track.style.transform = `translateY(-${100 * currentIndex}vh)`;
    }

    })
    .catch((err) => {
    console.error("Error fetching data:", err);
    });

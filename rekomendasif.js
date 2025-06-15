fetch("rekomendasi.json")
  .then((res) => res.json())
  .then((reks) => {
    const container = document.querySelector(".carousel-track");
    let htmlContent = "";

    reks.forEach((item) => {
      htmlContent += `
        <div class="isi">
          <div class="dalem">
            <div class="gambar">
              <img src="${item.pics}" alt="${item.nama}" />
            </div>
            <div class="keterangan">
              <h2 class="judul">${item.nama}</h2>
              <p class="deskripsi">${item.desc}</p>
              <div class="ket-map">
                <div class="ket">
                  <div class="info">
                    <i class="fas fa-map-marker-alt ikon"></i>
                    <p>${item.locs}</p>
                  </div>
                  <div class="info">
                    <i class="fas fa-clock ikon"></i>
                    <p>${item.opr}</p>
                  </div>
                  <div class="info">
                    <i class="fas fa-phone ikon"></i>
                    <p>${item.contact}</p>
                  </div>
                  <div class="info">
                    <p class="rating" style="display: flex; align-items: center; gap: 8px;">
                      <span class="score">${item.rating.score}</span>
                      <span class="icon">${item.rating.icon}</span>
                    </p>
                  </div>
                </div>

                ${
                  item.picm
                    ? `
                  <div class="map-link" style="flex-shrink: 0;">
                    <a href="${item.maps}" target="_blank" rel="noopener noreferrer">
                      <img src="${item.picm}" alt="Map ${item.nama}" style="max-width: 200px; border-radius: 8px;" />
                    </a>
                  </div>
                `
                    : `
                  <div class="map-link" style="flex-shrink: 0;">
                    <a href="${item.maps}" target="_blank" rel="noopener noreferrer">
                      <i class="fas fa-map"></i> Lihat di Google Maps
                    </a>
                  </div>
                `
                }
              </div>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = htmlContent;
  });
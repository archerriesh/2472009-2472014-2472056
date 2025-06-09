fetch("snack.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((reks) => {
    const container = document.querySelector(".carousel-track");
    if (!container) {
      console.error("Element .carousel-track tidak ditemukan di DOM!");
      return;
    }

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
                    <p class="rating" style="display: flex; align-items: center; gap: 8px;">
                      <span class="score">${item.rating?.score ?? "N/A"}</span>
                      <span class="icon">${item.rating?.icon ?? ""}</span>
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

    let currentIndex = 0;
    const track = container;
    const items = container.querySelectorAll(".isi");
    const totalItems = items.length;

    track.style.display = "flex";
    track.style.transition = "transform 0.5s ease";
    track.style.width = `${100 * totalItems}%`;

    items.forEach((item) => {
      item.style.width = `${100 / totalItems}%`;
      item.style.flexShrink = "0";
    });

    const btnRight = document.querySelector(".carousel-btn.right");
    const btnLeft = document.querySelector(".carousel-btn.left");

    if (btnRight && btnLeft) {
      btnRight.addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
          currentIndex++;
          updateCarousel();
        }
      });

      btnLeft.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
    }

    function updateCarousel() {
      track.style.transform = `translateX(-${(100 / totalItems) * currentIndex}%)`;
    }
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });

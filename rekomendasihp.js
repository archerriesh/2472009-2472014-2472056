fetch("rekomendasi.json")
.then(res => res.json())
.then((recs) => {
    const container = document.querySelector(".reks"); 
    let htmlContent = "";
    for (let i = 0; i < recs.length; i++) {
        htmlContent += `
            <div class="recs">
                <div class="isi">
                    <img src="${recs[i].pics}" alt="${recs[i].nama}"><br>
                    <h4>${recs[i].nama}</h4><br>
                    <p class="desc">${recs[i].desc || ""}</p>
                    <p class="rating" style="display: flex; align-items: center; gap: 8px;">
                        <span class="score">${recs[i].rating.score}</span>
                        <span class="icon">${recs[i].rating.icon}</span>
                    </p>
                </div>
            </div><br>`;
    }
    container.innerHTML = htmlContent;
});

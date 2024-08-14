// Modal açma ve kapama işlevleri
function openModal(program) {
    var modal = document.getElementById("modal");
    var modalDetails = document.getElementById("modal-details");
    
    if (program === 'kilo-verme') {
        modalDetails.innerHTML = `
            <h2>Kilo Verme Programı</h2>
            <p>Bireysel ihtiyaçlarınıza uygun diyet planları oluşturuyoruz.</p>
            <p>Fiyat: 300 TL</p>
            <button class="btn" disabled>Yakında Gelecek</button>
        `;
    } else if (program === 'kilo-alma') {
        modalDetails.innerHTML = `
            <h2>Kilo Alma Programı</h2>
            <p>Sizler için özel olarak hazırlanan kilo alma diyet programı.</p>
            <p>Fiyat: 350 TL</p>
            <button class="btn" disabled>Yakında Gelecek</button>
        `;
    }
    
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

const cardsRow = document.getElementById('cards-row');

for (let i = 1; i <= 100; i++) {
    console.log(i);
    cardsRow.innerHTML += `
        <div class="col-3">
            <div class="card" >
                <h3 class="text-center"> ${i}</h3>
            </div>
        </div>`;
}
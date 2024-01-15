const cardsRow = document.getElementById('cards-row');

// Stampo numeri da 1 a 100 con FOR

for (let i = 1; i <= 100; i++) {
    let result;

    //Genero un multiplo di 15 e stampo "fizzbuzz"
    if (i % 15 == 0) {

        result = 'fizzbuzz';
        const box = `<div class="fizzbuzz card d-flex bg-warning "> ${result}</div> `;
        cardsRow.innerHTML += box;
    }

    // Genero un multiplo di 5 e stampo "buzz"
    else if (i % 5 == 0) {
        result = 'buzz';
        const box = `<div class=" buzz card d-flex"> ${result}</div> `;
        cardsRow.innerHTML += box;

    } // Genero un multiplo di 3 e stampo "fizz"
    else if (i % 3 == 0) {
        result = 'fizz';
        const box = `<div class="fizz card d-flex"> ${result}</div> `;
        cardsRow.innerHTML += box;

    } else {
        result = i;
        const box = `<div class="num card d-flex"> ${result}</div> `;
        cardsRow.innerHTML += box;
    }

}
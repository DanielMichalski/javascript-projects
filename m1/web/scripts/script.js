function validateNumber(value) {
    // Sprawdzamy poprawność liczby
    if (!isNumber(value)) {
        alert("Proszę wpisać liczbę");
    }
}

function validateZipCode(value) {
    // Sprawdzamy poprawność kodu pocztowego
    if (!isZipCode(value)) {
        alert("Wpisz kod pocztowy w postaci XX-XXX");
    }
}

function calcPrice() {
    var maxPrice = document.getElementById("income").value * 4;
    alert("Możesz sobie pozwolić na dom o wartości do " + maxPrice + " PNL.");
}

function findHouses(form) {
    var bedrooms = document.getElementById("bedrooms").value;
    var zipCode = document.getElementById("zip").value;

    // Wyswietlamy domy wyszukane na serwerze, które spełniają podane kryteria
    form.submit();
}
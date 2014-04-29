function updateOrder() {
    const TAX_RATE = 0.22;
    const DONUT_PRICE  = 1.1;
    
    var numCakeDonuts = document.getElementById("cakedonuts").value;
    var zLukrem = document.getElementById("zLukrem").value;
    var zaIleMin = document.getElementById("zaIleOdbior").value;

    if (numCakeDonuts && zLukrem && zaIleMin) {
        var sumaCzesciowa = (numCakeDonuts + zLukrem) * DONUT_PRICE;

        var tax = sumaCzesciowa * TAX_RATE;
        var total = sumaCzesciowa + tax;

        document.getElementById("sumaCzesciowa").value = sumaCzesciowa.toFixed(2) + " PLN";
        document.getElementById("podatek").value = tax.toFixed(2) + " PLN";
        document.getElementById("wartoscSumaryczna").value = total.toFixed(2) + " PLN";
    }

}

function placeOrder(form) {
    // Przesyłamy zamówienie na serwer
    form.submit();
}

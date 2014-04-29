function sayHallo() {
    alert('Witaj jestem Twoim kamiennym ulubieńcem');
}

function touchRock() {
   var userName = prompt("Jak masz na imię?", "Wpisz swoje imię.")

    if (userName) {
        alert("Miło Cię poznać, " + userName + ".");
        document.getElementById("rockImg").src = "rock_happy.png";

    }
}
function sayHallo() {
    alert('Witaj jestem Twoim kamiennym ulubieńcem');
}

function touchRock() {
   var userName = prompt("Jak masz na imię?", "Wpisz swoje imię.")

    if (userName) {
        alert("Miło Cię poznać, " + userName + ".");
        document.getElementById("rock").src = "../images/rock_happy.png";
    }

    setTimeout("document.getElementById('rock').src = '../images/rock_unhappy.png';", 5000);
}

function intervalReloading() {
    setInterval("location.reload()''", 10);
}

function resizeRock() {
    document.getElementById("rock").style.height = (document.body.clientHeight - 100);
}
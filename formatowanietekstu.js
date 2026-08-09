function zmiana() {
    var tekst = document.getElementById("tekst");
    var rozmiar = document.getElementById("rozmiar").value;
    var rodzaj = document.getElementById("rodzaj").value;
    if (rodzaj=="normal") {
        tekst.style.fontFamily = "normal";
    }
    else if (rodzaj=="italic") {
        tekst.style.fontFamily = "italic";
    }
    tekst.style.fontSize = rozmiar +"%";
    tekst.style.color = document.getElementById("red").value;
}

function zmiana2() {
    var tekst = document.getElementById("tekst");
    var rozmiar = document.getElementById("rozmiar").value;
    var rodzaj = document.getElementById("rodzaj").value;
    if (rodzaj=="normal") {
        tekst.style.fontFamily = "normal";
    }
    else if (rodzaj=="italic") {
        tekst.style.fontFamily = "italic";
    }
    tekst.style.fontSize = rozmiar +"%";
    tekst.style.color = document.getElementById("green").value;
}


    function zmiana3() {
    var tekst = document.getElementById("tekst");
    var rozmiar = document.getElementById("rozmiar").value;
    var rodzaj = document.getElementById("rodzaj").value;
    if (rodzaj=="normal") {
        tekst.style.fontFamily = "normal";
    }
    else if (rodzaj=="italic") {
        tekst.style.fontFamily = "italic";
    }
    tekst.style.fontSize = rozmiar +"%";
    tekst.style.color = document.getElementById("blue").value;
}

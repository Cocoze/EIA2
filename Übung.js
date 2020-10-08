"use strict";
// https://www.w3schools.com/
window.addEventListener("load", function () {
    var ausgabe = prompt("Wie heißt du?", "");
    if (ausgabe != null) {
        document.getElementById("Text").innerHTML = "Hi " + ausgabe;
    }
});
//# sourceMappingURL=Übung.js.map
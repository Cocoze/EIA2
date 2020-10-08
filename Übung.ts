// Hilfe von https://www.w3schools.com/
window.addEventListener("load", function() {
var ausgabe: string = prompt ("Wie heißt du?", "");

if (ausgabe != null) {
    document.getElementById("Text").innerHTML = "Hi " + ausgabe ;
}
});


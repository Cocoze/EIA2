"use strict";
var Hexenkessel6;
(function (Hexenkessel6) {
    window.addEventListener("load", handleLoad);
    //let form: HTMLFormElement = <HTMLDivElement>document.querySelector("div#form");
    //let url: string = "index.html";
    let url = "http://localhost:5001";
    async function handleLoad(_event) {
        let response = await fetch("data6.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        Hexenkessel6.generateContent(data);
        /*let buttoninformation: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".addbutton1");
        buttoninformation.addEventListener("click", handleinformation);
        let buttoningredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".addbutton2");
        buttoningredients.addEventListener("click", handleingredients);
        let buttonselections: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".addbutton3");
        buttonselections.addEventListener("click", handleselections);
        let buttonsubmit: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".submitbutton");
        buttonsubmit.addEventListener("click", handlesubmit);

 */
        document.querySelector(".addbutton1").addEventListener("click", handleinformation);
        document.querySelector(".addbutton2").addEventListener("click", handleingredients);
        document.querySelector(".addbutton3").addEventListener("click", handleselections);
        document.querySelector(".submitbutton").addEventListener("click", handlesubmit);
    }
    function handleinformation() {
        let price = 0;
        let recipe = document.querySelector("div#recipe");
        //recipe.innerHTML = "";
        let formData = new FormData(document.forms[0]); //0 für meine erste Form
        let inputs = document.querySelectorAll("input");
        console.log(inputs);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let ingredients = document.querySelector(selector);
            let ingredientsPrice = Number(ingredients.getAttribute("price"));
            switch (entry[0]) {
                case "Name des Tranks":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Name: " + entry[1] + "<br>";
                    }
                    break;
                case "Beschreibung, Risiken und Nebenwirkungen":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Beschreibung: " + entry[1] + "<br>";
                    }
                    break;
                case "Wirkung":
                    if (entry[1] != "") {
                        ingredients.innerHTML += entry[0] + "Wirkung: " + entry[1] + "<br>";
                    }
                    break;
            }
            price += ingredientsPrice;
        }
        recipe.innerHTML += "<p><strong>Total: : €" + money;
    }
    let price = 0;
    let recipe = document.querySelector("div.recipe");
    //recipe.innerHTML = "";
    let formData = new FormData(document.forms[0]);
    for (let entry of formData) {
        let ingredients = document.querySelector(selector);
        let ingredientsPrice = Number(ingredients.getAttribute("price"));
        switch (entry[0]) {
            case "Dauer der Wirkung":
                if (entry[1] != "0") {
                    recipe.innerHTML += "Dauer: " + entry[1] + "<br>";
                }
                break;
            case "Konsistenz":
                if (entry[1] != "0") {
                    recipe.innerHTML += "Konsistenz: " + entry[1] + "<br>";
                }
                break;
            case "Farbe":
                if (entry[1] != "") {
                    recipe.innerHTML += "Farbe: " + entry[1] + "<br>";
                }
                break;
            case "Temperatur":
                if (entry[1] != "") {
                    recipe.innerHTML += "Temperatur: " + entry[1] + "<br>";
                }
                break;
            case "Rühren":
                if (Number(entry[1]) != 0) {
                    recipe.innerHTML += "Rühren: " + entry[1] + "<br>";
                }
                break;
        }
        price += ingredientsPrice;
    }
    recipe.innerHTML += "<p><strong>Total: : €" + money;
    /*  async function handlesubmit(_event: Event): Promise<void> {
 
         let formData: FormData = new FormData(document.forms[0]);
         let query: URLSearchParams = new URLSearchParams(<any>formData);
         let response: Response = await fetch(url + query.toString());
         let responseText: string = await response.text();
         alert(responseText);
     } */
    function money(_price) {
        let knut;
        let sickel;
        let galleonen;
        let münzen;
        if (_price < 29) {
            münzen = _price.toString() + "Knut";
        }
        else if (_price < 493) {
            sickel = _price / 29;
            knut = _price % 29;
            münzen = sickel.toFixed(0) + "Sickel" + knut.toFixed(0) + "Knut";
        }
        else {
            galleonen = _price / 493;
            _price %= 493;
            sickel = _price / 29;
            knut = _price % 29;
            münzen = galleonen.toFixed(0) + "Galleonen" + sickel.toFixed(0) + "Sickel" + knut.toFixed(0) + "Knut";
        }
        return münzen;
    }
})(Hexenkessel6 || (Hexenkessel6 = {}));
//# sourceMappingURL=kesselaufgabe6.js.map
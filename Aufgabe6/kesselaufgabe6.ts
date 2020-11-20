namespace Hexenkessel6 {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement = <HTMLDivElement>document.querySelector("div#form");
    //let url: string = "index.html";
    let url: string = "http://localhost:5001";
    

   

    async function handleLoad(_event: Event): Promise<void> {
        generateContent(data);
        
        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        let buttoninformation: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".addbutton1");
        buttoninformation.addEventListener("click", handleinformation);
        let buttoningredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".addbutton2");
        buttoningredients.addEventListener("click", handleingredients);
        let buttonselections: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".addbutton3");
        buttonselections.addEventListener("click", handleselections);
        let buttonsubmit: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".submitbutton");
        buttonsubmit.addEventListener("click", handlesubmit);


    }

    function handleinformation(): void {
        let price: number = 0;
        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#recipe");
        recipe.innerHTML = "";
        let formData: FormData = new FormData(document.forms[0]);       //0 für meine erste Form
        let inputs: NodeListOf<HTMLInputElement> = document.querySelector("input");

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let ingredients: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let ingredientsPrice: number = Number(ingredients.getAttribute("price"));
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


    function handleingredients(_event: Event): void;
    let price: number = 0;
    let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div.recipe");
    recipe.innerHTML = "";

    let formData: FormData = new FormData(form);

    /*for (let entry of formData) {
        let selector: string = "[value='" + entry[1] + "']";
        let ingredients: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
        let ingredientsPrice: number = Number(ingredients.getAttribute("price"));

    }*/


    function handleselections(): void;
    for (let entry of formData) {
        let ingredients: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
        let ingredientsPrice: number = Number(ingredients.getAttribute("price"));
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




    async function handlesubmit(_event: Event): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
    }

    function money(_price: number): string {
        let knut: number;
        let sickel: number;
        let galleonen: number;
        let münzen;

        if (_price < 29) {
            münzen = _price.toString() + "Knut";
        } else if (_price < 493) {
            sickel = _price / 29;
            knut = _price % 29;
            münzen = sickel.toFixed(0) + "Sickel" + knut.toFixed(0) + "Knut";

        } else {
            galleonen = _price / 493;
            _price %= 493;
            sickel = _price / 29;
            knut = _price % 29;

            münzen = galleonen.toFixed(0) + "Galleonen" + sickel.toFixed(0) + "Sickel" + knut.toFixed(0) + "Knut";
        }
        return münzen;
    }

}

namespace Hexenkessel7 {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;
    //let form: HTMLFormElement = <HTMLDivElement>document.querySelector("div#form");
    //let url: string = "https://alraune.herokuapp.com/";




    async function handleLoad(_event: Event): Promise<void> {
        let response: Response = await fetch("data7.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);
        console.log(JSON.stringify(data));
        generateContent(data);



        document.querySelector(".addbutton1").addEventListener("click", handleinformation);
        document.querySelector(".addbutton2").addEventListener("click", handleingredients);
        document.querySelector(".addbutton3").addEventListener("click", handleselections);
        document.querySelector(".submitbutton").addEventListener("click", handlesubmit);
        document.querySelector(".submitbutton").addEventListener("click", showallrecipes);
    }

    function handleinformation(): void {

        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#recipe");
        //recipe.innerHTML = "";
        let formData: FormData = new FormData(document.forms[0]);       //0 für meine erste Form
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs);

        recipe.innerHTML = "";
        for (let entry of formData) {

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
                        recipe.innerHTML += "Wirkung: " + entry[1] + "<br>";

                    }
                    break;
            }

        }

    }


    function handleingredients(_event: Event): void {
        let price: number = 0;
        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#recipe");

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            if (entry[0] == "Ingredients") {
                let selector: string = "[value='" + entry[1] + "']";
                let ingredients: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
                console.log(entry[1]);
                let ingredientsPrice: number = Number(ingredients.getAttribute("price"));
                recipe.innerHTML += "Zutat:" + entry[1] + " " + "<br>";
            }
        }
    }

    function handleselections(): void {
        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#recipe");
        let formData: FormData = new FormData(document.forms[0]);
        let price: number = 0;
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");


        let wirkungsdauer: String = <String>formData.get("Wirkungsdauer");
        if (wirkungsdauer != "0") {
            recipe.innerHTML += "Dauer: " + wirkungsdauer + "<br>";
        }

        let konsistenz: String = <String>formData.get("Konsistenz");
        if (konsistenz != "0") {
            recipe.innerHTML += "Konsistenz: " + konsistenz + "<br>";
        }

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let ingredients: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            //let ingredientsPrice: number = Number(ingredients.getAttribute("price"));
            switch (entry[0]) {

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
            //price += ingredientsPrice;

            //recipe.innerHTML += "<p><strong>Total: : €" + money;
        }
    }



    async function handlesubmit(_event: Event): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://alraune.herokuapp.com/?" + query.toString();
        //let url: string = "http://localhost:5001/?" + query.toString();
        let response: Response = await fetch(url);
        console.log(response);
        let responseText: string = await response.text();
        alert(responseText);
    }

    function showallrecipes(_event: Event): void {

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

    window.addEventListener("load", start);

    function start(_event: Event): void {
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    

    function handleChange(_event: Event): void {
     
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));

            order.innerHTML += item.name + "  € " + price;
        }
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}
function addTodo(): void {
    if (inputDOMElement.value != "") {
        // todosText.unshift(inputDOMElement.value);
        todosl.unshift({ text: inputDOMElement.value, isChecked: false });
    }
    inputDOMElement.value = "";

    drawListToDOM();
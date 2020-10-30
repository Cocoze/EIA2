"use strict";
window.addEventListener("load", start);
function start(_event) {
    let form = document.querySelector("div#form");
    let slider = document.querySelector("input#amount");
    form.addEventListener("change", handleChange);
    slider.addEventListener("input", displayAmount);
}
function handleChange(_event) {
    let order = document.querySelector("div#order");
    order.innerHTML = "";
    let formData = new FormData(document.forms[0]);
    for (let entry of formData) {
        let item = document.querySelector("[value='" + entry[1] + "']");
        let price = Number(item.getAttribute("price"));
        order.innerHTML += item.name + "  € " + price;
    }
}
function displayAmount(_event) {
    let progress = document.querySelector("progress");
    let amount = _event.target.value;
    progress.value = parseFloat(amount);
}
function addTodo() {
    if (inputDOMElement.value != "") {
        // todosText.unshift(inputDOMElement.value);
        todosl.unshift({ text: inputDOMElement.value, isChecked: false });
    }
    inputDOMElement.value = "";
    drawListToDOM();
}
//# sourceMappingURL=hexenkessel.js.map
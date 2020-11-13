"use strict";
var Hexenkessel;
(function (Hexenkessel) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            group = createZutaten(items, category);
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    Hexenkessel.generateContent = generateContent;
    function createZutaten(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(0));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let stepper = document.createElement("input"); //Stepper wird automatisch hinzugefügt wenn neue Zutat
            stepper.type = "number";
            stepper.value = "0";
            stepper.min = "0";
            stepper.max = "20";
            stepper.step = "1";
            stepper.name = "Amount";
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
            group.appendChild(stepper);
        }
        return group;
    }
})(Hexenkessel || (Hexenkessel = {}));
//# sourceMappingURL=generatecontent.js.map
namespace Hexenkessel6 {
    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }
    export function generateContent(_data: Data): void {

        for (let category in _data) {
            let items: Item[] = _data[category];
            let group: HTMLElement | null = null;
            group = createZutaten(items, category);


            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group) 
                fieldset.appendChild(group);
        }
    }

    
    function createZutaten(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(0)); 
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let stepper: HTMLInputElement = document.createElement("input");        //Stepper wird automatisch hinzugefügt wenn neue Zutat
            stepper.type = "number";
            stepper.value = "0";
            stepper.min = "0";
            stepper.max = "20";
            stepper.step = "1";
            stepper.name = "Amount";

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(checkbox);
            group.appendChild(label);
            group.appendChild(stepper);
        }
        return group;
    }
}
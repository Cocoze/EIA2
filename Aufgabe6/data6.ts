namespace Hexenkessel6 {
    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Ingredients: [
            { name: "Spinnen", price: 20 },
            { name: "graue Haare", price: 20 },
            { name: "Drachenzähne", price: 40 },
            { name: "Eisenkraut", price: 25 },
            { name: "Schlangenzähne", price: 40 },
            { name: "Alraunen", price: 50 },
            { name: "Einhornnagel", price: 50 }
        ]
        
    };
}

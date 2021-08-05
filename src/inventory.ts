import {Product} from "../src/products"; // or ./products

interface InventoryItem {
    product: Product; 
    quantity: number; 
}

let inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, 
    quantity: 10}, 
    {product: {name: "sensor", price: 12.50},
    quantity: 4}, 
    {product: {name: "LED", price:1.00},
    quantity: 20}
]

export let calcInventoryValue = (anArrayofInventoryObjects: InventoryItem[]): number => {
    let total: number = 0
    for (let item of anArrayofInventoryObjects) {
        total += item.product.price * item.quantity;
    }
    return total; 
}

let calcInventoryValueResult: number = calcInventoryValue(inventory);
console.log("calculate the inventory value result: ", calcInventoryValueResult); 
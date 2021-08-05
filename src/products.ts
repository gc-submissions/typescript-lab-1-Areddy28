export interface Product {
    name: string;
    price: number; 
} 

let products: Product[] = [
    {   
        name: "iPhone", 
        price: 1000

    },
    {
        name: "iPad",
        price: 800
    },
    {
        name: "iPod", 
        price: 2000
    }
]

export let calcAverageProductPrice = (anArrayOfProducts: Product[]): number => {
        let total:number = 0;
        
        for (let i: number= 0; i <anArrayOfProducts.length; i++) {
            total += anArrayOfProducts[i].price; 
        }

        return anArrayOfProducts.length !== 0 ? total/anArrayOfProducts.length: 0 //the total/anArrayOfProducts length
}

let calcAverageProductPriceResult: number = calcAverageProductPrice(products); 
console.log("calculate the average product price result:", calcAverageProductPriceResult); 
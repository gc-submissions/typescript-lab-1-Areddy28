export interface Mountain {
    name: string; 
    height: number; 
}

let mountains: Mountain[] = [{name: "Killmanjaro", height: 19341}, {name: "Everest", height: 29029} , {name: "Denali", height: 20310}];

export const findNameOfTallestMountain = (anArrayOfMountainObjects: Mountain[]): string => {
    let tallestMountain: number = 0; 
    let tallestMountainName: string = "";
    for (let i = 0; i < anArrayOfMountainObjects.length; i++) {
             if (anArrayOfMountainObjects[i].height > tallestMountain )  {
                 tallestMountainName = anArrayOfMountainObjects[i].name; 
                 tallestMountain = anArrayOfMountainObjects[i].height; 
             } 
    }
    return tallestMountainName; // name of Tallest mountain
}

let findNameOfTallestMountainResult: string = findNameOfTallestMountain(mountains);

console.log("find name of the tallest mountain: ",findNameOfTallestMountainResult); 


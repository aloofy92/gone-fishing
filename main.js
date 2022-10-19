const prompt = require('prompt-sync')({sigint: true});


let caughtFish = [];
let fish1 = generateRandomFish();
let fish2 = generateRandomFish();

caughtFish.push(fish1,fish2);
console.log(caughtFish);
console.log(getTotalWeight());




console.log('Youve gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish');


for(let i = 6; i < 12; i++){
    console.log('=======================================\n');

    console.log('The time is ${i}:00am. So far you have caught: ');

}






function generateRandomWeight(){

let weight = Number((Math.random() * 5 ).toPrecision(3));

while(weight < 1){

    weight = Number((Math.random() * 2 ).toPrecision(3));
}



return weight;


}





function generateRandomValue(){

    let value = Number((Math.random() * 5).toPrecision(3));

    while(value < 0.1){
        value = Number((Math.random() * 5 ).toPrecision(3));
    }

if(value < 1){

    value = Number(value.toPrecision(2));
}



return value;


}





function generateRandomName(){

let adj = ['glistening', 'purple', 'slimy', 'yellow',
'hyper', 'dazed','giddy','demonic','evil',
'silly', 'creepy', 'happy', 'glowing', 'chilly', 'stoned', 'wet'];

let types = ['Snapper', 'mackerel', 'polluck', 'yellowfin',
'ahi', 'clownfish','mahi-mahi','cod','bluegill',
'tuna', 'sole', 'halibut'];

let adj1 = adj[Math.floor(Math.random() * adj.length)];

let adj2 = adj[Math.floor(Math.random() * adj.length)];

let type = types[Math.floor(Math.random() * types.length)];

while(adj1 === adj2){
    adj2 = adj[Math.floor(Math.random() * adj.length)];
}


return adj1 + "  " + adj2 + " " + type;

}

console.log(generateRandomName());




function generateRandomFish(){

    let fish = {};

    fish.name = generateRandomName();
    fish.weight = generateRandomWeight();
    fish.value = generateRandomValue();

    return fish;
}








function getTotalWeight(){

    let totalWeight = 0;

    for(let i = 0; i < caughtFish.length; i++){
        
        let currentFish = caughtFish[i];

        totalWeight += currentFish.weight;
    }
    
    return Number(totalWeight.toPrecision(3));
}




function gettotalValue(){
    for(let i =0; i < caughtFish; i++){

        totalValue += caughtFish.values[i];

        return totalValue;
    }
}
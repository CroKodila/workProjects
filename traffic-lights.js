import readlineSync from "readline-sync";

greeting();

function trafficLights(numberOfTriggering){
    for (let i = 0; i< numberOfTriggering; i+=1){
      lightColor();
    }
    farewell();
}

function lightColor(){
    var colorCode = Math.round(Math.random()*3);
    switch (colorCode){
        case 1: 
            console.log("Red: Don't move!");
            break;
        case 2: 
            console.log("Yellow: Get ready!");
            break;
        case 3: 
            console.log("Green: Go!");
            break;
      }
}

function farewell(){
    console.log("Work finished!")
}

function greeting(){ 
    var numberOfTriggering = readlineSync.question("Welcome!\nPlease type the number of traffic lights triggering!");
    trafficLights(Number(numberOfTriggering));
}

 
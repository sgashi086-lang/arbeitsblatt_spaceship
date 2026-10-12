let name = "Dream Ship";
let health = 100;
let credits = 50;
let healSets = 2;
let setValue = 25;
let setPrice = 20;
let damage = 30;

// SHIP STATUS
function shipStatus() {
    console.log("--- SHIP STATUS ---");
    console.log("Name: " + name);
    console.log("Health: " + health);
    console.log("Credits: " + credits);
    console.log("Heal Sets: " + healSets);
    console.log("-------------------");
}

// USE A HEAL SET
function useSet() {
    console.log(">> use heal set...");
    healSets -= 1;
    health += setValue;
    
    console.log("healSets = " + healSets);
    console.log("health = " + health);
}

// BUY A HEAL SET
function buySet() {
    console.log(">> buy heal set...");
    credits -= setPrice;
    healSets += 1;
    
    console.log("credits = " + credits);
    console.log("healSets = " + healSets);
}

// DAMAGE SHIP
function damageShip() {
    console.log(">> damage ship...");
    health -= damage;
    
    console.log("health = " + health);
}

// OUTPUT

shipStatus();   
damageShip();   
useSet(); 
buySet(); 
shipStatus();  

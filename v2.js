let name = "Dream Ship";
let health = 100;
let credits = 50;
let healSets = 2;
let setValue = 25;
let setPrice = 20;

// TEMPLATE
function renderStatus() {
    let template = `
        <table border="1" cellpadding="5" style="border-collapse: collapse;">
            <tr><td><b>Name:</b></td><td>${name}</td></tr>
            <tr><td><b>Health:</b></td><td>${health}</td></tr>
            <tr><td><b>Credits:</b></td><td>${credits}</td></tr>
            <tr><td><b>Heal Sets:</b></td><td>${healSets}</td></tr>
        </table>

        <br>

        <div>
            <input type="number" id="damageInput" placeholder="Schadenshöhe">
            <button onclick="damageShip()">Schaden hinzufügen</button>
        </div>

        <br>

        <div>
            <input type="number" id="buyInput" placeholder="Anzahl Sets">
            <button onclick="buySet()">Sets kaufen</button>
        </div>

        <br>

        <div>
            <button onclick="useSet()">1 Reparaturset einsetzen</button>
        </div>

    `;
    
    document.getElementById('app').innerHTML = template;
}

function shipStatus() {
    console.log("--- SHIP STATUS ---");
    console.log("Name: " + name);
    console.log("Health: " + health);
    console.log("Credits: " + credits);
    console.log("Heal Sets: " + healSets);
}


// USE A HEAL SET
function useSet() {
    console.log(">> use heal set...");
    healSets -= 1;
    health += setValue;

    console.log("healSets = " + healSets);
    console.log("health = " + health);

    renderStatus();
}

// BUY A HEAL SET
function buySet() {
    console.log(">> buy heal set...");

    let inputVal = document.getElementById('buyInput').value;
    let amountToBuy = inputVal === "" ? 1 : Number(inputVal);
    
    credits -= setPrice * amountToBuy;
    healSets += amountToBuy;

    console.log("credits = " + credits);
    console.log("healSets = " + healSets);

    renderStatus();
}

// DAMAGE SHIP
function damageShip() {
    console.log(">> damage ship...");

    let inputVal = document.getElementById('damageInput').value;
    let damageAmount = inputVal === "" ? damage : Number(inputVal);
    
    health -= damageAmount;

    console.log("health = " + health);

    renderStatus();
}

renderStatus();

// OUTPUT

shipStatus();
damageShip();
useSet();
buySet();
shipStatus();  


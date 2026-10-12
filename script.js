let name = "Black Pearl";
let health = 100;
let credits = 50;
let healSets = 2;
let setValue = 25;
let setPrice = 20;
let errorMessage = "";

// TEMPLATE
function renderStatus() {

    if (health <= 0) {
        document.getElementById('app').innerHTML = `
            <div id="gameOver" style="color: white; padding: 20px; text-align: center; font-family: sans-serif; border-radius: 8px; width: 600px">
                <h1 style="font-size: 1.7rem; margin: 0 0 10px 0;">💥 GAME OVER 💥</h1>
                <p style="font-size: 1.2rem;">The spaceship <strong class="ship-name">${name}</strong> was completely destroyed!</p>
                <button id="reloadBtn" onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-top: 15px; border-radius: 16px">Restart</button>
            </div>
        `;
        return;
    }
    
    let template = `

        ${errorMessage ? `<div id="errorBox" style=" font-weight: bold; margin-bottom: 15px;">${errorMessage}</div>` : ''}
        <div id="heroBox">
                <table border="1" cellpadding="5" style="border-collapse: collapse;">
                <tr><td><b>Name:</b></td><td>${name}</td></tr>
                <tr><td><b>Health:</b></td><td>${health}</td></tr>
                <tr><td><b>Credits:</b></td><td>${credits}</td></tr>
                <tr><td><b>Heal Sets:</b></td><td>${healSets}</td></tr>
            </table>
        </div>

        <br>

        <div id="btnBox">
            <div id="attackBox">
                <input type="number" id="damageInput" placeholder="Damage...">
                <button id="damageBtn" onclick="damageShip()">Attack</button>
            </div>

            <br>

            <div id="buyBox">
                <input type="number" id="buyInput" placeholder="Sets...">
                <button id="setsBtn" onclick="buySet()">Buy</button>
            </div>

            <br>

            <div>
                <button id="useBtn" onclick="useSet()">Use Heal Set</button>
            </div>
        </div>

        <div id="legendBox">
            <h3>Legend</h3>
            <p><strong>Heal Set Price: </strong>20</p>
            <p><strong>Heal Set Value: </strong>25</p>
        </div>

    `;
    
    document.getElementById('app').innerHTML = template;
}

// Generische Funktion für Fehlermeldungen (Aufgabe 5)
function showError(message) {
    errorMessage = message;
    renderStatus();
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

    if (healSets <= 0) {
        showError("Low Heal Sets!");
        return;
    }

    healSets -= 1;
    health += setValue;

    if (health > 100) health = 100;

    console.log("healSets = " + healSets);
    console.log("health = " + health);

    renderStatus();
}

// BUY A HEAL SET
function buySet() {
    console.log(">> buy heal set...");

    let inputVal = document.getElementById('buyInput').value;
    let amountToBuy = inputVal === "" ? 0 : Number(inputVal);

    let totalCost = setPrice * amountToBuy;

    if (credits < totalCost) {
        showError("Low Credits!");
        return;
    }
    
    errorMessage = "";
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
    
    errorMessage = "";
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


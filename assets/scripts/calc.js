//////// Breakeven Calculation ////////

let ticker = "XYZ";
let breakeven = 0;
let percent = 0;

const calculateBreakeven = () => {
    // DOM inputs
    const tickerInput = document.getElementById("ticker-input").value;
    const priceInput = parseFloat(document.getElementById('price-input').value);
    const strikeInput = parseFloat(document.getElementById('strike-input').value);
    const premiumInput = parseFloat(document.getElementById('premium-input').value);

    const strategySelect = () => {
        let strategy = document.getElementById('strategy-select').value;
        return strategy;
    };
    let strategy = strategySelect();

    const sideSelect = () => {     
        let side = document.getElementById('side-select').value;
        return side;
    }
    let side = sideSelect();

    // Form validation
    const tickerCheck = document.forms["input-form"]["ticker-input"].value;
    const priceCheck = document.forms["input-form"]["price-input"].value;
    const strikeCheck = document.forms["input-form"]["strike-input"].value;
    const premiumCheck = document.forms["input-form"]["premium-input"].value;

    if (tickerCheck == "" || priceCheck == "" || strikeCheck == "" || premiumCheck == "") {
        resultOutput.innerText = `User Input Error!`;
        percentOutput.innerText = ``;
        return;
    };

    // Call or Put option
    if (strategy == "call") {
        breakeven = strikeInput + premiumInput;
        if (side == "long") {
            resultOutput.innerText = `
            ${tickerInput} must go from ${priceInput} to ${breakeven.toFixed(2)} by expiration for you to breakeven.
            `;
        } else if (side == "short") {
            resultOutput.innerText = `
            If ${tickerInput} is above ${breakeven.toFixed(2)} at expiration you will miss profit potential.
            `;
        };
    } else if (strategy == "put") {
        breakeven = strikeInput - premiumInput; 
        if (side == "long") {
            resultOutput.innerText = `
            ${tickerInput} must go from ${priceInput} to ${breakeven.toFixed(2)} by expiration for you to breakeven.
            `;
        } else if (side == "short") {
            resultOutput.innerText = `
            If ${tickerInput} is below ${breakeven.toFixed(2)} at expiration you will be underwater.
            `;
        };
    };
    percent = ((breakeven - priceInput) / priceInput) * 100;
    percentOutput.innerText = `
    That is a ${percent.toFixed(2)}% move!
    `;
    
    console.log(breakeven);
    console.log(percent);
    console.log(sideSelect());
    console.log(strategySelect());
};


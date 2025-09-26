    // Dollar Formatter
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

    // Input Parameter and Validation Function
const inputParameters = document.querySelectorAll('.input');

inputParameters.forEach(function(input) {
    input.addEventListener("input", function () {
        
        let val = this.value.replace(/[^0-9.]/g, "");

        const parts = val.split('.');
        if (parts.length > 2) {
            val = parts[0] + '.' + parts.slice(1).join('');
        }
        this.value = val;
    });
});

const calcButton = document.querySelector('#calculate-btn');
const amountInput = document.getElementById('input-amount-box');
const termInput = document.getElementById('input-term');
const rateInput = document.getElementById('input-rate');

calcButton.addEventListener('click', e => {
    e.preventDefault();
    validFunc();
});

const repayType = document.querySelector('#repayment-btn');
const interestType = document.querySelector('#interest-only-btn');

function validFunc() {
    const amountError = document.querySelector('#amount-err-msg');
    const termError = document.querySelector('#term-err-msg');
    const rateError = document.querySelector('#rate-err-msg');
    const typeError = document.querySelector('#type-err-msg');

    let isValid = true;
    
    if (amountInput.value === '') {
        amountError.style.visibility = "visible";
        isValid = false;
    } else {
        amountError.style.visibility = "hidden";
    };

    if (termInput.value === '') {
        termError.style.visibility = "visible"
        isValid = false;
    } else {
        termError.style.visibility = "hidden";
    };

    if (rateInput.value === '') {
        rateError.style.visibility = "visible";
        isValid = false;
    } else {
        rateError.style.visibility = "hidden";
    };

    if (repayType.checked !== true && interestType.checked !== true) { // For repayments
        typeError.style.visibility = "visible";
        isValid = false;
    } else if (repayType.checked !== true && interestType.checked === true) { // For interest only
        typeError.style.visibility = "hidden";
        isValid = true;
    } else {
        typeError.style.visibility = "hidden";
    };

    if (isValid === true) {
        return isValid && calc();
    };
    
};

function calc() {
    document.querySelector('.results-default').style.display = 'none';
    document.querySelector('.results-active').style.display = 'flex';
    
    if (repayType.checked === true) {
        return repayCalc(amountInput.value, rateInput.value, termInput.value);
    } else if (interestType.checked === true){
        return interCalc(amountInput.value, rateInput.value);
    };
};

bigNum = document.querySelector('.big-num');
smallNumTitle = document.querySelector('.small-num-label');
smallNum = document.querySelector('.small-num');

function repayCalc(principal, rate, term) {
    p = principal;
    r = (rate / 100) / 12;
    n = term * 12;

    repayments = p * ((r * ((1 + r) ** n)) / (((1 + r) ** n) - 1));
        bigNum.textContent = formatter.format(repayments);
    totalAmount = repayments * n;
        smallNum.textContent = formatter.format(totalAmount);
    
    document.querySelector('.result-num').style.height = "292px";
    smallNumTitle.textContent = "Total you'll repay over the term";
    smallNum.style.display = "flex";
    
    return repayments && totalAmount;
};
function interCalc(principal, rate) {
    p = principal;
    r = (rate / 100) / 12;

    interestOnly = p * r;
        bigNum.textContent = formatter.format(interestOnly);
    
    document.querySelector('.result-num').style.height = "auto";
    smallNumTitle.textContent = "Same amount after paying total interest";
    smallNum.style.display = "none";

    return interestOnly;
};

const termBox = document.querySelector(".term-box");
const termDiv = document.querySelector("#input-term");
const rateBox = document.querySelector(".rate-box");
const rateDiv = document.querySelector("#input-rate");

interestType.addEventListener('change', e => {
    termBox.style.opacity = "0";
    rateDiv.style.width = "375px";
    rateDiv.style.transition = "width 0.2s ease";
    termInput.style.textContent = "";
});

repayType.addEventListener('change', e => {
    termBox.style.opacity = "1";
    termBox.style.transition = "opacity 0.2s ease-out"
    rateDiv.style.width = "137px";
});

clearButton = document.getElementById("clear-btn");

clearButton.addEventListener('click', e => {
    document.querySelector('.results-default').style.display = "flex";
    document.querySelector('.results-active').style.display = "none";
});
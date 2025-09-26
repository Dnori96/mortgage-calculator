    // Dollar Formatter
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

    // Input Parameter and Validation Function
const inputParameters = document.querySelectorAll('.input');

inputParameters.forEach(function(input) {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
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

    if (repayType.checked !== true && interestType.checked !== true) {
        typeError.style.visibility = "visible";
        isValid = false;
    } else {
        typeError.style.visibility = "hidden";
    };

    if (isValid === true) {
        return isValid && calc();
    };
};

function calc() {
    const resultsDefault = document.querySelector('.results-default').style.display = 'none';
    const resultsActive = document.querySelector('.results-active').style.display = 'flex';
    
    if (repayType.checked === true) {
        return repayCalc(amountInput.value, rateInput.value, termInput.value);
    } else if (interestType.checked === true){
        return interCalc(amountInput.value, rateInput.value);
    };
};

bigNum = document.querySelector('.big-num');
smallNum = document.querySelector('.small-num');

function repayCalc(principal, rate, term) {
    p = principal;
    r = (rate / 100) / 12;
    n = term * 12;

    repayments = p * ((r * ((1 + r) ** n)) / (((1 + r) ** n) - 1));
        bigNum.textContent = formatter.format(repayments);
    totalAmount = repayments * n;
        smallNum.textContent = formatter.format(totalAmount);
    
    return repayments && totalAmount
};
function interCalc(principal, rate) {
    p = principal;
    r = (rate / 100) / 12;

    interestOnly = p * r
        bigNum.textContent = formatter.format(interestOnly);
        
        smallNum.textContent = "N/A"
};

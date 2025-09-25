const inputParameters = document.querySelectorAll('.input');

inputParameters.forEach(function(input) {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
    });
});

const calcButton = document.querySelector('#calculate-btn');
const amountInput = document.getElementById('input-amount-box');
const termInput = document.getElementById('input-term');
const rateInput = document.getElementById('input-rate')

calcButton.addEventListener('click', e => {
    e.preventDefault();
});


const repayType = document.querySelector('#repayment-btn');
const interestType = document.querySelector('#interest-only-btn');

function calcFunction() {
    const resultsDefault = document.querySelector('.results-default').style.display = 'none';
    const resultsActive = document.querySelector('.results-active').style.display = 'flex';
    
    if (repayType.checked === true) {
        return repayCalc();
    } 
    else if (interestType.checked === true){
        return interCalc();
    } 
    else {
        return false;
    }
};

function repayCalc(a, b) {}

function interCalc(a, b) {}

import { DOM } from "../DOM.js";

export function validFunc() {
	let isValid = true;

	if (DOM.amountInput.value === "") {
		DOM.amountError.style.visibility = "visible";
		isValid = false;
	} else {
		DOM.amountError.style.visibility = "hidden";
	}

	if (DOM.termInput.value === "") {
		DOM.termError.style.visibility = "visible";
		isValid = false;
	} else {
		DOM.termError.style.visibility = "hidden";
	}

	if (DOM.rateInput.value === "") {
		DOM.rateError.style.visibility = "visible";
		isValid = false;
	} else {
		DOM.rateError.style.visibility = "hidden";
	}

	if (DOM.repayType.checked !== true && DOM.interestType.checked !== true) {
		// For repayments
		DOM.typeError.style.visibility = "visible";
		isValid = false;
	} else if (DOM.repayType.checked !== true && DOM.interestType.checked === true) {
		// For interest only
		DOM.typeError.style.visibility = "hidden";
		isValid = true;
	} else {
		DOM.typeError.style.visibility = "hidden";
	}

	if (isValid === true) {
		return isValid;
	}
}

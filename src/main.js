import { DOM } from "./lib/DOM.js";
import { repayCalc } from "./lib/utils/calcRepay.js";
import { interestCalc } from "./lib/utils/interestCalc.js";
import { validFunc } from "./lib/validation/formValidation.js";

DOM.inputParameters.forEach(function (input) {
	input.addEventListener("input", function () {
		let val = this.value.replace(/[^0-9.]/g, "");

		const parts = val.split(".");
		if (parts.length > 2) {
			val = parts[0] + "." + parts.slice(1).join("");
		}
		this.value = val;
	});
});

DOM.calcButton.addEventListener("click", (e) => {
	e.preventDefault();
	validFunc() ? calc() : false;
});

function calc() {
	DOM.resultDefault.style.display = "none";
	DOM.resultActive.style.display = "flex";

	if (DOM.repayType.checked) {
		return repayCalc(DOM.amountInput.value, DOM.rateInput.value, DOM.termInput.value);
	} else if (DOM.interestType.checked) {
		return interestCalc(DOM.amountInput.value, DOM.rateInput.value);
	}
}

DOM.interestType.addEventListener("change", (e) => {
	DOM.termBox.style.opacity = "0";

	if (window.innerWidth > 515) {
		DOM.rateDiv.style.width = "375px";
		DOM.rateDiv.style.transition = "width 0.2s ease";
		DOM.termInput.style.textContent = "";
	} else if (window.innerWidth <= 515) {
		DOM.rateDiv.style.width = "250px";
		DOM.rateDiv.style.transition = "width 0.2s ease";
		DOM.termInput.style.textContent = "";
	}
});

DOM.repayType.addEventListener("change", (e) => {
	DOM.termBox.style.opacity = "1";
	DOM.termBox.style.transition = "opacity 0.2s ease-out";

	if (window.innerWidth > 515) {
		DOM.rateDiv.style.width = "137px";
	} else if (window.innerWidth <= 515) {
		DOM.rateDiv.style.width = "90px";
	}
});

DOM.clearButton.addEventListener("click", (e) => {
	DOM.resultDefault.style.display = "flex";
	DOM.resultActive.style.display = "none";
});

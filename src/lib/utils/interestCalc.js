import { DOM } from "../DOM.js";
import { formatter } from "./currencyFormat.js";

export function interestCalc(principal, rate) {
	const p = principal;
	const r = rate / 100 / 12;

	const interestOnly = p * r;
	DOM.bigNum.textContent = formatter.format(interestOnly);

	DOM.resultNum.style.height = "auto";

	DOM.smallNumTitle.textContent = "Same amount after paying total interest";
	DOM.smallNum.style.display = "none";

	return interestOnly;
}

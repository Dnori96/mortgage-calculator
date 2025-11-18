import { DOM } from "../DOM.js";
import { formatter } from "./currencyFormat.js";

export function repayCalc(principal, rate, term) {
	const p = principal;
	const r = rate / 100 / 12;
	const n = term * 12;

	const repayments = p * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));

	DOM.bigNum.textContent = formatter.format(repayments);
	const totalAmount = repayments * n;
	DOM.smallNum.textContent = formatter.format(totalAmount);

	DOM.resultNum.style.height = "auto";

	DOM.smallNumTitle.textContent = "Total you'll repay over the term";
	DOM.smallNum.style.display = "flex";
}

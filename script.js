document.addEventListener("DOMContentLoaded", function() {
    const investmentAmountInput = document.getElementById("investmentAmount");
    const investmentPeriodInput = document.getElementById("investmentPeriod");
    const periodValue = document.getElementById("periodValue");
    const roiElement = document.getElementById("roi");
    const totalAmountElement = document.getElementById("totalAmount");

    investmentAmountInput.addEventListener("input", calculateTotalAmount);
    investmentPeriodInput.addEventListener("input", updatePeriodValue);

    function calculateTotalAmount() {
        const investmentAmount = parseFloat(investmentAmountInput.value) || 0;
        const investmentPeriod = parseInt(investmentPeriodInput.value) || 0;

        if (investmentAmount >= 1 && investmentPeriod >= 1) {
            const totalAmount = investmentAmount * 0.05 * investmentPeriod;
            const totalamou = investmentAmount + totalAmount;
            roiElement.textContent = "Return on Investment: R" + totalAmount.toFixed(2);
            totalAmountElement.textContent = "Total Amount Returned: R" + totalamou.toFixed(2);
        } else {
            roiElement.textContent = "Return on Investment: R0.00";
            totalAmountElement.textContent = "Total Amount Returned: R0.00";
        }
    }

    function updatePeriodValue() {
        const period = parseInt(investmentPeriodInput.value);
        periodValue.textContent = period + (period === 1 ? " month" : " months");
        calculateTotalAmount();
    }
});

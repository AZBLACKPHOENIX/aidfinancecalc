function calculateROI() {
    var investmentAmount = parseFloat(document.getElementById("investmentAmount").value);
    var investmentPeriod = parseInt(document.getElementById("investmentPeriod").value);
    var returnOnInvestment = investmentAmount * 0.05 * investmentPeriod;
    document.getElementById("result").textContent = "Return on Investment: R" + returnOnInvestment.toFixed(2);
}

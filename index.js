const cashAmount = document.querySelector('#cash_amount');
const tip = document.querySelector('#tip');
const calculator = document.querySelector('#calculator');
const total = document.querySelector('#total');
const tipTotal = document.querySelector('#tip_total')


calculator.addEventListener('click', () => {

    const cash = cashAmount.value;
    const cashTip = tip.value;

    const dollars = cash * (1 + cashTip / 100);
    tipTotal.innerHTML = dollars.toFixed(2);

});



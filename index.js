document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    loadAnimation();
    const success = calculateLoan();
    if (success) {
        handleDisplay();
    }    
})
let animating = false;
function loadAnimation() {
    if (animating) return; {
        animating = true;
        const progressAnimation = document.querySelector('.progress__animation');
            progressAnimation.style.width = '0%';
        let width = 0;
        const id = setInterval(()=>{
            if (width>=100) {
                clearInterval(id);
                animating = false;
            } else {
                width++
                progressAnimation.style.width = `${width}%`
            }
                }, 10)
            } 
}
function calculateLoan() {
    // get the required user inputs fields
    const principal = parseFloat(document.getElementById('loan__amount').value);
    const annualInterest = parseFloat(document.getElementById('loan__interest').value);
    const duration = parseFloat(document.getElementById('years').value);

    // calculate the results using the amortization formula 
    //  m = p*r/1-(1+r)^-n
    // where m => monthly payment, p => principal(loan amount), r => monthly interest gotten
    // from annual interest / 100 / 12, n => number of total payments in the duration given.

    // convert annual rate to monthly rates and years to month
    const monthlyRate = annualInterest / 100 / 12;
    const numberOfPayment = duration * 12;

    // assign (1+r)^-n to a var
    const x = Math.pow(1 + monthlyRate, -numberOfPayment);

    // run the main calculations for the results input.
    const monthlyPayment = (principal * monthlyRate) / (1-x);
    const totalPayment = numberOfPayment * monthlyPayment;
    const totalInterest = totalPayment - principal;

    if (isNaN(principal) || isNaN(annualInterest) || isNaN(duration) || principal <= 0 || annualInterest <= 0 || duration <= 0) {
        console.log('please enter valid positive numbers.')
        return false;
    }
    // display the results using 2 decimals places
    document.getElementById('monthly__payment').textContent = `${monthlyPayment.toFixed(2)}`;
    document.getElementById('total__payment').textContent = `${totalPayment.toFixed(2)}`;
    document.getElementById('total__interest').textContent = `${totalInterest.toFixed(2)}`;
    return true;
}
function handleDisplay() {
    const loadingAnimationBlock = document.querySelector('.loadingAnimation');
        loadingAnimationBlock.style.display = 'block';

    const resultsBlock = document.querySelector('.results');
        resultsBlock.style.display = 'none';

    const a = setTimeout(()=>{
        loadingAnimationBlock.style.display = 'none';
        resultsBlock.style.display = 'block';
        clearTimeout(a)
    }, 1500)
    return a;
}
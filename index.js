document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    loadAnimation();
    const success = calculateLoan();
    if (success) {
        document.querySelector('.loadingAnimation').style.display = 'block';
        let a = setTimeout(()=>{
        document.querySelector('.loadingAnimation').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
    clearTimeout(a)
    }, 1500)
    }
    
})
let animating = false;
function loadAnimation() {
    if (!animating) {
        animating = true;
        const progressAnimation = document.querySelector('.progress__animation');
        let width = 1;
        const id = setInterval(()=>{
            if (width>=100) {
        clearInterval(id);
        if (width>=90) {
            document.getElementById('loadText').textContent = 'Complete!'
        }
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
    document.getElementById('monthly__payment').value = monthlyPayment.toFixed(2)
    document.getElementById('total__payment').value = totalPayment.toFixed(2)
    document.getElementById('total__interest').value = totalInterest.toFixed(2)
    return true;
}


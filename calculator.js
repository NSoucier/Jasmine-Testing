window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      console.log('submit')
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 400000;
  document.getElementById("loan-years").value = 15;
  document.getElementById("loan-rate").value = 3;

  updateMonthly(calculateMonthlyPayment([400000, 15, 3]));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let arr = [document.getElementById("loan-amount").value, document.getElementById("loan-years").value, document.getElementById("loan-rate").value];
  updateMonthly(calculateMonthlyPayment(arr));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values[0];
  let n = values[1]*12;
  let i = values[2]/100/12;
  let payment = (p*i)/(1-(1+i)**(-n));
  console.log(`${payment.toFixed(2)}`);
  return `${payment.toFixed(2)}`
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerText = `$${monthly}`;
}

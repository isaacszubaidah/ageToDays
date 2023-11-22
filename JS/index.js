
function ageToDays(age) {
    return age * 365
}
// this function calculates the value and will return the answer


function convert() {
  let ageInput = document.getElementById("age").value;
  let age = parseFloat(ageInput);
// parseFloat return a number or NaN(not a number)
  if (isNaN(age)) {
      alert("Valid Minutes Required");
      return;
  }
  let days = ageToDays(age);
  let resultElement = document.getElementById("result");
  resultElement.innerText = `${age} years is approximately ${days} days.`; 
} 
// this function is converting the age into the days
let converBtn =document.getElementById('convertBtn');
converBtn.addEventListener('click',convert);
// this button is made for the convert button so it can correspond with the convert function

document.getElementById('clearBtn').addEventListener('click',function () {
  document.getElementById('age').value = "";
  document.getElementById("result").innerHTML = "";
});
// this button is a clear button
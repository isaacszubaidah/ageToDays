
function ageToDays(age) {
    let daysInYear = 365
    return age * 365
}


function convert() {
  let ageInput = document.getElementById("age").value;
  let age = parseFloat(ageInput);

  if (isNaN(age)) {
      alert("Valid Minutes Required");
      return;
  }
  let days = ageToDays(age);
  let resultElement = document.getElementById("result");
  resultElement.innerText = `${age} years is approximately ${days} days.`; 
} 
let converBtn =document.getElementById('convertBtn');
converBtn.addEventListener('click',convert);

document.getElementById('clearBtn').addEventListener('click',function () {
  document.getElementById('age').value = "";
  document.getElementById("result").innerHTML = "";
});
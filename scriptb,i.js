document.getElementById("bmi-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("bmi-height").value);
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const resultBox = document.getElementById("bmi-result");

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal (Ideal for Aviation)";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  resultBox.innerHTML = `
    <p><strong>Your BMI is ${bmi}</strong> — ${category}</p>
  `;
});

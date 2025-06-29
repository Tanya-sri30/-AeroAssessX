document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".eligibility-form");
  const resultBox = document.querySelector(".result-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const eyesight = document.getElementById("eyesight").value;
    const colorBlind = document.getElementById("colorblind").value;

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Evaluate conditions
    let issues = [];

    if (age < 16 || age > 45) {
      issues.push("Age should be between 16 and 45.");
    }

    if (bmi < 18.5 || bmi > 24.9) {
      issues.push(`Your BMI is ${bmi}, which is outside the recommended aviation range (18.5 - 24.9).`);
    }

    if (eyesight !== "6/6") {
      issues.push("You must have 6/6 vision (with or without correction).");
    }

    if (colorBlind === "yes") {
      issues.push("Color blindness is disqualifying for pilot training.");
    }

    // Display result
    if (issues.length === 0) {
      resultBox.innerHTML = `<p style="color: green;"><strong>✅ You're medically eligible for pilot training!</strong><br>Your BMI is ${bmi}.</p>`;
    } else {
      resultBox.innerHTML = `<p style="color: red;"><strong>⚠️ Eligibility Check Failed:</strong><br>${issues.join("<br>")}</p>`;
    }
  });
});



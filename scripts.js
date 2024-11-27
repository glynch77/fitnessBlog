// // Section 1: Caloric Calculator

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("calorieForm");
//   const calculateBtn = document.getElementById("calculateBtn");
//   const resultDiv = document.getElementById("result");

//   calculateBtn.addEventListener("click", () => {
//     // Get form values
//     const age = parseInt(document.getElementById("age").value, 10);
//     const weight = parseFloat(document.getElementById("weight").value);
//     const height = parseFloat(document.getElementById("height").value);
//     const activity = parseFloat(document.getElementById("activity").value);

//     if (isNaN(age) || isNaN(weight) || isNaN(height)) {
//       resultDiv.innerHTML = `<p class="text-danger">Please fill in all fields with valid values.</p>`;
//       return;
//     }

//     // Gender selection (add radio buttons if needed)
//     const gender = "male"; // Default to male for now

//     // Calculate BMR
//     let bmr;
//     if (gender === "male") {
//       bmr = 10 * weight + 6.25 * height - 5 * age + 5;
//     } else {
//       bmr = 10 * weight + 6.25 * height - 5 * age - 161;
//     }

//     // Calculate TDEE
//     const tdee = bmr * activity;

//     // Display result
//     resultDiv.innerHTML = `
//         <div class="alert alert-success">
//           <h5>Your Caloric Needs</h5>
//           <p>BMR: <strong>${bmr.toFixed(2)}</strong> calories/day</p>
//           <p>Total Daily Energy Expenditure (TDEE): <strong>${tdee.toFixed(
//             2
//           )}</strong> calories/day</p>
//         </div>
//       `;
//   });
// });

// //   Section 2 BMI Calculator

// document.addEventListener("DOMContentLoaded", () => {
//   const bmiForm = document.getElementById("bmiForm");
//   const calculateBtn = document.getElementById("calculateBMI");
//   const resultDiv = document.getElementById("bmiResult");

//   calculateBtn.addEventListener("click", () => {
//     // Get form values
//     const weight = parseFloat(document.getElementById("weight").value);
//     const height = parseFloat(document.getElementById("height").value);

//     if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
//       resultDiv.innerHTML = `<p class="text-danger">Please enter valid positive values for weight and height.</p>`;
//       return;
//     }

//     // Convert weight from pounds to kilograms
//     const weightInKg = weight * 0.453592;

//     // Convert height from inches to meters
//     const heightInMeters = height * 0.0254;

//     // Calculate BMI
//     const bmi = weightInKg / heightInMeters ** 2;

//     // Determine BMI category
//     let category = "";
//     if (bmi < 18.5) {
//       category = "Underweight";
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//       category = "Normal weight";
//     } else if (bmi >= 25 && bmi < 29.9) {
//       category = "Overweight";
//     } else {
//       category = "Obese";
//     }

//     // Display result
//     resultDiv.innerHTML = `
//         <div class="alert alert-info">
//           <h5>Your BMI</h5>
//           <p>BMI: <strong>${bmi.toFixed(2)}</strong></p>
//           <p>Category: <strong>${category}</strong></p>
//         </div>
//       `;
//   });
// });

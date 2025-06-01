// Get grades from input
function getGrades() {
  const input = document.querySelector("#grades").value;
  const grades = input
    .split(",")
    .map((grade) => grade.trim().toUpperCase())
    .filter((grade) => grade !== "");
  return grades;
}

// Convert grade to GPA points
function lookupGrade(letter) {
  if (letter === "A") return 4.0;
  if (letter === "B") return 3.0;
  if (letter === "C") return 2.0;
  if (letter === "D") return 1.0;
  if (letter === "F") return 0.0;
  return null; // in case of invalid input
}

// Calculate GPA
function calculateGpa(grades) {
  const points = grades
    .map(lookupGrade)
    .filter((point) => point !== null); // remove any invalid entries

  if (points.length === 0) return "No valid grades entered.";

  const total = points.reduce((sum, point) => sum + point, 0);
  const gpa = total / points.length;
  return gpa.toFixed(2);
}

// Display GPA on the page
function displayGpa(gpa) {
  const outputElement = document.querySelector("#output");
  outputElement.textContent = `Your GPA is: ${gpa}`;
}

// Handles button click
function clickHandler() {
  const grades = getGrades();
  const gpa = calculateGpa(grades);
  displayGpa(gpa);
}

// Add event listener to button
document
  .querySelector("#submitButton")
  .addEventListener("click", clickHandler);

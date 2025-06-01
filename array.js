// Activity 1 - Map
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("myList").innerHTML = stepsHtml.join("");

// Activity 2 - Map (convert grades to GPA points)
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  } else {
    points = 0; // for F or unknown grades
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3 - Reduce (calculate GPA)
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;
console.log("GPA:", gpa);

// Activity 4 - Filter (short fruits)
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortFruits = fruits.filter(fruit => fruit.length < 6);
console.log("Short fruits:", shortFruits);

// Activity 5 - indexOf
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
console.log("Lucky number index:", luckyIndex);

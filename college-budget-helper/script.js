// Rotating Tip on Home Page
const tips = [
  "Track your expenses weekly to avoid surprises.",
  "Always pay yourself first—save before you spend.",
  "Make eating at home a habit. It's cheaper!",
  "Use student discounts to stretch your money.",
  "Budgeting = freedom, not restriction."
];

const tipElement = document.getElementById("tip");
if (tipElement) {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipElement.textContent = tips[randomIndex];
}

// Budget Calculator Logic
const form = document.getElementById("budgetForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const income = parseFloat(document.getElementById("income").value) || 0;
    const rent = parseFloat(document.getElementById("rent").value) || 0;
    const food = parseFloat(document.getElementById("food").value) || 0;
    const school = parseFloat(document.getElementById("school").value) || 0;
    const other = parseFloat(document.getElementById("other").value) || 0;

    const totalExpenses = rent + food + school + other;
    const balance = income - totalExpenses;

    const result = document.getElementById("result");
    if (balance > 0) {
      result.textContent = `Great job! You're within budget. You have $${balance.toFixed(2)} left.`;
      result.style.color = "#2A9D8F";
    } else if (balance === 0) {
      result.textContent = "You're breaking even. Keep an eye on your spending.";
      result.style.color = "#F4A261";
    } else {
      result.textContent = `Oops! You're over budget by $${Math.abs(balance).toFixed(2)}.`;
      result.style.color = "#E76F51";
    }
  });
}

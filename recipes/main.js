import { recipes } from './recipes.mjs';

const recipesContainer = document.getElementById('recipes');

recipes.forEach(recipe => {
  const recipeCard = document.createElement('article');
  recipeCard.className = 'recipe-card';
  recipeCard.innerHTML = `
    <img src="images/${recipe.image}" alt="${recipe.name}" />
    <h2>${recipe.name}</h2>
    <p class="description">${recipe.description}</p>
    <span
      class="rating"
      role="img"
      aria-label="Rating: ${recipe.rating} out of 5 stars"
    >
      ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
    </span>
  `;
  recipesContainer.appendChild(recipeCard);
});

const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "After Greek mythology (Percy Jackson), Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Riordan tries Norse Mythology—and it’s great.",
    imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb divides the World. Young Garion begins a complex mission with his aunt and an immortal companion.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

function renderArticles() {
  const container = document.querySelector("#articles");

  articles.forEach(article => {
    const articleElement = document.createElement("article");

    articleElement.innerHTML = `
      <div class="details">
        <p class="date">${article.date}</p>
        <p class="genre">${article.genre}</p>
      </div>
      <div class="main-content">
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}" />
        <p>${article.description}</p>
        <p><strong>Ages:</strong> ${article.ages}</p>
        <p><strong>Rating:</strong> ${article.stars}</p>
      </div>
    `;

    container.appendChild(articleElement);
  });
}

renderArticles();

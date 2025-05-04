// Step 1: Add a paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Step 2: Add an image
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

// Step 3: Add complex HTML (ul > li)
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Step 4: Add a new section with h2 and p
const newSection = document.createElement("section");

const newHeading = document.createElement("h2");
newHeading.innerText = "DOM Basics";

const newParagraph2 = document.createElement("p");
newParagraph2.innerText = "This was added through Javascript";

newSection.appendChild(newHeading);
newSection.appendChild(newParagraph2);
document.body.appendChild(newSection);

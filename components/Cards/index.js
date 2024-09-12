// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleEntry = document.querySelector(".cards-container");
const allCards = document.querySelectorAll(".card");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(results => {
    // console.log(results.data.articles);
    const articles = results.data.articles;

    Object.values(articles).forEach(url => {
      // console.log(url);
      url.forEach(data => {
        // console.log(data);
        const newCard = cardContent(data);
        articleEntry.appendChild(newCard);
      });
    });
  })
  .catch(error => {
    console.log(error);
  });

function cardContent(articleInfo) {
  const card = document.createElement("div");
  const cardHeadLine = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImageCon = document.createElement("div");
  const cardImg = document.createElement("img");
  const authorName = document.createElement("span");

  // **** CREATE STRUCTURE **** //

  card.appendChild(cardHeadLine);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImageCon);
  cardImageCon.appendChild(cardImg);
  cardAuthor.appendChild(authorName);

  // **** SET THE CONTENT **** //
  cardHeadLine.textContent = articleInfo.headline;
  authorName.textContent = articleInfo.authorName;
  cardImg.src = articleInfo.authorPhoto;

  // **** APPLY THE STYLES **** //
  card.classList.add("card");
  cardHeadLine.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImageCon.classList.add("img-container");
  // cardImg.classList.add("img");
  // authorName.classList.add("card-author-name");

  return card;
}

console.log(allCards);
allCards.forEach(card => {
  card.addEventListener("dblclick", event => {
    event.target.style.transform = "scale(1.3)";
    event.target.style.transiton = "transform 0.5";
    console.log(event.target);
  });
  card.addEventListener("click", event => {
    event.target.style.transform = "scale(1.0)";
    event.target.style.transiton = "transform 0.5";
  });
});

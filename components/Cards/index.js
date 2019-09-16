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

// makeArticleCards = async url => {
//   try {
//     let res = await axios.get(url);
//     res.data.article.forEach(cards => {
//       articleEntry.appendChild(cardContent(cards));
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// makeArticleCards("https://lambda-times-backend.herokuapp.com/articles");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(results => {
    console.log(results);
    results.data.articles.forEach(url => {
      const newCard = cardContent(url);
      articleEntry.appendChild(newCard);
    });
  })
  .catch(error => {
    console.log(error);
  });

function cardContent(articleInfo) {
  const card = document.createElement("div");
  const cardHeadLine = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImage = document.createElement("div");
  const authorName = document.createElement("span");

  // **** CREATE STRUCTURE **** //

  card.appendChild(cardHeadLine);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImage);
  cardAuthor.appendChild(authorName);

  // **** SET THE CONTENT **** //
  cardHeadLine.textContent = articleInfo.headline;
  authorName.textContent = articleInfo.authorName;
  cardImage.src = articleInfo.authorPhoto;

  // **** APPLY THE STYLES //
  card.classList.add("card");
  cardHeadLine.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImage.classList.add("image-container");
  // authorName.classList.add("card-author-name");

  return card;
}

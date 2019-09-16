// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabEntry = document.querySelector(".topics");

function tabs(tabInfo) {
  const tab = document.createElement("div");

  tab.classList.add("tab");

  tab.innerText = tabInfo;

  return tab;
}

maketabs = async url => {
  try {
    let rep = await axios.get(url);
    rep.data.topics.forEach(Tabs => {
      console.log(rep.data.topics);
      tabEntry.appendChild(tabs(Tabs));
    });
  } catch (err) {
    console.log(err);
  }
};

maketabs("https://lambda-times-backend.herokuapp.com/topics");

// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")
//   .then(results => {
//     // console.log(results);
//     results.data.topics.forEach(url => {
//       console.log(url);
//       const newTab = tabs(url);
//       // add it to our entry div
//       tabEntry.appendChild(newTab);
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });

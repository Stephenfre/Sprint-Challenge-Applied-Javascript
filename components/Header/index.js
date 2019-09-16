// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(headerInfo) {
  const headerContent = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  // **** CREATE STRUCTURE **** //
  headerContent.appendChild(headerDate);
  headerContent.appendChild(headerTitle);
  headerContent.appendChild(headerTemp);

  // **** SET THE CONTENT **** //
  headerDate.textContent = "March 28, 2019";
  headerTitle.textContent = "Lambda Times";
  headerTemp.textContent = "Temp 98";

  // **** APPLY THE STYLES //
  headerContent.classList.add("header");
  headerDate.classList.add("header-date");
  headerTitle.classList.add("header-title");
  headerTemp.classList.add("header-temp");

  return headerContent;
}

const header = document.querySelector(".header-container");

header.appendChild(Header("headerInfo"));

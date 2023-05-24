const loadHome = () => {
  const contentDiv = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "home");
  pageContent.setAttribute("id", "page-content");

  contentDiv.appendChild(pageContent);

  const filterBg = document.createElement("div");
  pageContent.appendChild(filterBg);
  filterBg.setAttribute("id", "filter");

  const elementsDiv = document.createElement("div");
  elementsDiv.setAttribute("id", "home-elements");
  pageContent.appendChild(elementsDiv);

  const restaurantTitle = document.createElement("h1");
  restaurantTitle.textContent = "ShiMura's";
  restaurantTitle.setAttribute("id", "title");
  elementsDiv.appendChild(restaurantTitle);

  const dishImg = document.createElement("img");
  dishImg.src = "/src/assets/imgs/miso-soup.png";
  dishImg.setAttribute("id", "dish");
  elementsDiv.appendChild(dishImg);
};

export default loadHome;

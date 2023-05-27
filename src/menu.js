const loadMenu = () => {
  const contentDiv = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "menu");
  pageContent.setAttribute("id", "page-content");

  contentDiv.appendChild(pageContent);

  const foodTitle = document.createElement("h1");
  pageContent.appendChild(foodTitle);
  foodTitle.innerHTML = "Shimura's Menu";
  foodTitle.setAttribute("id", "food-title");

  const foodList = document.createElement("ul");
  foodList.setAttribute("id", "food-list");
  pageContent.appendChild(foodList);

  const createFoodItem = (name, imgUrl, price) => {
    const foodItem = document.createElement("li");
    foodItem.setAttribute("class", "food-item");

    const foodImg = document.createElement("img");
    foodImg.src = imgUrl;
    foodItem.appendChild(foodImg);

    const foodDetails = document.createElement("div");
    foodDetails.setAttribute("class", "food-details");

    const foodName = document.createElement("span");
    foodName.setAttribute("class", "food-name");
    foodName.innerHTML = name;
    foodDetails.appendChild(foodName);

    const priceBox = document.createElement("div");
    priceBox.setAttribute("class", "price-box");

    const priceIcon = document.createElement("img");
    priceIcon.setAttribute("class", "price-icon")
    priceIcon.src = "/src/assets/imgs/coin.png";

    priceBox.appendChild(priceIcon);

    const foodPrice = document.createElement("span");
    foodPrice.setAttribute("class", "food-price");
    foodPrice.innerHTML = price;
    priceBox.appendChild(foodPrice);

    foodDetails.appendChild(priceBox);
    foodItem.appendChild(foodDetails);

    return foodItem;
  };

  const pickledFood = createFoodItem(
    "Pickled Treasure",
    "/src/assets/imgs/Item_Five_Pickled_Treasures.png",
    "9.99"
  );
  const sangaFood = createFoodItem(
    "Sangayaki",
    "/src/assets/imgs/Item_Sangayaki.png",
    "8.99"
  );
  const eggFood = createFoodItem(
    "Egg Roll",
    "/src/assets/imgs/Item_Egg_Roll.png",
    "7.99"
  );

  const ramenFood = createFoodItem(
    "Tonkotsu Ramen",
    "/src/assets/imgs/Item_Tonkotsu_Ramen.png",
    "10.99"
  );

  const omeletteFood = createFoodItem(
    "Omelette Rice",
    "/src/assets/imgs/Item_Omelette_Rice.png",
    "11.00"
  );

  const unagiFood = createFoodItem(
    "Unagi Chazuke",
    "/src/assets/imgs/Item_Unagi_Chazuke.png",
    "12.90"
  );

  foodList.appendChild(pickledFood);
  foodList.appendChild(sangaFood);
  foodList.appendChild(eggFood);
  foodList.appendChild(ramenFood);
  foodList.appendChild(omeletteFood);
  foodList.appendChild(unagiFood);
};

export default loadMenu;

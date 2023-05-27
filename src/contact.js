const loadContact = () => {
  const contentDiv = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "contact");
  pageContent.setAttribute("id", "page-content");

  contentDiv.appendChild(pageContent);

  const contactTitle = document.createElement("h1");
  contactTitle.innerHTML = "Come visit us!";
  contactTitle.setAttribute("id", "contact-title");
  pageContent.appendChild(contactTitle);

  const mapLocation = document.createElement("img");
  mapLocation.src = "/src/assets/imgs/location.png";
  mapLocation.setAttribute("id", "map-location");
  pageContent.appendChild(mapLocation);

  
};

export default loadContact;

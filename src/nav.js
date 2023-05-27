import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

const loadNav = () => {
  const contentDiv = document.querySelector("#content");
  const navContent = document.createElement("div");
  const navBar = document.createElement("nav");
  contentDiv.appendChild(navContent);
  navContent.appendChild(navBar);
  navBar.setAttribute("id", "nav");

  const navList = document.createElement("ul");
  navList.setAttribute("id", "list");
  navBar.appendChild(navList);

  const homeNav = document.createElement("li");
  const menuNav = document.createElement("li");
  const contactNav = document.createElement("li");

  contactNav.textContent = "CONTACT";
  menuNav.textContent = "MENU";
  homeNav.textContent = "HOME";

  navList.appendChild(homeNav);
  navList.appendChild(menuNav);
  navList.appendChild(contactNav);

  function clearPage() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector("#page-content");

    if (pageContent) {
      content.removeChild(pageContent);
    }
  }

  homeNav.addEventListener("click", () => {
    clearPage();
    loadHome();
  });

  menuNav.addEventListener("click", () => {
    clearPage();
    loadMenu();
  });
  
  contactNav.addEventListener("click", () => {
    clearPage();
    loadContact();
  });
};

export default loadNav;

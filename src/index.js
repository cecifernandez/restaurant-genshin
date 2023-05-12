import home from "./home";

const btnHome = document.createElement("button");

btnHome.addEventListener("click", () => {
  home();
});

document.body.appendChild(btnHome);

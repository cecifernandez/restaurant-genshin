function home() {
  const createHome = document.createElement("div");

  createHome.innerHTML = "home";

  document.body.appendChild(home());
}

export default home();

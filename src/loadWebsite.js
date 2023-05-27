import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";
import loadNav from "./nav";

function loadPage() {
  loadNav();
  loadContact();
}

export default loadPage;

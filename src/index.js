import "./style.css";
import createElement from "./util/createElement";
import { createNavbar } from "./navbar";
import { createHome } from "./home";
import createMenu from "./menu";
import createContact from "./contact";

const content = document.getElementById("content");
content.appendChild(createNavbar());
const navs = document.querySelectorAll(".nav-link");
navs.forEach((a) => {
  a.addEventListener("click", (e) => {
    navigateTo(e.target);
  });
});

/* *****************************  */
//content.appendChild(createHome());
/* *****************************  */

content.appendChild(createHome());

function navigateTo(destination) {
  //remove existing content on the page
  content.removeChild(content.childNodes[1]);
  //check which nav was clicked and populate page
  if (destination.id == "a-home") {
    content.appendChild(createHome());
  }
  if (destination.id == "a-menu") {
    content.appendChild(createMenu());
  }

  if (destination.id == "a-contact") {
    content.appendChild(createContact());
  }

  destination.classList.toggle("disabled");
  //enable the other destination links
  navs.forEach((a) => {
    if (a !== destination) {
      a.classList.remove("disabled");
    }
  });
}

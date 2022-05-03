import createElement from "./util/createElement";

//create navbar
const navbar = createElement("header", "header");

// logo
const logo = createElement("div", "nav-logo", "navbar", "The Blue Cat Lodge");

// list of links
const navList = createElement("ul", "", ["nav-list"]);
const navLinkBuilders = ["home", "menu", "contact"];
const navLinks = [];

navLinkBuilders.forEach((link) => {
  let li = createElement("li", `link-${link}`, "nav-item");
  let a = createElement("a", `a-${link}`, "nav-link", link);
  a.setAttribute("href", "#");
  li.appendChild(a);
  navLinks.push(li);
});

navLinks.forEach((element) => {
  navList.appendChild(element);
});

// brand icons + social
const facebook = createElement(
  "i",
  "facebook-icon",
  "icons fa-brands fa-facebook"
);
const instagram = createElement(
  "i",
  "instagram-icon",
  "icons fa-brands fa-instagram"
);

const iconContainer = createElement("div", "icon-container");
iconContainer.appendChild(facebook);
iconContainer.appendChild(instagram);

navbar.appendChild(logo);
navbar.appendChild(navList);
navbar.appendChild(iconContainer);

export { navbar };

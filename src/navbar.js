import createElement from "./util/createElement";

//create navbar
const navbar = createElement("header", "header");

// logo
const logo = createElement("div", "nav-logo", ["navbar"], "The Blue Cat");

// list of links
const navList = createElement("ul", "", ["nav-list"]);
const navLinkBuilders = ["home", "menu", "contact"];
const navLinks = [];

navLinkBuilders.forEach((link) => {
  navLinks.push(createElement("li", `link-${link}`, ["nav-links"], link));
});

navLinks.forEach((element) => {
  navList.appendChild(element);
});

// brand icons + social
const facebook = createElement("i", "facebook-icon", [
  "icons",
  "fa-brands",
  "fa-facebook",
]);
const instagram = createElement("i", "instagram-icon", [
  "icons",
  "fa-brands",
  "fa-instagram",
]);

const iconContainer = createElement("div", "icon-container");
iconContainer.appendChild(facebook);
iconContainer.appendChild(instagram);

navbar.appendChild(logo);
navbar.appendChild(navList);
navbar.appendChild(iconContainer);

export { navbar };

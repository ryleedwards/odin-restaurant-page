import createElement from "./util/createElement";

const navbar = createElement("header", "header");
const logo = createElement("div", "nav-logo", ["navbar"], "The Blue Cat");
const navList = createElement("ul", "", ["nav-list"]);
const navLinkBuilders = ["home", "menu", "contact"];
const navLinks = [];
for (let i = 0; i < navLinkBuilders.length; i++) {
  let name = navLinkBuilders[i];
  navLinks[i] = createElement("li", `link-${name}`, ["nav-links"], name);
}
navLinks.forEach((element) => {
  navList.appendChild(element);
});
navbar.appendChild(logo);
navbar.appendChild(navList);

export { navbar };

import createElement from "./util/createElement";
import loadMenuData from "./util/loadMenuData";
import { menu } from "./util/MenuItem";

function createMenu() {
  let mainBackgroundDiv = createElement("div", "main-background");
  let mainOverlayDiv = createElement("div", "main-overlay");

  // check to see if menus been populated yet
  // avoids duplicate menu appending
  if (menu.getMenu().length == 0) {
    loadMenuData();
  }
  let menuMainDiv = createElement("div", "", "menu main");

  menu.getMenu().forEach((item) => {
    let itemDiv = createElement("div", "", "menu item");
    let titleP = createElement("p", "", "item title", item.title);
    let descriptionP = createElement(
      "p",
      "",
      "item description",
      item.description
    );
    let priceP = createElement("p", "", "item price", item.price);
    itemDiv.appendChild(titleP);
    itemDiv.appendChild(descriptionP);
    itemDiv.appendChild(priceP);

    menuMainDiv.appendChild(itemDiv);
  });
  return menuMainDiv;
}

export default createMenu;

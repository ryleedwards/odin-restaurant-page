import menuCSV from "../assets/menu.csv";
import { menu, MenuItem, Food, Alcohol } from "./MenuItem";
import createElement from "./createElement";

function loadMenuData() {
  ingestCSV(menuCSV, menu);
  return createMenuHTML();
}

function ingestCSV(csv, destination) {
  csv.forEach((item) => {
    let title = item["Title"];
    let description = item["Description"];
    let price = item["Price"];
    let category = item["Category"];

    if (item["Category"] == "Food") {
      let protein = item["Protein (Food)"];
      let food = new Food(title, description, price, protein);
      destination.add(food);
    }
    if (item["Category"] == "Alcohol") {
      let base = item["Base (Alcohol)"];
      let alcohol = new Alcohol(title, description, price, base);
      destination.add(alcohol);
    }
  });
}

function createMenuHTML() {
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

export default loadMenuData;

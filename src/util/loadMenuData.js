import menuCSV from "../assets/menu.csv";
import { menu, MenuItem, Food, Alcohol } from "./MenuItem";

function loadMenuData() {
  console.log(menuCSV);
  menuCSV.forEach((item) => {
    let title = item["Title"];
    let description = item["Description"];
    let price = item["Price"];
    let category = item["Category"];

    if (item["Category"] == "Food") {
      let protein = item["Protein (Food)"];
      let food = new Food(title, description, price, protein);
      menu.add(food);
    }
    if (item["Category"] == "Alcohol") {
      let base = item["Base (Alcohol)"];
      let alcohol = new Alcohol(title, description, price, base);
      menu.add(alcohol);
    }
  });
  console.log(menu.getMenu());
}

export default loadMenuData;

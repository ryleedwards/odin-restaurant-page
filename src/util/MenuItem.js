const menu = (() => {
  const menuItems = [];

  const getMenu = () => {
    return menuItems;
  };

  const add = (menuItem) => {
    menuItems.push(menuItem);
  };

  const remove = (menuItem) => {
    menuItems.splice(menuItems.indexOf(menuItem));
  };

  return {
    getMenu,
    add,
    remove,
  };
})();

class MenuItem {
  constructor(title, description, price, category) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}

class Food extends MenuItem {
  constructor(title, description, price, protein) {
    super(title, description, price, "Food");
    this.protein = protein;
  }
}

class Alcohol extends MenuItem {
  constructor(title, description, price, base) {
    super(title, description, price, "Alcohol");
    this.base = base;
  }
}

export { menu, MenuItem, Food, Alcohol };

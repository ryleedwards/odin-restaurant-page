import createElement from "./util/createElement";

function createHome() {
  // create main div and apply back image, overlay, and content placeholder
  const main = createElement("div", "main");
  const mainBackground = createElement("div", "main-background");
  const mainOverlay = createElement("div", "main-overlay");
  const mainContent = createElement("div", "main-content");

  //content
  const greeting = createElement(
    "p",
    "",
    "greeting",
    "Ozark's Finest Lakeside Cuisine"
  );
  const address = createElement(
    "p",
    "",
    "greeting address",
    "721 Alhonna Dr. Osage, AR 72611"
  );
  const orderBtn = createElement("button", "", "btn order", "Order Online");

  mainContent.appendChild(greeting);
  mainContent.appendChild(address);
  mainContent.appendChild(orderBtn);

  main.appendChild(mainBackground);
  main.appendChild(mainOverlay);
  main.appendChild(mainContent);

  return main;
}

export { createHome };

import createElement from "./util/createElement";

const main = createElement("div", "", ["main"]);
const mainCenter = createElement("div", "", ["main-center"]);
const mainCenterOverlay = createElement("div", "", ["main-center-overlay"]);
main.appendChild(mainCenter);
main.appendChild(mainCenterOverlay);

export { main };

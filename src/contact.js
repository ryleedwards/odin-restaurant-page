import createElement from "./util/createElement";

function createContact() {
  const mainDiv = createElement("div", "", "main contact");
  const subDiv = createElement("div", "", "sub contact");
  const nameP = createElement("p", "", "", "Rachel Garrison");
  const emailP = createElement("p", "", "", "rgarrison@o.zark");
  const phoneP = createElement("p", "", "", "(555)-555-5555");
  subDiv.appendChild(nameP);
  subDiv.appendChild(emailP);
  subDiv.appendChild(phoneP);
  mainDiv.appendChild(subDiv);
  return mainDiv;
}

export default createContact;

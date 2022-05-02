import "./style.css";

const createElement = ({ type, id, classes, text }) => {
  //construct element object and assign args as attrs
  const element = document.createElement(type);
  if (id) element.id = id;
  if (classes) {
    classes.forEach((classItem) => element.classList.add(classItem));
  }
  if (text) element.innerText = text;

  return element;
};

let content = createElement({
  type: "div",
  id: "content",
});

document.body.appendChild(content);

export { createElement, content };

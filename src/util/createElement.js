function createElement(type, id, classes, text) {
  //construct element object and assign args as attrs
  const element = document.createElement(type);
  if (id) element.setAttribute("id", id);
  if (classes) element.setAttribute("class", classes);
  if (text) element.innerText = text;

  return element;
}

export default createElement;

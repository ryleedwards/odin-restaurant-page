function createElement(type, id, classes, text) {
  //construct element object and assign args as attrs
  const element = document.createElement(type);
  if (id) element.setAttribute("id", id);
  if (classes) {
    classes.forEach((classItem) => element.classList.add(classItem));
  }
  if (text) element.innerText = text;

  return element;
}

export default createElement;

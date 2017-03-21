function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let list = document.querySelectorAll("ul.ranked-list li");

  list.forEach((element, index, array) => {
    element.innerHTML = parseInt(element.innerHTML) + n;
  })
}

function deepestChild() {
  function findDeepestChild(element) {
    console.log("Element: " + element.nodeName);
    if (hasChildElement(element)) {
      return findDeepestChild(element.firstElementChild);
    } else {
      return element;
    }
  }

  function hasChildElement(element) {
    return element.firstElementChild ? true : false;
  }

  let grandNode = document.querySelector("#grand-node");

  return findDeepestChild(grandNode);
}

import "./index.less";
import data from "./components/article/article.js";
import "./components/menu/menu.js";
import menuItems from "./components/menu/menu.js";

function articleMaker({
  title,
  date,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
}) {
  const article = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const firstP = document.createElement("p");
  const secondP = document.createElement("p");
  const thirdP = document.createElement("p");
  const expandButton = document.createElement("span");

  article.classList.add("article");
  articleDate.classList.add("date");
  expandButton.classList.add("expandButton");

  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(firstP);
  article.appendChild(secondP);
  article.appendChild(thirdP);
  article.appendChild(expandButton);

  articleTitle.textContent = title;
  articleDate.textContent = date;
  firstP.textContent = firstParagraph;
  secondP.textContent = secondParagraph;
  thirdP.textContent = thirdParagraph;
  expandButton.textContent = "+";

  expandButton.addEventListener("click", () => {
    article.classList.toggle("article-open");
  });

  return article;
}

const articleObjects = data.map((obj) => articleMaker(obj));

const articles = document.querySelector(".articles");

articleObjects.forEach((obj) => articles.appendChild(obj));

function menuMaker(arr) {
  const menu = document.createElement("div");
  const unorderedList = document.createElement("ul");

  menu.classList.add("menu");
  menu.appendChild(unorderedList);
  arr.forEach((item) => {
    const list = document.createElement("li");
    list.textContent = item;
    unorderedList.appendChild(list);
  });

  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  });

  console.log(menu);
  return menu;
}
const header = document.querySelector(".header");
const newMenu = menuMaker(menuItems);

header.appendChild(newMenu);

import "./style.css";
import Header from "./header.js";
import Nav from "./nav.js";
import Home from "./home.js";
import Menu from "./menu.js";
import Info from "./info.js";

const content = document.querySelector(".content");

content.appendChild(Header());
content.appendChild(Home());
content.appendChild(Nav());

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const info = document.querySelector("#info");

home.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild(Home());
});

menu.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild(Menu());
});

info.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild(Info());
});

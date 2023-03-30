import "./style.css";
import Header from "./header.js";
import Nav from "./nav.js";
import Home from "./home.js";
import Menu from "./menu.js";
import Info from "./info.js";
import Espaco from "./espaco.js";

const content = document.querySelector(".content");

content.appendChild(Nav());
content.appendChild(Header());
content.appendChild(Home());

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const info = document.querySelector("#info");
const espaco = document.querySelector("#espaco");

home.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild(Home());
});

menu.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild(Menu());
});

espaco.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild(Espaco());
});

info.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild(Info());
});

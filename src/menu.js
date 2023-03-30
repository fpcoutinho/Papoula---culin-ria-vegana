import pratoSandra from "../imgs/prato-sandra.jpg";
import pratoCarol from "../imgs/prato-carol.jpg";
import pratoDaniela from "../imgs/prato-daniela.jpg";
import pratoNise from "../imgs/prato-nise.jpg";
import pratoThallita from "../imgs/prato-thallita.jpg";
import pratoTuira from "../imgs/prato-tuira.jpg";

const menu = () => {
  const menu = document.createElement("div");
  menu.classList.add("main");

  const intro = document.createElement("div");
  intro.classList.add("intro");
  const title = document.createElement("h1");
  title.textContent = "Confira nossos pratos";
  intro.appendChild(title);

  const feed = document.createElement("div");
  feed.classList.add("feed");

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");
  const infoImg = document.createElement("img");
  infoImg.setAttribute("src", pratoSandra);
  infoImg.setAttribute("alt", "prato-sandra");
  infoImg.setAttribute("width", "100%");
  infoWrap.appendChild(infoImg);

  const infoWrap2 = document.createElement("div");
  infoWrap2.classList.add("info-wrap");
  const infoImg2 = document.createElement("img");
  infoImg2.setAttribute("src", pratoCarol);
  infoImg2.setAttribute("alt", "prato-carol");
  infoImg2.setAttribute("width", "100%");
  infoWrap2.appendChild(infoImg2);

  const infoWrap3 = document.createElement("div");
  infoWrap3.classList.add("info-wrap");
  const infoImg3 = document.createElement("img");
  infoImg3.setAttribute("src", pratoDaniela);
  infoImg3.setAttribute("alt", "prato-daniela");
  infoImg3.setAttribute("width", "100%");
  infoWrap3.appendChild(infoImg3);

  const infoWrap4 = document.createElement("div");
  infoWrap4.classList.add("info-wrap");
  const infoImg4 = document.createElement("img");
  infoImg4.setAttribute("src", pratoNise);
  infoImg4.setAttribute("alt", "prato-nise");
  infoImg4.setAttribute("width", "100%");
  infoWrap4.appendChild(infoImg4);

  const infoWrap5 = document.createElement("div");
  infoWrap5.classList.add("info-wrap");
  const infoImg5 = document.createElement("img");
  infoImg5.setAttribute("src", pratoThallita);
  infoImg5.setAttribute("alt", "prato-thallita");
  infoImg5.setAttribute("width", "100%");
  infoWrap5.appendChild(infoImg5);

  const infoWrap6 = document.createElement("div");
  infoWrap6.classList.add("info-wrap");
  const infoImg6 = document.createElement("img");
  infoImg6.setAttribute("src", pratoTuira);
  infoImg6.setAttribute("alt", "prato-tuira");
  infoImg6.setAttribute("width", "100%");
  infoWrap6.appendChild(infoImg6);

  feed.appendChild(infoWrap);
  feed.appendChild(infoWrap2);
  feed.appendChild(infoWrap3);
  feed.appendChild(infoWrap4);
  feed.appendChild(infoWrap5);
  feed.appendChild(infoWrap6);

  menu.appendChild(intro);
  menu.appendChild(feed);

  return menu;
};

export default menu;

import equipe from "../imgs/equipe.png";
import goVegan from "../imgs/go-vegan.png";
import sagui from "../imgs/sagui.png";
import show from "../imgs/show.png";
import workshop from "../imgs/workshop.png";
import sandraGuimaraes from "../imgs/sandra-guimaraes1.png";
import feijoada from "../imgs/feijoada-cervejinha.png";
import atoPolitico from "../imgs/ato-politico.png";
import espacoLotado from "../imgs/espaco-lotado.png";
import espacoNatal from "../imgs/espaco-natal.png";
import pratoCheio from "../imgs/foto-prato-cheio.png";

const info = () => {
  const info = document.createElement("div");
  info.classList.add("main");

  const intro = document.createElement("div");
  intro.classList.add("intro");
  const title = document.createElement("h1");
  title.textContent = "Sobre o Papoula 💚";
  intro.appendChild(title);

  const feed = document.createElement("div");
  feed.classList.add("feed");

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");
  const infoTitle = document.createElement("h4");
  infoTitle.textContent = "Nossa equipe";
  const infoImg = document.createElement("img");
  infoImg.setAttribute("src", pratoTuira);
  infoImg.setAttribute("alt", "prato-tuira");
  infoImg.setAttribute("width", "100%");
  infoWrap.appendChild(infoImg);

  info.appendChild(intro);
  info.appendChild(feed);

  return info;
};

export default info;

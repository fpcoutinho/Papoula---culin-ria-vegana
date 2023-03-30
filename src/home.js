import cardapio from "../imgs/infos-cardapio-semana.jpg";
import horario from "../imgs/infos-horario-local.png";
import precos from "../imgs/infos-precos.jpg";
import pagamento from "../imgs/infos-formas-pagamento.png";

const home = () => {
  const home = document.createElement("div");
  home.classList.add("main");

  const intro = document.createElement("div");
  intro.classList.add("intro");
  const title = document.createElement("h1");
  title.textContent = "Seja bem-vindo ao";
  const subtitle = document.createElement("h2");
  subtitle.textContent = "Papoula Culinária Saudável 💚";
  intro.appendChild(title);
  intro.appendChild(subtitle);

  const feed = document.createElement("div");
  feed.classList.add("feed");

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");
  const infoTitle = document.createElement("h4");
  infoTitle.textContent = "Confira o nosso cardápio da semana";
  const infoImg = document.createElement("img");
  infoImg.setAttribute("src", cardapio);
  infoImg.setAttribute("alt", "cardapio");
  infoImg.setAttribute("width", "100%");
  infoWrap.appendChild(infoTitle);
  infoWrap.appendChild(infoImg);

  const infoWrap2 = document.createElement("div");
  infoWrap2.classList.add("info-wrap");
  const infoTitle2 = document.createElement("h4");
  infoTitle2.textContent = "Nossos horários de funcionamento";
  const infoImg2 = document.createElement("img");
  infoImg2.setAttribute("src", horario);
  infoImg2.setAttribute("alt", "horarios");
  infoImg2.setAttribute("width", "100%");
  infoWrap2.appendChild(infoTitle2);
  infoWrap2.appendChild(infoImg2);

  const infoWrap3 = document.createElement("div");
  infoWrap3.classList.add("info-wrap");
  const infoTitle3 = document.createElement("h4");
  infoTitle3.textContent = "Nossa política de preços";
  const infoImg3 = document.createElement("img");
  infoImg3.setAttribute("src", precos);
  infoImg3.setAttribute("alt", "preços");
  infoImg3.setAttribute("width", "100%");
  infoWrap3.appendChild(infoTitle3);
  infoWrap3.appendChild(infoImg3);

  const infoWrap4 = document.createElement("div");
  infoWrap4.classList.add("info-wrap");
  const infoTitle4 = document.createElement("h4");
  infoTitle4.textContent = "E as formas de pagamento";
  const infoImg4 = document.createElement("img");
  infoImg4.setAttribute("src", pagamento);
  infoImg4.setAttribute("alt", "pagamento");
  infoImg4.setAttribute("width", "100%");
  infoWrap4.appendChild(infoTitle4);
  infoWrap4.appendChild(infoImg4);

  feed.appendChild(infoWrap);
  feed.appendChild(infoWrap2);
  feed.appendChild(infoWrap3);
  feed.appendChild(infoWrap4);

  home.appendChild(intro);
  home.appendChild(feed);

  return home;
};

export default home;

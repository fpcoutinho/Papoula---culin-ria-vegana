import sagui from "../imgs/sagui.png";
import forro from "../imgs/forro.png";
import workshop from "../imgs/workshop.png";
import sandraGuimaraes from "../imgs/sandra-guimaraes1.png";
import feijoada from "../imgs/feijoada-cervejinha.png";
import espacoLotado from "../imgs/espaco-lotado.png";
import espacoCozinha from "../imgs/espaco-area-cozinha.png";

const espaco = () => {
  const espaco = document.createElement("div");
  espaco.classList.add("main");

  const intro = document.createElement("div");
  intro.classList.add("intro");
  const title = document.createElement("h1");
  title.textContent = "Nosso cantinho";
  intro.appendChild(title);

  const feed = document.createElement("div");
  feed.classList.add("feed");

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");
  const infoText = document.createElement("p");
  infoText.textContent =
    "Ao ar livre, sob a sombra da Mangueira, o espaço do Papoula é convidativo, acolhedor e tranquilo. Com um ambiente agradável e iluminado, o restaurante possui uma decoração vibrante e cheia de personalidade, com paredes coloridas, mesas de madeira rústica e plantas por toda parte. Perfeito para uma refeição tranquila ou um encontro com amigos e familiares.";

  const infoFigure = document.createElement("figure");
  const infoImg = document.createElement("img");
  const infoCaption = document.createElement("figcaption");
  infoCaption.textContent = "Espaço do Papoula";
  infoImg.setAttribute("src", espacoCozinha);
  infoImg.setAttribute("alt", "Espaço do Papoula.");
  infoImg.setAttribute("width", "100%");
  infoFigure.appendChild(infoImg);
  infoFigure.appendChild(infoCaption);

  const infoFigure2 = document.createElement("figure");
  const infoImg2 = document.createElement("img");
  const infoCaption2 = document.createElement("figcaption");
  infoCaption2.textContent = "O Papoula com casa cheia.";
  infoImg2.setAttribute("src", espacoLotado);
  infoImg2.setAttribute("alt", "Espaço lotado");
  infoImg2.setAttribute("width", "100%");
  infoFigure2.appendChild(infoImg2);
  infoFigure2.appendChild(infoCaption2);

  const infoFigureS = document.createElement("figure");
  const infoImgS = document.createElement("img");
  const infoCaptionS = document.createElement("figcaption");
  infoCaptionS.textContent = "Saguizinho se alimentando no pé de manga.";
  infoImgS.setAttribute("src", sagui);
  infoImgS.setAttribute("alt", "Saguizinho");
  infoImgS.setAttribute("width", "100%");
  infoFigureS.appendChild(infoImgS);
  infoFigureS.appendChild(infoCaptionS);

  infoWrap.appendChild(infoText);
  infoWrap.appendChild(infoFigure);
  infoWrap.appendChild(infoFigure2);
  infoWrap.appendChild(infoFigureS);

  const infoWrap2 = document.createElement("div");
  infoWrap2.classList.add("info-wrap");
  const infoText2 = document.createElement("p");
  infoText2.textContent =
    "O Papoula é um restaurante que oferece mais do que apenas comida vegana deliciosa. O local também promove uma série de eventos que visam educar e entreter seus clientes. Um exemplo é o workshop da inspiradora Sandra Guimarães, onde os participantes aprenderam a preparar sobremesas veganas deliciosas com ingredientes naturais.";
  const infoFigure3 = document.createElement("figure");
  const infoImg3 = document.createElement("img");
  const infoCaption3 = document.createElement("figcaption");
  infoCaption3.textContent =
    "Sandra Guimarães. Potiguar, militante e autora do blog papacapim.org";
  infoImg3.setAttribute("src", sandraGuimaraes);
  infoImg3.setAttribute("alt", "Sandra Guimarães");
  infoImg3.setAttribute("width", "100%");
  infoFigure3.appendChild(infoImg3);
  infoFigure3.appendChild(infoCaption3);

  const infoText3 = document.createElement("p");
  infoText3.textContent = `Além disso, a chef Adriana Barcellos já organizou um workshop de ceia de Natal vegana, onde os participantes puderam aprender a preparar uma ceia de Natal sem carne ou produtos de origem animal. O restaurante também promove eventos feministas, como o "Feminismo e Veganismo", onde os participantes discutem a intersecção desses dois movimentos.`;
  const infoFigure4 = document.createElement("figure");
  const infoImg4 = document.createElement("img");
  const infoCaption4 = document.createElement("figcaption");
  infoCaption4.textContent = "Cozinha e conversa, no Papoula.";
  infoImg4.setAttribute("src", workshop);
  infoImg4.setAttribute("alt", "Workshop");
  infoImg4.setAttribute("width", "100%");
  infoFigure4.appendChild(infoImg4);
  infoFigure4.appendChild(infoCaption4);

  const infoText4 = document.createElement("p");
  infoText4.textContent = `O Papoula ainda oferece eventos musicais, como a feijoada com forró do Escurinho, além de receber outras bandas que tocam diversos gêneros musicais. Todos esses eventos são uma ótima maneira de agradar aos clientes e educá-los sobre a culinária vegana e vegetariana, bem como fornecer um espaço de encontro e diversão para a comunidade local.`;
  const infoFigure5 = document.createElement("figure");
  const infoImg5 = document.createElement("img");
  const infoCaption5 = document.createElement("figcaption");
  infoCaption5.textContent = "Feijoada com cervejinha.";
  infoImg5.setAttribute("src", feijoada);
  infoImg5.setAttribute("alt", "Feijoada");
  infoImg5.setAttribute("width", "100%");

  infoFigure5.appendChild(infoImg5);
  infoFigure5.appendChild(infoCaption5);

  const infoFigure6 = document.createElement("figure");
  const infoImg6 = document.createElement("img");
  const infoCaption6 = document.createElement("figcaption");
  infoCaption6.textContent = "Pessoas dançando ao som do Forró do Escruinho.";
  infoImg6.setAttribute("src", forro);
  infoImg6.setAttribute("alt", "Forró");
  infoImg6.setAttribute("width", "100%");
  infoFigure6.appendChild(infoImg6);
  infoFigure6.appendChild(infoCaption6);

  infoWrap2.appendChild(infoText2);
  infoWrap2.appendChild(infoFigure3);
  infoWrap2.appendChild(infoText3);
  infoWrap2.appendChild(infoFigure4);
  infoWrap2.appendChild(infoText4);
  infoWrap2.appendChild(infoFigure5);
  infoWrap2.appendChild(infoFigure6);

  feed.appendChild(infoWrap);
  feed.appendChild(infoWrap2);

  espaco.appendChild(intro);
  espaco.appendChild(feed);

  return espaco;
};

export default espaco;

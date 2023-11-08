import plaquinha from "../imgs/plaquinha.png";
import adriana from "../imgs/adriana.png";
import vegetais from "../imgs/feira-organica.png";
import equipe from "../imgs/equipe.png";
import atoPolitico from "../imgs/ato-politico.png";

const info = () => {
  const info = document.createElement("div");
  info.classList.add("main");

  const intro = document.createElement("div");
  intro.classList.add("intro");
  const title = document.createElement("h1");
  title.textContent = "Sobre o Papoula";
  intro.appendChild(title);

  const feed = document.createElement("div");
  feed.classList.add("feed");

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");
  const infoText = document.createElement("p");
  infoText.textContent =
    "Localizado na Parahyba, no estado da Paraíba, o Papoula foi fundado em 2018 pela chef Adriana Barcellos.";
  const infoFigure = document.createElement("figure");
  const infoImg = document.createElement("img");
  const infoCaption = document.createElement("figcaption");
  infoCaption.textContent = "Plaquinha na entrada do Papoula";
  infoImg.setAttribute("src", plaquinha);
  infoImg.setAttribute("alt", "placa de entrada");
  infoImg.setAttribute("width", "100%");
  infoFigure.appendChild(infoImg);
  infoFigure.appendChild(infoCaption);
  infoWrap.appendChild(infoText);
  infoWrap.appendChild(infoFigure);

  const infoWrap2 = document.createElement("div");
  infoWrap2.classList.add("info-wrap");
  const infoFigure2 = document.createElement("figure");
  const infoImg2 = document.createElement("img");
  const infoCaption2 = document.createElement("figcaption");
  infoCaption2.textContent = "Adriana Barcellos, chef do Papoula";
  infoImg2.setAttribute("src", adriana);
  infoImg2.setAttribute("alt", "Adriana Barcellos");
  infoImg2.setAttribute("width", "100%");
  infoFigure2.appendChild(infoImg2);
  infoFigure2.appendChild(infoCaption2);
  const infoImg3 = document.createElement("img");
  infoImg3.setAttribute("src", atoPolitico);
  infoImg3.setAttribute("alt", "bandeira");
  infoImg3.classList.add("micro");

  const infoText2 = document.createElement("p");
  const infoText3 = document.createElement("p");
  infoText2.textContent =
    "A história do restaurante começa com a própria Adriana, que desde muito jovem se interessou pela culinária vegetariana e vegana. " +
    "Ela se formou em Gastronomia em Manaus e, depois de trabalhar em vários restaurantes pelo Brasil, decidiu abrir seu próprio estabelecimento na cidade da Parahyba.";

  infoText3.textContent = `O nome "Papoula" foi escolhido por Adriana por ser uma flor que simboliza a paz, a tranquilidade e a beleza, valores que ela considera importantes na alimentação e na vida em geral.`;

  infoWrap2.appendChild(infoText2);
  infoWrap2.appendChild(infoFigure2);
  infoWrap2.appendChild(infoText3);
  infoWrap2.appendChild(infoImg3);

  const infoWrap3 = document.createElement("div");
  infoWrap3.classList.add("info-wrap");
  const infoText4 = document.createElement("p");
  infoText4.textContent =
    "A chef e sua equipe prezam pela qualidade dos ingredientes, que são sempre frescos e orgânicos, comprados em feiras de agricultura familiar. ";
  const infoFigure4 = document.createElement("figure");
  const infoImg4 = document.createElement("img");
  const infoCaption4 = document.createElement("figcaption");
  infoCaption4.textContent = "Vegetais orgânicos e sustentáveis";
  infoImg4.setAttribute("src", vegetais);
  infoImg4.setAttribute("alt", "Vegetais Orgânicos");
  infoImg4.setAttribute("width", "100%");
  infoFigure4.appendChild(infoImg4);
  infoFigure4.appendChild(infoCaption4);
  infoWrap3.appendChild(infoText4);
  infoWrap3.appendChild(infoFigure4);

  const infoWrap4 = document.createElement("div");
  infoWrap4.classList.add("info-wrap");
  const infoText5 = document.createElement("p");
  infoText5.textContent =
    "A equipe do Papoula também é formada por pessoas que acreditam na importância de uma alimentação anti-exploratória e anti-capitalista. " +
    "Os trabalhadores do Papoula trazem um senso de comunidade e de pertencimento para o restaurante, que é um espaço de troca de experiências e de conhecimento." +
    "Além de serem profissionais extremamente qualificados, trazendo um atendimento impecável junto com a melhor comida da cidade!";
  const infoFigure5 = document.createElement("figure");
  const infoImg5 = document.createElement("img");
  const infoCaption5 = document.createElement("figcaption");
  infoCaption5.textContent = "Equipe do Papoula";
  infoImg5.setAttribute("src", equipe);
  infoImg5.setAttribute("alt", "Equipe do Papoula");
  infoImg5.setAttribute("width", "100%");
  infoFigure5.appendChild(infoImg5);
  infoFigure5.appendChild(infoCaption5);
  infoWrap4.appendChild(infoText5);
  infoWrap4.appendChild(infoFigure5);

  feed.appendChild(infoWrap);
  feed.appendChild(infoWrap2);
  feed.appendChild(infoWrap3);
  feed.appendChild(infoWrap4);

  info.appendChild(intro);
  info.appendChild(feed);

  return info;
};

export default info;

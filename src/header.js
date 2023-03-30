import logo from "../imgs/logo-sembg-vermelho.png";

const header = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  const img = document.createElement("img");
  img.src = logo;
  img.setAttribute("alt", "Logo");
  img.setAttribute("width", "60px");
  header.appendChild(img);

  return header;
};

export default header;

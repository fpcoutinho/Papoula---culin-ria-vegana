import logo from "../imgs/logo-sembg-vermelho.png";

const header = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  const img = document.createElement("img");
  img.src = logo;
  img.setAttribute("alt", "Logo");
  img.setAttribute("width", "60px");
  header.appendChild(img);

  //add menu with instagram and google maps links
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const insta = document.createElement("a");
  insta.setAttribute("href", "https://www.instagram.com/papoulaveg/");
  insta.setAttribute("target", "_blank");
  insta.classList.add("fa");
  insta.classList.add("fa-instagram");
  const maps = document.createElement("a");
  maps.setAttribute(
    "href",
    "https://www.google.com/maps/place/Papoula+Culin%C3%A1ria+Saud%C3%A1vel/@-7.1201149,-34.8381773,17z/data=!3m1!4b1!4m6!3m5!1s0x7acdd3666250707:0x7a4b3708052ab0a8!8m2!3d-7.1201149!4d-34.8381773!16s%2Fg%2F11f54j3_5p"
  );
  maps.setAttribute("target", "_blank");
  maps.classList.add("fa");
  maps.classList.add("fa-map-marker");
  menu.appendChild(insta);
  menu.appendChild(maps);
  header.appendChild(menu);

  return header;
};

export default header;

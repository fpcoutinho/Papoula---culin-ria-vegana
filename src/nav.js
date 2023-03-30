const nav = () => {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");

  const home = document.createElement("span");
  home.setAttribute("id", "home");
  home.classList.add("material-symbols-outlined");
  home.textContent = "home";
  const menu = document.createElement("span");
  menu.setAttribute("id", "menu");
  menu.classList.add("material-symbols-outlined");
  menu.textContent = "restaurant_menu";
  const info = document.createElement("span");
  info.setAttribute("id", "info");
  info.classList.add("material-symbols-outlined");
  info.textContent = "info";

  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(info);

  return navbar;
};

export default nav;

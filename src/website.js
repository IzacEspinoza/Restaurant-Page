import loadHomeTab from "./home";
import loadMenuTab from "./menu";
import loadContactTab from "./contact";

//all default webcontent will be here, e.g: nav bar, menus, footers

const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header");
    
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Super Cool Restaurant";

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
};
const createNav = () => {
    const nav = document.createElement("nav");
    nav.classList.add("nav-bar");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("tab-button");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(homeBtn);
        loadHomeTab();
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("tab-button");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;//pretty much saying if this tab is already active, just return it(mayeb it reloads it? just keep saem active?)
        setActiveButton(menuBtn);
        loadMenuTab();
    });

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("tab-button");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(contactBtn);
        loadContactTab();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
};
const setActiveButton = (button) => {
    const navButtons = document.querySelectorAll(".tab-button");
  
    navButtons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}
const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Izac Espinoza`;

    const gitHubLink = documetn.createElement("a");
    gitHubLink.href = "https://github.com/IzacEspinoza";

    footer.appendChild(copyright);
    footer.appendChild(gitHubLink);
}
const initializeWebsite = () => {
    //load up the site, embed into #content
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".tab-button"));
    loadHomeTab();
}
export default initializeWebsite;
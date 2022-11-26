//This will be the tab that displays a menu for the user, loads on button/tab click
const createMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuContent = document.createElement("h1");
    menuContent.textContent = "This is the menu tab";
    menu.appendChild(menuContent);
    return menu;
};

const loadMenuTab = () => {
    const currentContent = document.getElementById("content");
    currentContent.textContent = '';
    currentContent.appendChild(createMenu());
};

export default loadMenuTab;
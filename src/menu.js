
const createMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuContent = document.createElement("h1");
    menuContent.textContent = "Menu";
    menu.appendChild(menuContent);

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    menuGrid.appendChild(createMenuItem("pizza", "Delicious Pizza straight from the country of Italia, Yummy!"));
    menuGrid.appendChild(createMenuItem("cake", "Scrumptious fluffy cake made by local bakery."));
    menuGrid.appendChild(createMenuItem("steak", "Choice cut of Ribeye, served with sides, Delicious!"));
    menuGrid.appendChild(createMenuItem("mashed-potatoes", "Soft serve fluffy mashed potatoes, perfect side for any dish."));
    menuGrid.appendChild(createMenuItem("spaghetti", "Classic Italian pasta meal, oh yeah!"));
    menuGrid.appendChild(createMenuItem("garlic_bread", "Crunchy and tasteful bread toasted with garlic cloves and herbs, a great side!"));

    menu.appendChild(menuGrid);
    return menu;
};
const createMenuItem = (itemName, itemDescription) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = itemName;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = itemDescription;

    const foodImage = document.createElement("img");
    foodImage.src = `./assets/images/${itemName}.png`;
    foodImage.alt = `${itemName} image`;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodImage);

    return menuItem;
};
const loadMenuTab = () => {
    const currentContent = document.querySelector(".main");
    currentContent.textContent = '';
    currentContent.appendChild(createMenu());
};
export default loadMenuTab;
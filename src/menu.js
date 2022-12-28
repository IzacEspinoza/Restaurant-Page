
const createMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuContent = document.createElement("h1");
    menuContent.textContent = "Menu";
    menu.appendChild(menuContent);

    //Create a grid of images here?
    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    //append menu items made from the function
    menuGrid.appendChild(createMenuItem("pizza", "taste like shit"));
    menuGrid.appendChild(createMenuItem("cake", "taste like booty"));
    menuGrid.appendChild(createMenuItem("steak", "taste like pussy"));
    menuGrid.appendChild(createMenuItem("mashed", "taste like stuffs"));
    menuGrid.appendChild(createMenuItem("spaghetti", "taste like foood"));
    menuGrid.appendChild(createMenuItem("garlic_bread", "taste like death"));

    menu.appendChild(menuGrid);
    return menu;
};
//create a function that creates menu items for you
const createMenuItem = (itemName, itemDescription) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = itemName;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = itemDescription;

    const foodImage = document.createElement("img");
    foodImage.src = `./assets/images/${itemName}.png`;//./assets/images/restaurant.png
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
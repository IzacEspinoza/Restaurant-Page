//all default webcontent will be here, e.g: nav bar, menus, footers
const createHeader = () => {
    //create the sites header
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
    //create the main navigation here
};

const createFooter = () => {
    //create the footer fo th site
}

const initializeWebsite = () => {
    //load up the site, embed into #content
}
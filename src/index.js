
import loadHomeTab from "./home";
import loadContactTab from "./contact";
import loadMenuTab from "./menu";
import initializeWebsite from "./website";

//Default to the home tab when the page is loaded or refreshed
window.onload = (e) => {
    //loadHomeTab();
    //initialize
    initializeWebsite();
    //loadContactTab();
    //loadMenuTab();
};

//event listeners for tab buttons
//on click, they will call the appropriate loaders



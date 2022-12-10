
import loadHomeTab from "./home";
import loadContactTab from "./contact";
import loadMenuTab from "./menu";

//function to create Nav bar for the site
const navBar = () =>{
    //create the nav bar elements: nav, ul-->li's(tabs for different pages)
    //Append this nav bar and stuff to #content
}

//Default to the home tab when the page is loaded or refreshed
window.onload = (e) => {
    loadHomeTab();
    //loadContactTab();
    //loadMenuTab();
};

//event listeners for tab buttons
//on click, they will call the appropriate loaders


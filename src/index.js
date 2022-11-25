//Content div in HTMl
const content = document.getElementById("content");
//Create these elements for our html using JS, and append when page is laoded
// image(img), headline(h1), and some copy(p) about how wonderful the restaurant is
const image = document.createElement("img");
const headline = document.createElement("h1");
const description = document.createElement("p");

//Do this when window first loads up
window.onload = (e) => {
    console.log("Welcome to the resturatnt you slut");
    //append elements to #content when page loads up
    content.appendChild(image);
    content.appendChild(headline);
    content.appendChild(description);
};


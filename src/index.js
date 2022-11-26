//Content div in HTMl
const content = document.getElementById("content");
//Create these elements for our html using JS, and append when page is laoded
// image(img), headline(h1), and some copy(p) about how wonderful the restaurant is
const image = document.createElement("img"); 
const headline = document.createElement("h1");
const description = document.createElement("p");
//Do this when window first loads up
window.onload = (e) => {
    //set image src 
    image.setAttribute('src', './assets/images/restaurant.png');
    //append elements to #content when page loads up
    content.appendChild(image);
    content.appendChild(headline);
    //set headlines text content
    headline.textContent = "Welcome to the Restaurant!";
    content.appendChild(description);
    //set some text for it 
    description.textContent = "This is probably most likeley and definiteley a maybe possibility that this will be the best restauratn you will have ever been to.  Enjoy!";
};


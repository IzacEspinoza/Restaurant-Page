
const createHome = () => {
  const home = document.createElement("div");
  home.classList.add("home");

  const homeContent = document.createElement("h1");
  homeContent.textContent = "Home";
  home.appendChild(homeContent);
  
  const restaurantImg = document.createElement("img");
  restaurantImg.classList.add("restaurant-Pic");
  restaurantImg.src = "./assets/images/restaurant.png";
  restaurantImg.alt = "restaurant";
  
  home.appendChild(restaurantImg);
  home.appendChild(makeHeadLine("Welcome to the restaurant!"));
  home.appendChild(
    makeParagraph(
      "This will be the best place you ever eat at!  Most likeley at least, we hope. Here you will be treated to some delicous and amazing food, all prepared by the amazing chef Klutzeus, renowned Husky and Klutz."
    )
  );

  return home;
};
const makeHeadLine = (text) => {
  const header = document.createElement("h1");
  header.textContent = text;
  return header;
};
const makeParagraph = (text) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
};
const loadHomeTab = () => {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(createHome());
};
export default loadHomeTab;

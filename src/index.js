import "./styles.css";
import { homePage } from "./home-page/home-page.js";
import { menuPage } from "./menu-page/menu-page.js";

const header = document.querySelector('.header');

const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

const main = document.getElementById('main-content');

const home = homePage.createHomePage();
main.append(home);
homeButton.addEventListener('click', () => {
    main.textContent = '';
    main.append(home);
});

menuButton.addEventListener('click', () => {
    main.textContent = '';
    const menuPage = menuPage.createMenuPage();
    main.append(menuPage);
});



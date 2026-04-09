import "./styles.css";
import { homePage } from "./home-page/home-page.js";
import { menuPage } from "./menu-page/menu-page.js";
import { contactPage } from "./contact-page/contact-page.js";

const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

const main = document.getElementById('main-content');

const home = homePage.createHomePage();
main.append(home);
homeButton.addEventListener('click', () => {
    main.replaceChildren();
    main.append(home);
});

const menu = menuPage.createMenuPage();
menuButton.addEventListener('click', () => {
    main.replaceChildren();
    main.append(menu);
});

const contact = contactPage.createContactPage();
contactButton.addEventListener('click', () => {
    main.replaceChildren();
    main.append(contact);
});



import "./styles.css";
import { paragraphs } from "./home-page/home-page.js";


const header = document.querySelector('.header');

const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

const main = document.getElementById('main-content');

createHomePage();
homeButton.addEventListener('click', createHomePage);


function createHomePage() {
    main.textContent = '';
    main.classList.add('content');

    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = paragraphs.firstParagraph;

    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = paragraphs.secondParagraph;

    const thirdParagraph = document.createElement('p');
    thirdParagraph.textContent = paragraphs.thirdParagraph;

    main.append(firstParagraph, secondParagraph, thirdParagraph);
}

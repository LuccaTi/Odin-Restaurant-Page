import "./styles.css";
import { initialPageCreator } from "./initial-page/initial-page.js";

const container = document.querySelector('.container');
const mainContent = initialPageCreator.createMainContent();
const footer = initialPageCreator.createFooter();
container.append(mainContent, footer);

import "./styles.css";

let initialPageCreator = {
    createMainContent() {
        const main = document.createElement('main');
        main.classList.add('content');

        let firstParagraph = document.createElement('p');
        firstParagraph.textContent = "Em Asgard existem guerreiros muito poderosos que são responsáveis por cuidar da paz entre os nove reinos da mitologia nórdica, todos são gerenciados e comandados pelo 'All Father' Odin."
        main.append(firstParagraph);

        let secondParagraph = document.createElement('p');
        secondParagraph.textContent = "O 'pai de todos' sabe da importância de fornecer os recursos necessários para seus guerreiros construirem corpos fortes e saudáveis, então ele reúne os conhecimentos culinários de todos os reinos para que em Asgard sejam oferecidas apenas as melhores refeições em todos os banquetes."
        main.append(secondParagraph);

        let thirdParagraph = document.createElement('p');
        thirdParagraph.textContent = "O restaurante 'Odin Recipes' nasceu dessa intenção benfeitora do pai de todos e de sua consideração com a importância da culinária na nutrição dos guerreiros e na criação de vínculos que uma boa refeição sempre vai contribuir, aqui vamos reunir as receitas asgardianas mais importantes e mostrar como fazê-las para que todos tenham acesso a uma alimentação digna de um guerreiro!";
        main.append(thirdParagraph);

        return main;
    },

    createFooter() {
        const footer = document.createElement('footer');
        footer.classList.add('credits');

        let link = document.createElement('a');
        link.href = "https://www.deviantart.com/ofthedunes/art/Viking-Hall-1020577679";
        link.target = "_blank";
        link.textContent = "OfTheDunes";

        footer.append("Background: 'Viking Hall' by ", link, " - Licensed under CC-BY-NC-ND 3.0");
        return footer;
    }
}

export { initialPageCreator };
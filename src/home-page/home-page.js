import "./styles.css";

const homePage = {

    createHomePage() {

        const homeDiv = document.createElement('div');
        homeDiv.classList.add('content');

        let firstParagraph = "Em Asgard existem guerreiros muito poderosos que são responsáveis por cuidar da paz entre os nove reinos da mitologia nórdica, todos são gerenciados e comandados pelo 'All Father' Odin.";

        let secondParagraph = "O 'pai de todos' sabe da importância de fornecer os recursos necessários para seus guerreiros construirem corpos fortes e saudáveis, então ele reúne os conhecimentos culinários de todos os reinos para que em Asgard sejam oferecidas apenas as melhores refeições em todos os banquetes.";

        let thirdParagraph = "O restaurante 'Odin Recipes' nasceu dessa intenção benfeitora do pai de todos e de sua consideração com a importância da culinária na nutrição dos guerreiros e na criação de vínculos que uma boa refeição sempre vai contribuir, aqui vamos reunir as receitas asgardianas mais importantes e mostrar como fazê-las para que todos tenham acesso a uma alimentação digna de um guerreiro!";


        const firstP = document.createElement('p');
        firstP.textContent = firstParagraph;

        const secondP = document.createElement('p');
        secondP.textContent = secondParagraph;

        const thirdP = document.createElement('p');
        thirdP.textContent = thirdParagraph;

        homeDiv.append(firstP, secondP, thirdP);
        
        return homeDiv;
    }
}


export { homePage };

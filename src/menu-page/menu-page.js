import "./styles.css";
import gravlaxImg from "./assets/images/dishes/Gravlax.jpg";
import smorrebrodImg from "./assets/images/dishes/Smørrebrød.jpg";
import kottbullarImg from "./assets/images/dishes/Köttbullar.jpg";
import farikalImg from "./assets/images/dishes/Fårikål.jpg";
import aebleskiverImg from "./assets/images/dishes/Æbleskiver.jpg";
import meadImg from "./assets/images/beverages/Mead.jpg";
import akvavitImg from "./assets/images/beverages/Akvavit.jpg";
import saftImg from "./assets/images/beverages/Saft.jpg";
import softDrinksImg from "./assets/images/beverages/Soft_Drinks.jpg";
import waterImg from "./assets/images/beverages/Water.jpg";


class MenuItem {
    constructor(name, price, description, image, type, credits, author) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.type = type;
        this.credits = credits;
        this.author = author;
    }
}

const gravlax = new MenuItem(
    'Gravlax',
    'R$ 42,00',
    'Fatias finas de salmão fresco curado em infusão de sal grosso, açúcar e endro. Servido com molho de mostarda adocicada e pão de centeio crocante.',
    gravlaxImg,
    'Dish',
    'https://www.pexels.com/pt-br/@matthew-osier-90237472/',
    'Matthew Osier');

const smørrebrød = new MenuItem(
    'Smørrebrød',
    'R$ 38,00',
    'Clássica fatia de pão de centeio (rugbrød) densa e amanteigada, coberta com arenque marinado, ovo cozido, cebola roxa, rabanetes e ervas frescas.',
    smorrebrodImg,
    'Dish',
    'https://www.pexels.com/pt-br/@anastasia-shuraeva/',
    'Anastasia Shuraeva');

const köttbullar = new MenuItem(
    'Köttbullar',
    'R$ 58,00',
    'Almôndegas artesanais de carne bovina e suína, servidas com purê de batatas aveludado, molho cremoso de carne e geleia de mirtilos silvestres (lingonberry).',
    kottbullarImg,
    'Dish',
    'https://www.pexels.com/pt-br/@yuraforrat/',
    'Yura Forrat');

const fårikål = new MenuItem(
    'Fårikål',
    'R$ 74,00',
    'Ensopado tradicional norueguês de cozimento lento, com generosos pedaços de cordeiro, repolho, grãos de pimenta preta e batatas cozidas.',
    farikalImg,
    'Dish',
    'https://www.pexels.com/pt-br/@zhang-thomas-710712620/',
    'Zhang Thomas');

const aebleskiver = new MenuItem(
    'Æbleskiver',
    'R$ 28,00',
    'Mini panquecas esféricas, leves e aeradas, polvilhadas com açúcar de confeiteiro. Acompanha geleia de framboesa e creme fresco.',
    aebleskiverImg,
    'Dish',
    'https://www.pexels.com/pt-br/@valeriya/',
    'Valeriya');

const hidromel = new MenuItem(
    'Hidromel',
    'R$ 32,00',
    'A lendária bebida dos deuses. Hidromel artesanal fermentado com mel silvestre, notas de especiarias e um toque floral levemente adocicado.',
    meadImg,
    'Beverage',
    'https://www.pexels.com/pt-br/@eva-bronzini/',
    'Eva Bronzini');

const aquavit = new MenuItem(
    'Aquavit',
    'R$ 26,00',
    'Destilado tradicional nórdico infusionado com sementes de cominho e endro. Servido gelado, ideal para acompanhar o Gravlax ou Smørrebrød.',
    akvavitImg,
    'Beverage',
    'https://www.pexels.com/pt-br/@minimoy/',
    'Moisés Fonseca');

const saft = new MenuItem(
    'Saft',
    'R$ 18,00',
    'Refresco natural de mirtilos vermelhos (lingonberries) colhidos nas florestas do norte. Uma bebida ácida, levemente doce e intensamente refrescante (Não alcoólica).',
    saftImg,
    'Beverage',
    'https://www.pexels.com/pt-br/@daria-andrievskaya-137434684/',
    'Daria Andrievskaya');

const refrigerantes = new MenuItem(
    'Refrigerantes',
    'R$ 8,00',
    'Coca-Cola, Guaraná ou Fanta (Uva/Laranja).',
    softDrinksImg,
    'Beverage',
    'https://www.pexels.com/pt-br/@gustavo-santana-3928789/',
    'Gustavo Santana');

const agua = new MenuItem(
    'Água',
    'R$ 8,00',
    'Com ou sem gás.',
    waterImg,
    'Beverage',
    'https://www.pexels.com/pt-br/@chris-f-38966/',
    'Chris F');

const menuPage = {
    createMenuPage() {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('content', 'menu');

        const createMenuDiv = () => {
            const div = document.createElement('div');
            div.classList.add('menu-div');
            return div;
        };

        const title = document.createElement('h2');
        title.textContent = 'Menu';
        const menuTitleDiv = createMenuDiv();
        menuTitleDiv.setAttribute('id', 'menu-title-div');
        menuTitleDiv.append(title);
        menuDiv.append(menuTitleDiv);

        const beveragesTitle = document.createElement('h3');
        beveragesTitle.textContent = 'Beverages';
        const menuBeverageDiv = createMenuDiv();
        menuBeverageDiv.classList.add('food-title');
        menuBeverageDiv.append(beveragesTitle);
        menuDiv.append(menuBeverageDiv);

        const beverages = [
            hidromel,
            aquavit,
            saft,
            refrigerantes,
            agua
        ]

        const createMenuItem = (itemName, itemPrice, itemDescription, itemImage, imageCredits, imageAuthor) => {
            const div = document.createElement('div');
            div.classList.add('menu-div', 'menu-item');

            const title = document.createElement('h3');
            title.textContent = itemName;

            const price = document.createElement('h3');
            price.textContent = itemPrice;

            const titlePriceDiv = document.createElement('div');
            titlePriceDiv.classList.add('title-price');
            titlePriceDiv.append(title, price);

            const description = document.createElement('p');
            description.textContent = itemDescription;

            const image = document.createElement('img');
            image.src = itemImage;
            image.alt = itemName;
            const figure = document.createElement('figure');
            const caption = document.createElement('figcaption');
            const link = document.createElement('a');
            link.href = imageCredits;
            link.target = '_blank';
            link.textContent = imageAuthor;
            link.classList.add('image-credits-link')
            caption.append(`${itemName} by `, link);
            figure.append(image, caption);

            const descriptionImageDiv = document.createElement('div');
            descriptionImageDiv.classList.add('description-image');
            descriptionImageDiv.append(description, figure);

            div.append(titlePriceDiv, descriptionImageDiv);
            return div;
        };

        beverages.forEach(item => {
            const menuItem = createMenuItem(item.name, item.price, item.description, item.image, item.credits, item.author);
            menuDiv.append(menuItem);
        });

        const sidesTitle = document.createElement('h3');
        sidesTitle.textContent = 'Sides';
        const menuSidesDiv = createMenuDiv();
        menuSidesDiv.classList.add('food-title');
        menuSidesDiv.append(sidesTitle);
        menuDiv.append(menuSidesDiv);

        const sides = [
            gravlax,
            smørrebrød
        ]

        sides.forEach(item => {
            const menuItem = createMenuItem(item.name, item.price, item.description, item.image, item.credits, item.author);
            menuDiv.append(menuItem);
        })

        const mainDishesTitle = document.createElement('h3');
        mainDishesTitle.textContent = 'Main Dishes';
        const menuMainDishesDiv = createMenuDiv();
        menuMainDishesDiv.classList.add('food-title');
        menuMainDishesDiv.append(mainDishesTitle);
        menuDiv.append(menuMainDishesDiv);

        const mainDishes = [
            köttbullar,
            fårikål
        ]

        mainDishes.forEach(item => {
            const menuItem = createMenuItem(item.name, item.price, item.description, item.image, item.credits, item.author);
            menuDiv.append(menuItem);
        })

        const dessertsTitle = document.createElement('h3');
        dessertsTitle.textContent = 'Desserts';
        const menuDessertsDiv = createMenuDiv();
        menuDessertsDiv.classList.add('food-title');
        menuDessertsDiv.append(dessertsTitle);
        menuDiv.append(menuDessertsDiv);

        const desserts = [
            aebleskiver
        ]

        desserts.forEach(item => {
            const menuItem = createMenuItem(item.name, item.price, item.description, item.image, item.credits, item.author);
            menuDiv.append(menuItem);
        })

        return menuDiv;
    }
}

export { menuPage };


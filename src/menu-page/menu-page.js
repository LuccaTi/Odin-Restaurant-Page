class MenuItem {
    constructor(itemName, price, description, photo, type) {
        this.itemName = itemName;
        this.price = price;
        this.description = description;
        this.photo = photo;
        this.type = type;
    }
}

const gravlax = new MenuItem(
    'Gravlax',
    'R$ 42,00',
    'Fatias finas de salmão fresco curado em infusão de sal grosso, açúcar e endro. Servido com molho de mostarda adocicada e pão de centeio crocante.',
    './assets/images/dishes/Gravlax.jpg',
    'Dish');

const smørrebrød = new MenuItem(
    'Smørrebrød',
    'R$ 38,00',
    'Clássica fatia de pão de centeio (rugbrød) densa e amanteigada, coberta com arenque marinado, ovo cozido, cebola roxa, rabanetes e ervas frescas.',
    './assets/images/dishes/Smørrebrød.jpg',
    'Dish');

const köttbullar = new MenuItem(
    'Köttbullar',
    'R$ 58,00',
    'Almôndegas artesanais de carne bovina e suína, servidas com purê de batatas aveludado, molho cremoso de carne e geleia de mirtilos silvestres (lingonberry).',
    './assets/images/dishes/Köttbullar.jpg',
    'Dish');

const fårikål = new MenuItem(
    'Fårikål',
    'R$ 74,00',
    'Ensopado tradicional norueguês de cozimento lento, com generosos pedaços de cordeiro, repolho, grãos de pimenta preta e batatas cozidas.',
    './assets/images/dishes/Fårikål.jpg',
    'Dish');

const aebleskiver = new MenuItem(
    'Æbleskiver',
    'R$ 28,00',
    'Mini panquecas esféricas, leves e aeradas, polvilhadas com açúcar de confeiteiro. Acompanha geleia de framboesa e creme fresco.',
    './assets/images/dishes/Æbleskiver.jpg',
    'Dish');

const hidromel = new MenuItem(
    'Hidromel',
    'R$ 32,00',
    'A lendária bebida dos deuses. Hidromel artesanal fermentado com mel silvestre, notas de especiarias e um toque floral levemente adocicado.',
    './assets/images/drinks/Hidromel.jpg',
    'Beverage');

const aquavit = new MenuItem(
    'Aquavit',
    'R$ 26,00',
    'Destilado tradicional nórdico infusionado com sementes de cominho e endro. Servido gelado, ideal para acompanhar o Gravlax ou Smørrebrød.',
    './assets/images/drinks/Aquavit.jpg',
    'Beverage');

const saft = new MenuItem(
    'Saft de Frutas Silvestres',
    'R$ 18,00',
    'Refresco natural de mirtilos vermelhos (lingonberries) colhidos nas florestas do norte. Uma bebida ácida, levemente doce e intensamente refrescante (Não alcoólica).',
    './assets/images/drinks/Saft.jpg',
    'Beverage');

const refrigerantes = new MenuItem(
    'Refrigerantes',
    'R$ 8,00',
    'Coca-Cola, Guaraná ou Fanta (Uva/Laranja).',
    './assets/images/drinks/Refrigerante.jpg',
    'Beverage');

const agua = new MenuItem(
    'Água',
    'R$ 8,00',
    'Com ou sem gás.',
    './assets/images/drinks/Agua.jpg',
    'Beverage');

const menuPage = {
    createMenuPage() {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('content');

        const createMenuItem = () => {
            const menuDiv = document.createElement('div');
            menuDiv.classList.add('menu-item');
            return menuDiv;
        };

        const title = document.createElement('h2');
        title.textContent = 'Menu';

        const beveragesTitle = document.createElement('h3');
        beveragesTitle.textContent = 'Beverages';

        const sidesTitle = document.createElement('h3');
        sidesTitle.textContent = 'Sides';

        const mainDishesTitle = document.createElement('h3');
        mainDishesTitle.textContent = 'Main Dishes';

        const items = [
            gravlax,
            smørrebrød,
            köttbullar,
            fårikål,
            aebleskiver,
            hidromel,
            aquavit,
            saft,
            refrigerantes,
            agua
        ]

        // Montagem
        

        return menuDiv;
    }
}

export { menuPage };


const { chefInv } = require("./fishMonger.js")


const fishMenu = () => {
    for (fish of chefInv) {
        console.log(`<h1>Menu</h1>
    <article class="menu">
            <h2>${fish.species}</h2>
                <section class="menu__item>">${fish.species} Soup</section>
                <section class="menu__item>">${fish.species} Sandwich</section>
                <section class="menu__item>">Grilled ${fish.species}</section>
    </article>`)
    }
};

newMenu = fishMenu()
console.log(newMenu)
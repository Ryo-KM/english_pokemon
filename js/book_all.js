const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 802; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        // console.log(results);
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    // console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

var vm = new Vue({
  el: '#app',

  data: {
    poke1:[],
    poke2:[]
  },
  methods: {
    AddCompare: function(){
      let poke1 = parseInt(this.poke1, 10);
      let poke2 = parseInt(this.poke2, 10);
      localStorage.setItem('poke1', JSON.stringify(poke1));
      localStorage.setItem('poke2', JSON.stringify(poke2));
      console.log(parseInt(this.poke1, 10));
    }
  }
})
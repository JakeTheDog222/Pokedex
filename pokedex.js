const names = ['', 'Bulbasaur','Ivysaur','Venusaur','Charmander','Charmeleon','Charizard','Squirtle','Wartortle','Blastoise','Caterpie','Metapod','Butterfree','Weedle','Kakuna','Beedrill','Pidgey','Pidgeotto','Pidgeot','Rattata','Raticate','Spearow','Fearow','Ekans','Arbok','Pikachu','Raichu','Sandshrew','Sandslash','Nidoran♀','Nidorina','Nidoqueen','Nidoran♂','Nidorino','Nidoking','Clefairy','Clefable','Vulpix','Ninetales','Jigglypuff','Wigglytuff','Zubat','Golbat','Oddish','Gloom','Vileplume','Paras','Parasect','Venonat','Venomoth','Diglett','Dugtrio','Meowth','Persian','Psyduck','Golduck','Mankey','Primeape','Growlithe','Arcanine','Poliwag','Poliwhirl','Poliwrath','Abra','Kadabra','Alakazam','Machop','Machoke','Machamp','Bellsprout','Weepinbell','Victreebel','Tentacool','Tentacruel','Geodude','Graveler','Golem','Ponyta','Rapidash','Slowpoke','Slowbro','Magnemite','Magneton','Farfetch’d','Doduo','Dodrio','Seel','Dewgong','Grimer','Muk','Shellder','Cloyster','Gastly','Haunter','Gengar','Onix','Drowzee','Hypno','Krabby','Kingler','Voltorb','Electrode','Exeggcute','Exeggutor','Cubone','Marowak'];

const descriptions = ['', 
  "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
  "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
  "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
  "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
  "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
  "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
  "When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely.",
  "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
  "A well-known power in water. It is said to be able to shoot water at a speed of over 60 mph.",
  "It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.",
  "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
  "This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
  "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
  "Often found in forests, eating leaves. It has a sharp horn that it uses to pick a fight.",
  "The dust-like scales covering its wings are color-coded to indicate the kinds of toxins it has.",
  "An aggressive Pokémon that is quick to attack. Its large venomous stingers are feared.",
  "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
  "When in a hurry, this Pokémon moves by extending its wings and catching the wind.",
  "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
  "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding dust.",
  "A Pokémon that has adapted well to urban environments. It is often seen scavenging for food.",
  "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
  "A Pokémon that wraps its tail in a coil when it is ready to strike. It is known to be aggressive.",
  "The frightening patterns on its belly have been studied. They are said to have an hypnotic effect.",
  "When it is angered, the electric sacs on its cheeks bristle with electricity.",
  "It raises its tail to check its surroundings. The tail is sometimes struck by lightning in this pose.",
  "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
  "It is skilled at slashing with its claws. It can even cut a steel sheet if it is angry or desperate.",
  "Female Pokémon with small horns. They are docile and rarely fight unless provoked.",
  "Female Pokémon with larger horns. They are protective of their young and will fight fiercely.",
  "Male Pokémon with small horns. They are docile and rarely fight unless provoked.",
  "Male Pokémon with larger horns. They are protective of their young and will fight fiercely.",
  "Known as the king of the Pokémon world. It has an impressive horn and a powerful roar.",
  "A fairy-type Pokémon that is popular for its cute appearance and magical abilities.",
  "Its fluffy tail is popular among trainers. It can generate heat to keep warm in cold places.",
  "Known for its beautiful tails that sparkle in the sunlight. It is very shy.",
  "A Pokémon that sings a lullaby to put its foes to sleep before attacking.",
  "It uses its powerful voice to attack. It can be heard from over 3 miles away.",
  "A Pokémon that uses ultrasonic waves to communicate and navigate in the dark.",
  "It emits a high-pitched cry that can shatter glass and cause headaches.",
  "A Pokémon that feeds on the nectar of flowers. It has a sweet aroma.",
  "It has a poisonous stinger on its tail. It uses it to defend itself from enemies.",
  "A Pokémon that can dig tunnels at high speed. It is rarely seen above ground.",
  "It has three heads and can dig through the ground with great speed.",
  "A Pokémon that is known for its cunning and ability to steal food from others.",
  "It has a beautiful fur coat and is very agile. It is a popular pet.",
  "A Pokémon that can swim at high speeds. It uses its webbed feet to propel itself.",
  "It has a powerful beak and sharp claws. It is a fierce hunter.",
  "A Pokémon that can generate psychic energy to attack its foes.",
  "It evolves into a more powerful psychic Pokémon with a larger brain.",
  "Known for its intelligence and psychic powers. It can teleport at will.",
  "A Pokémon that is strong and muscular. It is often used in battles.",
  "It has a tough body and powerful punches. It is very loyal to its trainer.",
  "A Pokémon that can lift heavy objects with ease. It is very strong.",
  "It has a long neck and can reach high places to eat leaves.",
  "A Pokémon that uses its vines to attack and defend itself.",
  "It has a bell-shaped flower on its head. It can release toxic pollen.",
  "A Pokémon that can shoot water from its mouth with great force.",
  "It has a hard shell and can withdraw its head and legs for protection.",
  "A Pokémon that can shoot poison from its mouth. It is very dangerous.",
  "It has a hard shell and sharp claws. It is a fierce fighter.",
  "A ghost-type Pokémon that can pass through walls and objects.",
  "It evolves into a more powerful ghost Pokémon with a sinister smile.",
  "Known for its mischievous nature and ghostly powers.",
  "A Pokémon that is made of rock and has a tough exterior.",
  "It can tunnel underground and cause earthquakes.",
  "A Pokémon that is very intelligent and can hypnotize its foes.",
  "It uses its psychic powers to put enemies to sleep.",
  "A Pokémon that has large claws and can swim very fast.",
  "It uses its claws to defend itself and catch prey.",
  "A Pokémon that looks like a ball and can explode when threatened.",
  "It evolves into a more powerful explosive Pokémon.",
  "A Pokémon that looks like a tree and can use psychic powers.",
  "It has a long neck and can use its psychic powers to attack.",
  "A Pokémon that wears a skull on its head. It is very protective.",
  "It uses its skull to protect itself and attack enemies."
];

const types = [[], ['grass', 'poison'], ['grass', 'poison'], ['grass', 'poison'], ['fire'], ['fire'], ['fire', 'flying'], ['water'], ['water'], ['water'], ['bug'], ['bug'], ['bug', 'flying'], ['bug', 'poison'], ['bug', 'poison'], ['bug', 'poison'], ['normal', 'flying'], ['normal', 'flying'], ['normal', 'flying'], ['normal'], ['normal'], ['normal', 'flying'], ['normal', 'flying'], ['poison'], ['poison'], ['electric'], ['electric'], ['ground'], ['ground'], ['poison'], ['poison'], ['poison', 'ground'], ['poison'], ['poison'], ['poison', 'ground'], ['fairy'], ['fairy'], ['fire'], ['fire'], ['normal', 'fairy'], ['normal', 'fairy'], ['poison', 'flying'], ['poison', 'flying'], ['grass', 'poison'], ['grass', 'poison'], ['grass', 'poison'], ['bug', 'grass'], ['bug', 'grass'], ['bug', 'poison'], ['bug', 'poison'], ['ground'], ['ground'], ['normal'], ['normal'], ['water'], ['water'], ['fighting'], ['fighting'], ['fire'], ['fire'], ['water'], ['water'], ['water'], ['psychic'], ['psychic'], ['psychic'], ['fighting'], ['fighting'], ['fighting'], ['grass', 'poison'], ['grass', 'poison'], ['grass', 'poison'], ['water', 'poison'], ['water', 'poison'], ['rock', 'ground'], ['rock', 'ground'], ['rock', 'ground'], ['fire'], ['fire'], ['water', 'psychic'], ['water', 'psychic'], ['electric', 'steel'], ['electric', 'steel'], ['normal', 'flying'], ['normal', 'flying'], ['water'], ['water'], ['poison'], ['poison'], ['water'], ['water'], ['ghost', 'poison'], ['ghost', 'poison'], ['ghost', 'poison'], ['rock', 'ground'], ['psychic'], ['psychic'], ['water'], ['water'], ['electric'], ['electric'], ['grass', 'psychic'], ['grass', 'psychic'], ['ground'], ['ground']];

const pokemonData = [...Array(100).keys()].map(i => {
  const id = i + 1;
  return {
    id,
    name: names[id],
    types: types[id],
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    height: `${4 + id % 3}'${id % 12}"`,
    weight: `${10 + id * 2} lbs`,
    category: "Seed",
    gender: id % 2 === 0 ? '♂' : '♀',
    abilities: ['Overgrow'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    description: descriptions[id],
    generation: 1
  };
});

const pokedex = document.getElementById('pokedex');
const modal = document.getElementById('pokemonModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
let currentIndex = 0;

const generationSelect = document.getElementById('generationSelect');
const generationHeader = document.getElementById('generationHeader');
const searchInput = document.getElementById('search');

function renderPokemonList() {
  pokedex.innerHTML = '';
  const selectedGen = parseInt(generationSelect.value);
  const query = searchInput.value.toLowerCase();

  const filteredPokemon = pokemonData.filter(pokemon => {
    return pokemon.generation === selectedGen && pokemon.name.toLowerCase().includes(query);
  });

  filteredPokemon.forEach((pokemon) => {
    const card = document.createElement('div');
    card.className = 'pokemon';
    card.innerHTML = `
      <img src="${pokemon.img}" alt="${pokemon.name}" />
      <h3>${pokemon.name}</h3>
      <div>${pokemon.types.map(t => `<span class="type type-${t}">${t}</span>`).join(' ')}</div>
    `;
    card.addEventListener('click', () => {
      currentIndex = pokemonData.indexOf(pokemon);
      showModal(pokemon);
    });
    pokedex.appendChild(card);
  });

  const genTextMap = {
    1: 'Generation I',
    2: 'Generation II',
    3: 'Generation III'
  };
  generationHeader.textContent = genTextMap[selectedGen] || 'Generation';
}

generationSelect.addEventListener('change', () => {
  renderPokemonList();
});

searchInput.addEventListener('input', () => {
  renderPokemonList();
});

// Initial render after all Pokémon are added
renderPokemonList();

function showModal(poke) {
  modalContent.innerHTML = `
    <div class="modal-details">
      <img src="${poke.img}" alt="${poke.name}" />
      <div class="info-block">
        <h2>${poke.name} (#${poke.id.toString().padStart(3, '0')})</h2>
        <p>${poke.description}</p>
        <p><strong>Height:</strong> ${poke.height}</p>
        <p><strong>Weight:</strong> ${poke.weight}</p>
        <p><strong>Category:</strong> ${poke.category}</p>
        <p><strong>Gender:</strong> ${poke.gender}</p>
        <p><strong>Abilities:</strong> ${poke.abilities.join(', ')}</p>
        <p><strong>Type:</strong> ${poke.types.map(t => `<span class="type type-${t}">${t}</span>`).join(' ')}</p>
        <p class="weaknesses"><strong>Weaknesses:</strong> ${poke.weaknesses.map(w => `<span class="type type-${w.toLowerCase()}">${w}</span>`).join(' ')}</p>
      </div>
    </div>
  `;
  modal.classList.add('show');
}

document.getElementById('prevBtn').onclick = () => {
  currentIndex = (currentIndex - 1 + pokemonData.length) % pokemonData.length;
  showModal(pokemonData[currentIndex]);
};

document.getElementById('nextBtn').onclick = () => {
  currentIndex = (currentIndex + 1) % pokemonData.length;
  showModal(pokemonData[currentIndex]);
};

closeModal.onclick = function () {
  modal.classList.remove('show');
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove('show');
  }
};

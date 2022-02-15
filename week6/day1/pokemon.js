const results = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
  },
  {
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
  },
  {
    name: "charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/",
  },
  {
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon/6/",
  },
  {
    name: "squirtle",
    url: "https://pokeapi.co/api/v2/pokemon/7/",
  },
  {
    name: "wartortle",
    url: "https://pokeapi.co/api/v2/pokemon/8/",
  },
  {
    name: "blastoise",
    url: "https://pokeapi.co/api/v2/pokemon/9/",
  },
  {
    name: "caterpie",
    url: "https://pokeapi.co/api/v2/pokemon/10/",
  },
  {
    name: "metapod",
    url: "https://pokeapi.co/api/v2/pokemon/11/",
  },
  {
    name: "butterfree",
    url: "https://pokeapi.co/api/v2/pokemon/12/",
  },
  {
    name: "weedle",
    url: "https://pokeapi.co/api/v2/pokemon/13/",
  },
  {
    name: "kakuna",
    url: "https://pokeapi.co/api/v2/pokemon/14/",
  },
  {
    name: "beedrill",
    url: "https://pokeapi.co/api/v2/pokemon/15/",
  },
  {
    name: "pidgey",
    url: "https://pokeapi.co/api/v2/pokemon/16/",
  },
  {
    name: "pidgeotto",
    url: "https://pokeapi.co/api/v2/pokemon/17/",
  },
  {
    name: "pidgeot",
    url: "https://pokeapi.co/api/v2/pokemon/18/",
  },
  {
    name: "rattata",
    url: "https://pokeapi.co/api/v2/pokemon/19/",
  },
  {
    name: "raticate",
    url: "https://pokeapi.co/api/v2/pokemon/20/",
  },
];

const container = document.querySelector(".container");

const printPokemon = (arr) => {
  let i = 1;
  for (pokemon of arr) {
    const { name, url } = pokemon;
    newPokemon = document.createElement("div");
    newPokemonName = document.createElement("p");
    newPokemonURL = document.createElement("a");
    newPokemonImage = document.createElement("img");
    newPokemonName.innerText = name;
    newPokemonURL.innerText = url;
    newPokemonURL.href = url;
    if (i < 10) {
      newPokemonImage.src = `https://urpgstatic.com/img_library/pokemon_sprites//00${i}.png`;
    } else {
      newPokemonImage.src = `https://urpgstatic.com/img_library/pokemon_sprites//0${i}.png`;
    }
    //can be done with ternary operator >> ?
    newPokemon.append(newPokemonName, newPokemonURL, newPokemonImage);
    container.append(newPokemon);
    i++;
  }
};

printPokemon(results);

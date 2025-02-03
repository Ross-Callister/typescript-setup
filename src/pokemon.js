export const pokemon = {
    pikachu: {
        name: 'Pikachu',
        type: 'Electric',
    },
    charmander: {
        name: 'Charmander',
        type: 'Fire',
    },
    squirtle: {
        name: 'Squirtle',
        type: 'Water',
    },
    bulbasaur: {
        name: 'Bulbasaur',
        type: 'Grass',
    },
    pidgey: {
        name: 'Pidgey',
        type: 'Flying',
    },
    jigglypuff: {
        name: 'Jigglypuff',
        type: 'Fairy',
    },
    meowth: {
        name: 'Meowth',
        type: 'Normal',
    },
    abra: {
        name: 'Abra',
        type: 'Psychic',
    },
}

export function getRandPokemon() {
    const keys = Object.keys(pokemon);
    return pokemon[keys[Math.floor(Math.random() * keys.length)]];
}

export function getPokemonByName(name) {
    return pokemon[name];
}
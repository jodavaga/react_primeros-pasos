// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );

const getHeroesById = (id) => {
    return heroes.find(hero => hero.id === id);
}

// console.log( getHeroesById(1) );

const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}

// console.table( getHeroesByOwner( owners[0]) );

// exports

export {
    getHeroesById,
    getHeroesByOwner
}
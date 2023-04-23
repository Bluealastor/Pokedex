import "./pokeList.css"
import { useEffect, useState,} from 'react';
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const PokeList = (user) => {
const [allPokemons,setAllPokemons] = useState([]);

const getAllPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=649&offset=0");
    const data = await res.json();

    const createPokemonObject = (results) => {
        results.forEach(async (pokemon) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const data = await res.json();
            setAllPokemons((currentList)=> [...currentList, data]);
            allPokemons.sort((a, b) => a.id - b.id);
        } )
    }
    createPokemonObject(data.results);
}

useEffect(() => {
    getAllPokemons();
    // console.log(allPokemons)

},[])

    return(
        <div className="app-container">
            <div className="pokemon-container">
                <div className="all-container">
                    {
                        allPokemons.map((pokemonStats, index) => (
                            <PokemonCard key={pokemonStats.name + index}
                            id={pokemonStats.id.toString().padStart(3, "0")}
                            image={pokemonStats.sprites.other["official-artwork"].front_default}
                            name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                            type={pokemonStats.types[0].type.name}
                            height={pokemonStats.height}
                            stats={pokemonStats.stats.map((stat)=> stat.base_stat).slice(0,3)}
                            statsName={pokemonStats.stats.map((stat) => stat.stat.name).slice(0,3)}
                            />
                        ))
                        
                    }
                    {
                        console.log(allPokemons)
                    }

                </div>
            </div>

        </div>
        )
}
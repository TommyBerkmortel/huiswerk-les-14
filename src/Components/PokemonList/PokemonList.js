import React, {useEffect, useState} from 'react';
import PokemonCard from "../PokemonCard/PokemonCard";
import axios from "axios";
import './PokemonList.css';

function PokemonList() {

    const [pokemon, setPokemon] = useState([]);
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon");

    useEffect(() => {
        async function getPokemonData() {
            try {
                const result = await axios.get(`${endpoint}`)
                console.log(result.data)
                setPokemon((result.data))
            } catch (e) {
                console.error(e)
            }
        }

        getPokemonData()
    }, [endpoint])

    return (
        <>

            <div className="buttons">
                <button
                    type="button"
                    onClick={() => setEndpoint(pokemon.previous)}
                    disabled={!pokemon.previous}
                >
                    Vorige
                </button>

                <button
                    type="button"
                    onClick={() => setEndpoint(pokemon.next)}
                    disabled={!pokemon.next}
                >
                    Volgende
                </button>

            </div>

            <div className="pokemon-list">
                {pokemon.results && pokemon.results.map((poke) => {
                    return <PokemonCard url={poke.url} key={poke.name}/>
                })}
            </div>

        </>
    );
}

export default PokemonList;
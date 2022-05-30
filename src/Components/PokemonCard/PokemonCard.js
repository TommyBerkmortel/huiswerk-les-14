import React, {useEffect, useState} from 'react';
import axios from "axios";
import './PokemonCard.css';


const PokemonCard =({url}) => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${url}`);
                /*console.log(result.data)*/
                setPokemonData(result.data)
            } catch (e) {
                console.error(e);
            }
        } fetchData()
    }, []);

    return (
        <>
            {Object.keys(pokemonData).length > 0 && <article className="pokemon-card">

            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_shiny} alt="pokemon"/>
            <span className="info"><h4>Moves:</h4> <p>{pokemonData.moves.length}</p></span>
            <span className="info"><h4>Weight:</h4> <p>{pokemonData.weight}</p></span>
            <h4>Abilities:</h4>
            <ul className="pokeMoves">
                {pokemonData.abilities.map((ability, index) => {
                    return <li  key={index}>{ability.ability.name}</li>
                })}
            </ul>
        </article>}

</>
    )

}
export default PokemonCard;

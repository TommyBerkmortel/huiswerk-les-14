import React from 'react';
import './App.css';
import logo from'../src/images/Pokemon_logo_PNG2.png'

import PokemonList from "./Components/PokemonList/PokemonList";



function App() {
    return (
        <div className="page-container">
          <header>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </header>

          <PokemonList/>
        </div>
    );

  }





export default App;

/*## Stappenplan
[v]  1. Zorg er eerst voor dat je één pokémon kaartje kunt laten zien op de pagina, bijvoorbeeld JigglyPuff (endpoint: ``https://pokeapi.co/api/v2/pokemon/jigglypuff``)
[v]  2. Verplaats vervolgens alle code voor het ophalen en weergeven van JigglyPuff naar een apart Pokémon component en gebruik deze in `App.js`.
[v]  3. Probeer nu dit component in `App.js` twee keer te gebruiken, één keer voor _JigglyPuff_ (endpoint: `https://pokeapi.co/api/v2/pokemon/jigglypuff`) en één keer voor
        _Ditto_ (endpoint: `https://pokeapi.co/api/v2/pokemon/ditto`). Wat moet je hiervoor aanpassen in het Pokémon component zodat hij generiek te gebruiken wordt?
[v]  4. Ga nu eens kijken hoe je een lijst van 20 pokémon namen kunt ophalen in `App.js`. Welk endpoint heb je dan nodig?
[v]  5. Map over deze resultaten heen en render voor elk resultaat een pokémon op de pagina!
[]  6. Maak twee knoppen en bekijk de documentatie voor het ophalen van een lijst van pokémons nog eens goed. Wanneer de gebruiker op 'volgende' klikt, willen we een nieuw request doen naar een nieuw endpoint.
    En we willen dat het ophalen van data getriggerd wordt, wanneer het endpoint wordt veranderd.*/

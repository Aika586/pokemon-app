import {useState,useEffect} from 'react'
import DisplayPokemons from './DisplayPokemons';

function App() {
  const [pokemons,setPokemons]=useState(null)

  useEffect(()=>{
 const API_URL = 'https://pokeapi.co/api/v2/berry/?limit=6';
  fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const pokemons = data.results;

    // Extract names and image URLs from the data
    const pokemonDetails = pokemons.map(pokemon => {
     
      return {
        name: pokemon.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.indexOf(pokemon) + 1}.png`, // Generating image URL based on Pokémon ID
      };
    });
    setPokemons(pokemonDetails)
   
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  },[])

  return (
    <>
      <DisplayPokemons pokemons={pokemons}/>
    </>
  )
}

export default App

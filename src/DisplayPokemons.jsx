import PropTypes from "prop-types"

export default function DisplayPokemons({pokemons}) {
 
  return (
    pokemons&& <div className="image-container">
      {pokemons.map((pokemons, index) => (
        <div key={index} className="image-cards" id={pokemons.name}>
          <img src={pokemons.imageUrl} alt={pokemons.name} />
          <h3>{pokemons.name}</h3>
         </div>
      ))}
    </div>
  );
}



DisplayPokemons.propTypes={
  pokemons:PropTypes.array
}

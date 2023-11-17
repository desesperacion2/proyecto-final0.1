// PokemonDetalle.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonDetalle = (props) => {
  const { id } = props.match.params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setPokemon(null);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <p>No se pudo cargar la información del Pokémon.</p>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonDetalle;

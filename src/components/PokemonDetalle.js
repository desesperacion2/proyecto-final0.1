// PokemonDetalle.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetalle = () => {
  const { id } = useParams();
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
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Precio: ${Math.floor(Math.random() * 100) + 1}</p>
      <h3>Tipo(s):</h3>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <h3>Versión(es) de juego:</h3>
      <ul>
        {pokemon.game_indices.map((game, index) => (
          <li key={index}>{game.version.name}</li>
        ))}
      </ul>
      <h3>Habilidades:</h3>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetalle;

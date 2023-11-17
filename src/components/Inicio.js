import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio = ({ addToCart }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const results = response.data.results;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
          })
        );

        setPokemonData(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  const generateRandomPrice = () => {
    return Math.floor(Math.random() * 100) + 1; // Genera un precio aleatorio entre 1 y 100
  };

  return (
    <div className="main-container">
      <div className="pokemon-table">
        {pokemonData.map((pokemon, index) => (
          <div key={index} className="pokemon-item">
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h3>{pokemon.name}</h3>
            </Link>
            <p>Precio: ${generateRandomPrice()}</p>
            <button onClick={() => addToCart(pokemon)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;

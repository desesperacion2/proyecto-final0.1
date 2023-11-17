import React from 'react';

const Carrito = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.sprites.front_default} alt={item.name} />
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>X</button> {/* Botón con X */}
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice}</p>
          <button>Comprar</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;

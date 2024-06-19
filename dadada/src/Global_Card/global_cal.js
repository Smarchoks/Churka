import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotalPrice(totalPrice + product.Price);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setTotalPrice(totalPrice - cart.find((item) => item.id === productId).Price);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
    setTotalPrice(totalPrice + (quantity - cart.find((item) => item.id === productId).quantity) * cart.find((item) => item.id === productId).Price);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.Title} />
            <h2>{product.Title}</h2>
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.Price}</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
            <button onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}>+</button>
            <button onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}>-</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Price: {totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
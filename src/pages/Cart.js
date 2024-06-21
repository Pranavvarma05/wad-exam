import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 25, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
    { id: 3, name: 'Product 3', price: 15, quantity: 3 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2>Your Cart</h2>
        {cartItems.map(item => (
          <div key={item.id} style={styles.item}>
            <span>{item.name}</span>
            <span>Price: ${item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Subtotal: ${item.price * item.quantity}</span>
          </div>
        ))}
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f0f0f0',
  },
  container: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
  },
  item: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
  },
};

export default Cart;

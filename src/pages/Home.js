import React from 'react';

const Home = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.heading}>Welcome to Our Store</h1>
      <p style={styles.text}>Explore our collection of products and find great deals!</p>
    </div>
  );
};

const styles = {
  pageContainer: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default Home;

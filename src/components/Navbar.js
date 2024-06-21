import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
        <p style={{color:'#fff'}}>Pranav-22071A0514</p>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.navLink}>Home</Link></li>
        <li><Link to="/register" style={styles.navLink}>Register</Link></li>
        <li><Link to="/login" style={styles.navLink}>Login</Link></li>
        <li><Link to="/cart" style={styles.navLink}>Cart</Link></li>
        <li><Link to="/catalogue" style={styles.navLink}>Catalogue</Link></li>
        <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
        <li><Link to="/about" style={styles.navLink}>About</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#900C3F ',
    padding: '10px 20px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'right',
    padding: 0,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '16px',
  },
};

export default Navbar;

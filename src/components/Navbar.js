import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMusicalNote } from "react-icons/io"; // Importing the music note icon

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    paddingRight: '30px',
  },
  logoTitle: {
    marginRight: 'auto',
    paddingLeft: '20px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '10px',
    color: '#fff',
    fontSize: '2rem', // You can adjust the size of the logo here
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '20px',
    transition: 'color 0.3s',
    margin: '0 20px', 
  },
  linkHover: {
    color: '#FFD700',
  },
};

// src/components/Navbar.js
// ...
function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <nav style={styles.nav}>
      <div style={styles.logoTitle}>
        <IoIosMusicalNote style={styles.logo} /> {/* Using the music note as logo */}
        <h1>Virtuso</h1>
      </div>
      {['/', '/explore', '/lesson', '/signin'].map((path, index) => (
        <Link 
          key={path}
          to={path}
          style={
            hoverIndex === index
              ? { ...styles.link, ...styles.linkHover }
              : styles.link
          }
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {path === '/' ? 'Home' : path.slice(1)}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;

// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../images/home.jpg';

const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundImage: `url(${home})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
  },
  header: {
    fontSize: '2em',
    color: '#fff',
    marginBottom: '10px',
  },
  subheader: {
    fontSize: '1.5em',
    color: '#fff',
    marginBottom: '20px',
  },
  button: {
    fontSize: '1.5em',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    backgroundColor: '#007BFF',
    cursor: 'pointer',
  },
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main style={styles.main}>
      <h1 style={styles.header}>Discover the Perfect Note at Virtuoso Music Learning!</h1>
      <p style={styles.subheader}>
      Unlock Your Musical Potential with Expert Guidance and Passionate Education   </p>
      <button style={styles.button} onClick={() => navigate("/signup")}>
        Enroll Now
      </button>
    </main>
  );
};

export default HomePage;
// SignInPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signinImage from '../images/signin.jpg'; 

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard', { state: { name: username } });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${signinImage})`,
    backgroundSize: 'cover',
    fontFamily: '"Lucida Console", Monaco, monospace', // Changing the font to a typewriter-like font for a vintage musical sheet vibe
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Changing the background to black with some transparency
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
    color: 'white', // Making the text color white
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Making the input fields slightly transparent
  };

  const buttonStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: 'none',
    background: 'linear-gradient(to right, #000, #fff)', // Gradient from black to white
    color: 'black',
    cursor: 'pointer',
  };

  const linkStyle = {
    color: '#fff', // Making the link color white
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: 'center' }}>Sign In</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={inputStyle} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />
        </label>
        <input type="submit" value="Sign In" style={buttonStyle} />
        <p>Don't have an account? <a href="/signup" style={linkStyle}>Register</a></p>
      </form>
    </div>
  );
};

export default SignInPage;

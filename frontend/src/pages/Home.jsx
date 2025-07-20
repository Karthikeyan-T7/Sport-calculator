import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Cricket Calculator</h1>
      <p style={styles.subheading}>Choose what you want to calculate:</p>
      <div style={styles.cardContainer}>
        <Link to="/batting" style={styles.card}>Batting Stats</Link>
        <Link to="/bowling" style={styles.card}>Bowling Stats</Link>
        <Link to="/runrate" style={styles.card}>Run Rate</Link>
        <Link to="/dls" style={styles.card}>DLS Calculation</Link>
        <Link to="/followon" style={styles.card}>Follow-on</Link>
        <Link to="/nrr" style={styles.card}>Net Run Rate</Link>
        <Link to="/projected" style={styles.card}>Projected Score</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    background: 'linear-gradient(to right, #4facfe, #00f2fe)', // Nice gradient background
    minHeight: '100vh',
    color: '#ffffff',
    fontFamily: 'Poppins, sans-serif',
  },
  heading: {
    fontSize: '48px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '40px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    textDecoration: 'none',
    padding: '20px 40px',
    backgroundColor: '#ffffff',
    color: '#3498db',
    borderRadius: '12px',
    fontSize: '20px',
    fontWeight: '600',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
  },
  cardHover: {
    transform: 'scale(1.05)',
    backgroundColor: '#2980b9',
    color: '#ffffff',
  }
};

export default Home;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Batting() {
  const [runs, setRuns] = useState('');
  const [balls, setBalls] = useState('');
  const [strikeRate, setStrikeRate] = useState(null);

  const [totalRuns, setTotalRuns] = useState('');
  const [innings, setInnings] = useState('');
  const [notOuts, setNotOuts] = useState('');
  const [average, setAverage] = useState(null);

  const calculateStrikeRate = () => {
    if (balls > 0) {
      setStrikeRate(((runs / balls) * 100).toFixed(2));
    } else {
      setStrikeRate('Invalid');
    }
  };

  const calculateAverage = () => {
    const dismissals = innings - notOuts;
    if (dismissals > 0) {
      setAverage((totalRuns / dismissals).toFixed(2));
    } else {
      setAverage('Invalid');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🏏 Batting Stats 🏏</h1>

      <div style={styles.cardsContainer}>

        {/* Strike Rate Card */}
        <div style={styles.card}>
          <h3>Strike Rate Calculator</h3>
          <input
            type="number"
            placeholder="Runs Scored"
            value={runs}
            onChange={(e) => setRuns(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Balls Faced"
            value={balls}
            onChange={(e) => setBalls(e.target.value)}
            style={styles.input}
          />
          <button onClick={calculateStrikeRate} style={styles.button}>
            Calculate Strike Rate
          </button>
          {strikeRate && (
            <div style={styles.resultBox}>
              Strike Rate: {strikeRate}
            </div>
          )}
        </div>

        {/* Average Card */}
        <div style={styles.card}>
          <h3>Batting Average Calculator</h3>
          <input
            type="number"
            placeholder="Total Runs"
            value={totalRuns}
            onChange={(e) => setTotalRuns(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Innings Played"
            value={innings}
            onChange={(e) => setInnings(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Not Out Innings"
            value={notOuts}
            onChange={(e) => setNotOuts(e.target.value)}
            style={styles.input}
          />
          <button onClick={calculateAverage} style={styles.button}>
            Calculate Average
          </button>
          {average && (
            <div style={styles.resultBox}>
              Batting Average: {average}
            </div>
          )}
        </div>

      </div>

      <Link to="/" style={styles.backButton}>Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #c3ecb2, #7ee8fa)',
  },
  heading: {
    fontSize: '40px',
    marginBottom: '30px',
    color: '#2c3e50',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    width: '300px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
  },
  resultBox: {
    marginTop: '15px',
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  backButton: {
    display: 'inline-block',
    marginTop: '40px',
    padding: '10px 20px',
    backgroundColor: '#e67e22',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
  },
};

export default Batting;
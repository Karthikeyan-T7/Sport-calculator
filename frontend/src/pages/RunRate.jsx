import React, { useState } from 'react';

function RunRate() {
  const [matchType, setMatchType] = useState('T20');
  const [targetScore, setTargetScore] = useState('');
  const [currentScore, setCurrentScore] = useState('');
  const [oversCompleted, setOversCompleted] = useState('');
  const [currentRunRate, setCurrentRunRate] = useState(null);
  const [requiredRunRate, setRequiredRunRate] = useState(null);

  const calculateRunRates = () => {
    const totalOvers = matchType === 'T20' ? 20 : 50;

    if (targetScore && currentScore && oversCompleted) {
      const currRate = (parseFloat(currentScore) / parseFloat(oversCompleted)).toFixed(2);
      const reqRate = ((parseFloat(targetScore) - parseFloat(currentScore)) / (totalOvers - parseFloat(oversCompleted))).toFixed(2);

      setCurrentRunRate(currRate);
      setRequiredRunRate(reqRate);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Run Rate Calculator</h2>

        <div style={styles.field}>
          <label style={styles.label}>Select Match Type:</label>
          <select value={matchType} onChange={(e) => setMatchType(e.target.value)} style={styles.input}>
            <option value="T20">T20 (20 overs)</option>
            <option value="ODI">ODI (50 overs)</option>
          </select>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Target Score:</label>
          <input
            type="number"
            value={targetScore}
            onChange={(e) => setTargetScore(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Current Score:</label>
          <input
            type="number"
            value={currentScore}
            onChange={(e) => setCurrentScore(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Overs Completed:</label>
          <input
            type="number"
            value={oversCompleted}
            onChange={(e) => setOversCompleted(e.target.value)}
            style={styles.input}
          />
        </div>

        <button onClick={calculateRunRates} style={styles.button}>Calculate</button>

        {currentRunRate !== null && requiredRunRate !== null && (
          <div style={styles.result}>
            <p><strong>Current Run Rate:</strong> {currentRunRate}</p>
            <p><strong>Required Run Rate:</strong> {requiredRunRate}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#e0f7fa',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
    width: '400px',
    textAlign: 'center',
  },
  title: {
    color: '#00796b',
    marginBottom: '20px',
    fontSize: '28px',
  },
  field: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    fontWeight: 'bold',
    color: '#006064',
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#00796b',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  result: {
    marginTop: '30px',
    fontSize: '18px',
    color: '#004d40',
  }
};

export default RunRate;
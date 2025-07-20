import React, { useState } from 'react';

function NetRunRate() {
  const [runsScored, setRunsScored] = useState('');
  const [oversFaced, setOversFaced] = useState('');
  const [runsConceded, setRunsConceded] = useState('');
  const [oversBowled, setOversBowled] = useState('');
  const [nrr, setNrr] = useState(null);

  const calculateNRR = () => {
    const scored = parseFloat(runsScored);
    const faced = parseFloat(oversFaced);
    const conceded = parseFloat(runsConceded);
    const bowled = parseFloat(oversBowled);

    if (faced > 0 && bowled > 0) {
      const result = (scored / faced) - (conceded / bowled);
      setNrr(result.toFixed(2));
    } else {
      setNrr('Invalid input');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Net Run Rate (NRR) Calculator</h1>
      <div style={styles.form}>
        <input type="number" placeholder="Total Runs Scored" value={runsScored} onChange={e => setRunsScored(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Total Overs Played" value={oversFaced} onChange={e => setOversFaced(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Total Runs Conceded" value={runsConceded} onChange={e => setRunsConceded(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Total Overs Bowled" value={oversBowled} onChange={e => setOversBowled(e.target.value)} style={styles.input} />
        <button onClick={calculateNRR} style={styles.button}>Calculate NRR</button>
      </div>
      {nrr !== null && (
        <div style={styles.result}>
          Net Run Rate: <strong>{nrr}</strong>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#e8f4f8',
    minHeight: '100vh',
    textAlign: 'center',
  },
  heading: {
    color: '#2c3e50',
    fontSize: '32px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px',
    backgroundColor: '#2980b9',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '25px',
    fontSize: '22px',
    color: '#27ae60',
  },
};

export default NetRunRate;
import React, { useState } from 'react';

function DLS() {
  const [format, setFormat] = useState('T20');
  const [team1Runs, setTeam1Runs] = useState('');
  const [team1Overs, setTeam1Overs] = useState('');
  const [team2OversAvailable, setTeam2OversAvailable] = useState('');
  const [team2OversPlayed, setTeam2OversPlayed] = useState('');
  const [targetScore, setTargetScore] = useState(null);

  const handleCalculate = () => {
    if (!team1Runs || !team1Overs || !team2OversAvailable) {
      alert("Please fill all mandatory fields!");
      return;
    }

    let resourcePercentage = 1;
    const maxOvers = format === 'T20' ? 20 : 50;

    if (team2OversAvailable < maxOvers) {
      resourcePercentage = team2OversAvailable / maxOvers;
    }

    let parScore = parseFloat(team1Runs) * resourcePercentage;
    let finalTarget = Math.ceil(parScore + 1);

    setTargetScore(finalTarget);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>DLS Target Calculator</h1>

      <div style={styles.card}>
        <label style={styles.label}>Match Format:</label>
        <div style={styles.radioGroup}>
          <label>
            <input
              type="radio"
              value="T20"
              checked={format === 'T20'}
              onChange={() => setFormat('T20')}
            />
            T20
          </label>
          <label>
            <input
              type="radio"
              value="ODI"
              checked={format === 'ODI'}
              onChange={() => setFormat('ODI')}
            />
            ODI
          </label>
        </div>

        <label style={styles.label}>Team 1 Runs:</label>
        <input
          type="number"
          value={team1Runs}
          onChange={(e) => setTeam1Runs(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Team 1 Overs Played:</label>
        <input
          type="number"
          value={team1Overs}
          onChange={(e) => setTeam1Overs(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Team 2 Overs Available:</label>
        <input
          type="number"
          value={team2OversAvailable}
          onChange={(e) => setTeam2OversAvailable(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Team 2 Overs Played (optional):</label>
        <input
          type="number"
          value={team2OversPlayed}
          onChange={(e) => setTeam2OversPlayed(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button} onClick={handleCalculate}>Calculate Target</button>

        {targetScore !== null && (
          <div style={styles.result}>
            <h2>New Target for Team 2: {targetScore} Runs</h2>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    background: 'linear-gradient(to bottom, #74ebd5, #ACB6E5)',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '38px',
    marginBottom: '30px',
    color: '#2c3e50',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    display: 'inline-block',
    textAlign: 'left',
    width: '90%',
    maxWidth: '450px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    marginTop: '15px',
    color: '#34495e',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '15px',
    fontSize: '15px',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '14px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    fontSize: '17px',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
  result: {
    marginTop: '25px',
    backgroundColor: '#dff9fb',
    padding: '18px',
    borderRadius: '10px',
    color: '#130f40',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '20px',
  },
};

export default DLS;
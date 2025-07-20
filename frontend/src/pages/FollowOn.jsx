import React, { useState } from 'react';

function FollowOn() {
  const [team1Score, setTeam1Score] = useState('');
  const [team2Score, setTeam2Score] = useState('');
  const [day, setDay] = useState('1');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    const lead = parseInt(team1Score) - parseInt(team2Score);
    const followOnThreshold = 200; // Fixed threshold for simplicity
    if (lead >= followOnThreshold) {
      setResult(`Follow-on is applicable. Lead is ${lead}`);
    } else {
      setResult(`Follow-on not applicable. Lead is only ${lead}`);
    }
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        <h2>Follow-on Calculator</h2>
        <select value={day} onChange={(e) => setDay(e.target.value)} style={styles.input}>
          <option value="1">Day 1</option>
          <option value="2">Day 2</option>
          <option value="3">Day 3</option>
          <option value="4">Day 4</option>
          <option value="5">Day 5</option>
        </select>
        <input type="number" placeholder="Team 1 Total Score" value={team1Score} onChange={(e) => setTeam1Score(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Team 2 Total Score" value={team2Score} onChange={(e) => setTeam2Score(e.target.value)} style={styles.input} />
        <button onClick={handleSubmit} style={styles.button}>Check Follow-on</button>
        {result && <p style={styles.result}>{result}</p>}
      </div>
    </div>
  );
}

const styles = {
  pageBackground: {
    backgroundColor: '#fdebd0',
    minHeight: '100vh',
    paddingTop: '40px'
  },
  container: {
    backgroundColor: '#fef9e7',
    maxWidth: '500px',
    margin: 'auto',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0px 6px 14px rgba(0,0,0,0.1)'
  },
  input: {
    padding: '10px',
    width: '80%',
    margin: '10px 0',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#d35400',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  result: {
    marginTop: '20px',
    backgroundColor: '#f9e79f',
    padding: '15px',
    borderRadius: '8px',
    fontWeight: 'bold'
  }
};

export default FollowOn;
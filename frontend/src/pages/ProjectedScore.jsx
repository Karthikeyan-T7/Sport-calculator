import React, { useState } from 'react';

function ProjectedScore() {
  const [runs, setRuns] = useState('');
  const [oversPlayed, setOversPlayed] = useState('');
  const [totalOvers, setTotalOvers] = useState('');
  const [expectedRunRate, setExpectedRunRate] = useState('');
  const [projectedScore, setProjectedScore] = useState(null);

  const calculateScore = () => {
    const r = parseFloat(runs);
    const o = parseFloat(oversPlayed);
    const t = parseFloat(totalOvers);
    const e = parseFloat(expectedRunRate);

    let output = {
      basedOnCurrent: Math.round(r / o * t),
      basedOnExpected: e ? Math.round(r + (t - o) * e) : null,
    };

    setProjectedScore(output);
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        <h2>Projected Score Calculator</h2>
        <input type="number" placeholder="Runs Scored" value={runs} onChange={e => setRuns(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Overs Played" value={oversPlayed} onChange={e => setOversPlayed(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Total Overs (20/50)" value={totalOvers} onChange={e => setTotalOvers(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Expected Run Rate (Optional)" value={expectedRunRate} onChange={e => setExpectedRunRate(e.target.value)} style={styles.input} />
        <button onClick={calculateScore} style={styles.button}>Calculate</button>

        {projectedScore && (
          <div style={styles.result}>
            <p><strong>Projected Score (Current Run Rate):</strong> {projectedScore.basedOnCurrent}</p>
            {projectedScore.basedOnExpected !== null && (
              <p><strong>Projected Score (Expected Run Rate):</strong> {projectedScore.basedOnExpected}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  pageBackground: {
    backgroundColor: '#d6eaf8', // Light blue
    minHeight: '100vh',
    paddingTop: '40px',
  },
  container: {
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: '#ecf0f1', // Light gray card
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '500px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
  },
  input: {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px'
  },
  result: {
    backgroundColor: '#dff9fb',
    marginTop: '20px',
    padding: '15px',
    borderRadius: '8px'
  }
};

export default ProjectedScore;
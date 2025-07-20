import React, { useState } from 'react';

function BowlingStats() {
  const [averageRuns, setAverageRuns] = useState('');
  const [averageWickets, setAverageWickets] = useState('');
  const [averageResult, setAverageResult] = useState(null);

  const [ecoRuns, setEcoRuns] = useState('');
  const [ecoOvers, setEcoOvers] = useState('');
  const [ecoResult, setEcoResult] = useState(null);

  const [srBalls, setSrBalls] = useState('');
  const [srWickets, setSrWickets] = useState('');
  const [srResult, setSrResult] = useState(null);

  const [balls, setBalls] = useState('');
  const [overResult, setOverResult] = useState(null);

  const calculateAverage = () => {
    if (averageWickets === '0' || averageWickets === '') return setAverageResult("Invalid wickets");
    const result = (parseInt(averageRuns) / parseInt(averageWickets));
    setAverageResult(result.toFixed(2));
  };

  const calculateEconomy = () => {
    if (ecoOvers === '0' || ecoOvers === '') return setEcoResult("Invalid overs");
    const result = (parseInt(ecoRuns) / parseFloat(ecoOvers));
    setEcoResult(result.toFixed(2));
  };

  const calculateStrikeRate = () => {
    if (srWickets === '0' || srWickets === '') return setSrResult("Invalid wickets");
    const result = (parseInt(srBalls) / parseInt(srWickets));
    setSrResult(result.toFixed(2));
  };

  const calculateOvers = () => {
    const ballsInt = parseInt(balls);
    const overs = Math.floor(ballsInt / 6);
    const remBalls = ballsInt % 6;
    setOverResult(`${overs}.${remBalls}`);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Bowling Stats Calculator</h1>

      {/* Average */}
      <div style={styles.section}>
        <h2>Bowling Average</h2>
        <input type="number" placeholder="Total Runs Conceded" value={averageRuns} onChange={(e) => setAverageRuns(e.target.value)} />
        <input type="number" placeholder="Wickets Taken" value={averageWickets} onChange={(e) => setAverageWickets(e.target.value)} />
        <button onClick={calculateAverage}>Calculate</button>
        {averageResult && <p>Average: {averageResult}</p>}
      </div>

      {/* Economy */}
      <div style={styles.section2}>
        <h2>Bowling Economy</h2>
        <input type="number" placeholder="Total Runs Conceded" value={ecoRuns} onChange={(e) => setEcoRuns(e.target.value)} />
        <input type="number" placeholder="Overs Bowled" value={ecoOvers} onChange={(e) => setEcoOvers(e.target.value)} />
        <button onClick={calculateEconomy}>Calculate</button>
        {ecoResult && <p>Economy Rate: {ecoResult}</p>}
      </div>

      {/* Strike Rate */}
      <div style={styles.section3}>
        <h2>Bowling Strike Rate</h2>
        <input type="number" placeholder="Balls Bowled" value={srBalls} onChange={(e) => setSrBalls(e.target.value)} />
        <input type="number" placeholder="Wickets Taken" value={srWickets} onChange={(e) => setSrWickets(e.target.value)} />
        <button onClick={calculateStrikeRate}>Calculate</button>
        {srResult && <p>Strike Rate: {srResult}</p>}
      </div>

      {/* Over Calculation */}
      <div style={styles.section4}>
        <h2>Overs Calculation</h2>
        <input type="number" placeholder="Enter total balls bowled" value={balls} onChange={(e) => setBalls(e.target.value)} />
        <button onClick={calculateOvers}>Convert</button>
        {overResult && <p>Overs: {overResult}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
    color: '#2c3e50',
    marginBottom: '30px',
  },
  section: {
    backgroundColor: '#fef3c7',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  section2: {
    backgroundColor: '#d1fae5',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  section3: {
    backgroundColor: '#e0f2fe',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  section4: {
    backgroundColor: '#fbcfe8',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  }
};

export default BowlingStats;
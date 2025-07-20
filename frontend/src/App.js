import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Batting from './pages/Batting';
import Bowling from './pages/Bowling';
import RunRate from './pages/RunRate';
import DLS from './pages/DLS';
import FollowOn from './pages/FollowOn';
import NRRCalculator from './pages/NRRCalculator';
import ProjectedScore from './pages/ProjectedScore';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batting" element={<Batting />} />
        <Route path="/bowling" element={<Bowling />} />
        <Route path="/runrate" element={<RunRate />} />
        <Route path="/dls" element={<DLS />} />
        <Route path="/followon" element={<FollowOn />} />
        <Route path="/nrr" element={<NRRCalculator />} />
        <Route path="/projected" element={<ProjectedScore />} />
      </Routes>
    </Router>
  );
}

export default App;
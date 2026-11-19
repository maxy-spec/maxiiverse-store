import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CandidatePage from './pages/CandidatePage';
import EmployerPage from './pages/EmployerPage';
import JobsPage from './pages/JobsPage';
import TalentDiscoveryPage from './pages/TalentDiscoveryPage';
import ProfilePage from './pages/ProfilePage';
import ApplicationPage from './pages/ApplicationPage';
import MatchingPage from './pages/MatchingPage';

function App() {
  return (
    &lt;Router&gt;
      &lt;div className="app"&gt;
        &lt;Header /&gt;
        &lt;main className="main-content"&gt;
          &lt;Routes&gt;
            &lt;Route path="/" element={&lt;HomePage /&gt;} /&gt;
            &lt;Route path="/candidates" element={&lt;CandidatePage /&gt;} /&gt;
            &lt;Route path="/employers" element={&lt;EmployerPage /&gt;} /&gt;
            &lt;Route path="/jobs" element={&lt;JobsPage /&gt;} /&gt;
            &lt;Route path="/talent" element={&lt;TalentDiscoveryPage /&gt;} /&gt;
            &lt;Route path="/profile/:id" element={&lt;ProfilePage /&gt;} /&gt;
            &lt;Route path="/apply/:jobId" element={&lt;ApplicationPage /&gt;} /&gt;
            &lt;Route path="/matching" element={&lt;MatchingPage /&gt;} /&gt;
          &lt;/Routes&gt;
        &lt;/main&gt;
        &lt;Footer /&gt;
      &lt;/div&gt;
    &lt;/Router&gt;
  );
}

export default App;

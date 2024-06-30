import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import ParticipantsPage from './pages/ParticipantsPage';

const App = () => {
  return (
      <Router>
          <div className="p-4">
              <nav className="space-x-4">
                  <Link to="/" className="text-blue-500">Events</Link>
                  <Link to="/participants" className="text-blue-500">Participants</Link>
              </nav>
              <Routes>
                  <Route path="/" element={<EventsPage />} />
                  <Route path="/participants" element={<ParticipantsPage />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
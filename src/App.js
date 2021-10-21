import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './components/pages/Home/home';

function App() {
  return (
    <Router>
      <div className="page">
        <Sidebar />
        <Home />
      </div>
    </Router>
  );
}

export default App;

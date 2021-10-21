import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './sidebar';
import Home from '../src/components/pages/Home/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Home />

      </div>
    </Router>
  );
}

export default App;

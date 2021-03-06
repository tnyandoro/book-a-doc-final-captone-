/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/configurestore';
import Doctors from './components/pages/Doctors/doctors';
import Sidebar from './Sidebar';
import Home from './components/pages/Home/home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page container">
          <Doctors />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

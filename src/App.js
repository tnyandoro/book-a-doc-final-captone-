/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/configurestore';
import Doctors from './components/pages/Doctors/doctors';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <div className="doctors" style={{ marginLeft: '300px' }}>
            <Doctors />
          </div>
        </>
      </Provider>
    );
  }
}

export default App;

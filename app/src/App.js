import React from 'react';
import './App.sass';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes';
import { Provider as AuthProvider } from './Components/Context/Auth';
import { Provider as DataProvider } from './Components/Context/Data';
import Header from './Components/fixed-areas/Header';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <DataProvider>
            <Header />
            <Routes />
          </DataProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AMA from './components/AMA/ama';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={AMA}></Route>
        <footer>&copy; Copyright of Wakanda <br></br>Designed by Bhatta | Backend by Abhay | Frontend by Uddhav</footer>
      </div>
    </Router>
    
  );
}

export default App;

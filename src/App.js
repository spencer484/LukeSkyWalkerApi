import React from 'react';
import './App.css';
import { Router } from '@reach/router';

// COMPONENTS
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';

// VIEWS
import SearchBar from "./views/SearchBar";



function App() {
  return (
    <div className="App">
      <SearchBar />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import Snowman from './components/Snowman';
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'
function App() {
  return (
    <div className="App">
      <Snowman />

    </div>
  );
}

export default App;

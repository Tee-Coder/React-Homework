import React from 'react';
import LOGIN from './webpage-component/LOGIN'
import TheModalForm from './webpage-component/TheModalForm'
import Navbar from './webpage-component/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar name = "" />
      <LOGIN />
      <TheModalForm/>
      
    </div>
  );
}

export default App;


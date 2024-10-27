import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import HomeScreen from "./screens/HomeScreen"


function App() {
  return (
    <div>
    <Header/>
    <main>
      <HomeScreen/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;

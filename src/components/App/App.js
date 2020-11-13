import React, {useEffect, useState } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';
import Player from '../Player/Player';

function App() {

  useEffect(() => {
    
  }, []);


  // const functionName = async () => {
    
  // }

  return (
    <div className="App">
      <NavBar />
      <div className="flexContainer">
        <SideBar />
        <div className="right">
          <Content />
          <Player />
        </div>
        
      </div>
    </div>
  );
}

export default App;

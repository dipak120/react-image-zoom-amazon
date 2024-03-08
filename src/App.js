import React from 'react';
import ZoomImage from './ZoomImage'; // Import the ZoomImage component

const App = () => {
  return (
    <div className="App">
      <ZoomImage 
        src="https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg" 
        alt="Main Image" 
        thumbnail="https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg" 
        className="custom-class" 
      />
    </div>
  );
};

export default App;

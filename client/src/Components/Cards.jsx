import React from 'react';
import back from '../assets/profile_background.png'


const Cards = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
  };

  const columnStyle = {
    flex: 1,
    padding: '10px',
  };

  const leftStyle = {
    backgroundColor: '#e0e0e0', // Set your background color for the left side
  };

  const rightStyle = {
    backgroundColor: '#ffffff', // Set your background color for the right side
  };

  const backgroundImageStyle = {
    backgroundImage: 'url ("../assets/profile_background.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
  };

  const contentStyle = {
    padding: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        <div style={{ ...columnStyle, ...leftStyle }}>
          <div style={backgroundImageStyle}>
            {back}
          </div>
        </div>
        <div style={{ ...columnStyle, ...rightStyle }}>
          <div style={contentStyle}>
            {"hi hello"}
          </div>
        </div>
      </div>
      <div style={rowStyle}>
        <div style={{ ...columnStyle, ...leftStyle }}>
          <div style={backgroundImageStyle}>
            {back}
          </div>
        </div>
        <div style={{ ...columnStyle, ...rightStyle }}>
          <div style={contentStyle}>
            {"hi hello"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

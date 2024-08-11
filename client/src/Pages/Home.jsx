import React from 'react';
import Nav from '../Components/Nav';
import '../css/home.css'; // Import your external CSS file
import bg from '../assets/Group 1000001770.png'

function Home() {

  return (
    <>
      <Nav/>
      <div className="container-home">
        <div>
        <div className="container-item">
          <img src={bg} alt="bg" /> {/* Replace with your bg URL */}
        </div>
        </div>
        <div>
          <div className="container-item">
          <img src={bg} alt="bg" /> {/* Replace with your bg URL */}
        </div>
        </div>
        <div>
        <div className="container-item">
          <img src={bg} alt="bg" /> {/* Replace with your bg URL */}
        </div>
        </div>
        <div>
        <div className="container-item">
          <img src={bg} alt="bg" /> {/* Replace with your bg URL */}
        </div>
        </div>
        <div>
        <div className="container-item">
          <img src={bg} alt="bg" /> {/* Replace with your bg URL */}
        </div>
        </div>
        <div>
        <div className="container-item">
          <img src={bg} alt="bg" /> {/* Replace with your bg URL */}
        </div>
        </div>
        <div>
        <div className="container-item">
          <img src={bg} alt="bg" /> {/* Replace with your bg URL */}
        </div>
        </div>
        <div>
        <div className="container-item">
          <img src={bg} alt="bg" /> {/* Replace with your image URL */}
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;

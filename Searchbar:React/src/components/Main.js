import React from 'react';
// import { Link } from "react-router-dom"; when <Link to=""> implementiert ist
import AutoCompleteText from './AutoCompleteText';

const Main = () => (
  <div className="Main">
        <div className="container" id="bluebox">
        <h1>What do you want to <span id="green">recycle?</span></h1>
        </div>
        <div className="container">
        
<AutoCompleteText />

        <h2 id="explore">
          Explore bins
      </h2>
      <div className="gallery-grid">
        <figure className="gallery-frame">
          <img className="gallery-img" src="https://i.ibb.co/1X48DH0/1.png" alt="green container" title="green container"/>
        </figure> 
        <figure className="gallery-frame">
          <img className="gallery-img" src="https://i.ibb.co/y0JB7mS/2.png" alt="blue container" title="blue container"/>
        </figure>
        <figure className="gallery-frame">
          <img className="gallery-img" src="https://i.ibb.co/47XpDf1/3.png" alt="orange container" title="orange container"/>
        </figure>
        <figure className="gallery-frame">
          <img className="gallery-img" src="https://i.ibb.co/t4HBYBK/4.png" alt="grey container" title="grey container"/>
        </figure>
        <figure className="gallery-frame">
          <img className="gallery-img" src="https://i.ibb.co/XWFr0Dj/5.png" alt="purple container" title="purple container"/>
        </figure>
        <figure className="gallery-frame">
          <img className="gallery-img" src="https://i.ibb.co/qmRC79c/6.png" alt="brown container" title="brown container"/>
        </figure>
  </div>
  </div>
      </div>
    );


export default Main;

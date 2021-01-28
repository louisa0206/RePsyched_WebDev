import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header=() => {

    return(
          <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#">
          <img src="./images/logo_black_transparent_270x80.png" alt="mylogo"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Bins
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Glass container</a>
                <a className="dropdown-item" href="#">Yellow bin</a>
                <a className="dropdown-item" href="#">Blue bin</a>
              </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Maps</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contact us</a>
              </li>
              </ul>
              </div>
              </nav>
    </div>
    
    
      )
  }





ReactDOM.render(<Header/>, document.getElementById('app'));
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Profile</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <Link className="nav-link active mx-3" to="/">Home</Link>
            <Link className="nav-link mx-3" to="/about">About</Link>
            <Link className="nav-link mx-3" to="/projects">Projects</Link>
            <Link className="nav-link mx-3" to="/skills">Skills</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

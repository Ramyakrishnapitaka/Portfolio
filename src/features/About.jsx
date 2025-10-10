import React from 'react';
import '../App.css'
import mernlogo from '../images/mernlogo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const project = () => {
    navigate("/Project.jsx");
  };


  return (
    <div className="d-flex flex-column flex-md-row about-container">
      
      
      <div className="sidebar text-center p-3">
        <img src={mernlogo} alt="Profile" className="profile-img mb-3" />

        <ul className="nav-links list-unstyled">
          <li>
             <Link to="projectpage">
                          <button className="btn btn-success rounded-pill" onClick={project}>
                            <i className="bi bi-download text-white"></i> View Projects
                          </button>
                        </Link>
          </li>

        </ul>
      </div>
      <div className="about-content flex-grow-1 p-4">
        <div className="badge bg-danger text-white mb-3 px-3 py-2">
          <i className="fas fa-id-badge me-2"></i> About Me
        </div>

        <h2 className="fw-bold">Hey, I'm [Your Name]</h2>

        <p className="about-text mt-3">
          I'm a <span className="highlight">MERN Stack Developer</span> based in [Your Location]. I bring the
          <span className="highlight"> logic of engineering </span> and the
          <span className="highlight"> creativity of design </span>
          to every project. I specialize in building responsive, user-friendly web applications using MongoDB, Express, React, and Node.js.
          <br /><br />
          I'm passionate about learning new technologies and solving real-world problems through code. I'm also known for my 
          <span className="pun"> clean code.</span>
        </p>

        <hr />

        <h5 className="text-primary">Why Work With Me?</h5>
        <div className="row">
          <div className="col-md-6">
            <ul className="checklist">
              <li>Team player</li>
              <li>Strong foundation in JavaScript</li>
              <li>Quick learner</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="checklist">
              <li>Good communication skills</li>
              <li>Debugging expert</li>
              <li>Problem-solving mindset</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;

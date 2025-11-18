import React from "react";
import "../App.css";

function Projects() {
  return (
    <div className="project-container mt-5">

      {/* Course App Project */}
      <div className="project-card mb-5">
        <h2 className="text-primary mb-3">Course UpSkilled App</h2>
        <h5 className="text-muted">
          React, React Router, Context API | Self-employed | Completed in 3 day
        </h5>
        <hr />
        <ul className="list-unstyled project-details">
          <li>
            <i className="bi bi-bookmark-check-fill text-info me-2"></i>
            Built a <strong>UpSkilled</strong> app to manage course enrollment, progress tracking, and filtering.
          </li>
          <li>
            <i className="bi bi-person-check-fill text-info me-2"></i>
            Used <strong>Context API</strong> to share enrolled course data across components.
          </li>
          <li>
            <i className="bi bi-layers-fill text-info me-2"></i>
            Enabled course search, category filter, and enrollment status detection.
          </li>
          <li>
            <i className="bi bi-bar-chart-fill text-info me-2"></i>
            Progress bars and status dropdowns allow updating completion status.
          </li>
          <li>
            <i className="bi bi-ui-checks-grid text-info me-2"></i>
            Implemented routing using <strong>React Router</strong> for course details and dashboard views.
          </li>
        </ul>
        <div className="tech-stack mt-3">
          <h6>Technologies Used:</h6>
          <span className="badge bg-primary me-2">React</span>
          <span className="badge bg-success me-2">React Router</span>
          <span className="badge bg-info text-dark me-2">Context API</span>
          <span className="badge bg-warning text-dark me-2">Bootstrap</span>
          <span className="badge bg-secondary text-white">CSS</span>
        </div>
        <div className="mt-3">
          <a
            href="https://github.com/Ramyakrishnapitaka/React-Course-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning m-2"
          >
            View GitHub Code
          </a>
          <a
            href="https://react-upskilledcourse-project.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            View Live Project
          </a>
        </div>
      </div>

      {/* Feedback App Project */}
      <div className="project-card">
        <h2 className="text-primary mb-3">Full-Stack Feedback Management App</h2>
        <h5 className="text-muted">
          MERN Stack | Self-employed | Completed in 3 days
        </h5>
        <hr />
        <ul className="list-unstyled project-details">
          <li>
            <i className="bi bi-person-check-fill text-info me-2"></i>
            Implemented secure user authentication with signup and login using bcrypt.
          </li>
          <li>
            <i className="bi bi-chat-left-text-fill text-info me-2"></i>
            Users can submit, edit, and delete feedback with comments.
          </li>
          <li>
            <i className="bi bi-reply-fill text-info me-2"></i>
            Admin can reply to user feedback in real-time.
          </li>
          <li>
            <i className="bi bi-palette-fill text-info me-2"></i>
            Dynamic color-coded feedback based on rating for better visualization.
          </li>
          <li>
            <i className="bi bi-layers-fill text-info me-2"></i>
            Form validation handled with Formik & Yup for robust user input.
          </li>
        </ul>
        <div className="tech-stack mt-3">
          <h6>Technologies Used:</h6>
          <span className="badge bg-primary me-2">React.js</span>
          <span className="badge bg-success me-2">Node.js</span>
          <span className="badge bg-info text-dark me-2">Express</span>
          <span className="badge bg-warning text-dark me-2">MongoDB</span>
          <span className="badge bg-secondary text-white">Formik & Yup</span>
          <span className="badge bg-dark me-2">CSS</span>
        </div>
        <div className="mt-3">
          <a
            href="https://github.com/Ramyakrishnapitaka/FeedbackBackend"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning m-2"
          >
            View GitHub Backend
          </a>
          <a
            href="https://github.com/Ramyakrishnapitaka/FeedbackFrontend"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info m-2"
          >
            View GitHub Frontend
          </a>
         
        </div>
      </div>

    </div>
  );
}

export default Projects;

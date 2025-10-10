import React from "react";
import "../App.css"; 

function Project() {
  return (
    <div className="project-container mt-5">

      <div className="project-card">
        <h2 className="text-primary mb-3">Freelance Project</h2>
        <h5 className="text-muted">Freelance Web Development Project</h5>
        <hr />

        <ul className="list-unstyled project-details">
          <li>
            <i className="bi bi-code-slash text-info me-2"></i>
            Built a <strong>responsive website</strong> using HTML for content
            structure and CSS/Bootstrap for styling, ensuring smooth performance
            across devices.
          </li>
          <li>
            <i className="bi bi-lock-fill text-info me-2"></i>
            Added <strong>login and signup functionality</strong> with
            JavaScript, including client-side validation and basic data
            authentication.
          </li>
          <li>
            <i className="bi bi-person-workspace text-info me-2"></i>
            Worked independently from start to finish, delivering the project on
            time and meeting client expectations.
          </li>
        </ul>

        <div className="tech-stack mt-3">
          <h6>Technologies Used:</h6>
          <span className="badge bg-primary me-2">HTML</span>
          <span className="badge bg-success me-2">CSS</span>
          <span className="badge bg-info text-dark me-2">Bootstrap</span>
          <span className="badge bg-warning text-dark">JavaScript</span>
        </div>
      </div>
      <div className="project-card">
        <h2 className="text-primary mb-3">Form Validation Project</h2>
        <h5 className="text-muted">React, Formik, Yup | Self-employed | Completed in 10 days</h5>
        <hr />

        <ul className="list-unstyled project-details">
          <li>
            <i className="bi bi-ui-checks-grid text-info me-2"></i>
            Developed a <strong>dynamic employee form</strong> with Formik to manage form state and submissions.
          </li>
          <li>
            <i className="bi bi-shield-lock-fill text-info me-2"></i>
            Applied <strong>Yup validation</strong> for name, ID, project ID, file uploads, and comments.
          </li>
          <li>
            <i className="bi bi-arrows-expand text-info me-2"></i>
            Implemented <strong>conditional rendering</strong> for location selection based on offshore/onshore.
          </li>
          <li>
            <i className="bi bi-check2-square text-info me-2"></i>
            Added multi-select checkboxes for technologies and validated file uploads.
          </li>
          <li>
            <i className="bi bi-table text-info me-2"></i>
            Displayed submitted data in a clean, responsive table.
          </li>
        </ul>

        <div className="tech-stack mt-3">
          <h6>Technologies Used:</h6>
          <span className="badge bg-primary me-2">React</span>
          <span className="badge bg-success me-2">Formik</span>
          <span className="badge bg-info text-dark me-2">Yup</span>
          <span className="badge bg-warning text-dark me-2">Bootstrap</span>
          <span className="badge bg-secondary text-white">CSS</span>
        </div>

        <div className="mt-3">
          <a
            href="https://github.com/Ramyakrishnapitaka/ReactFormwithFormikLibrary"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning m-2"
          >
            View GitHub Code
          </a>
          <a
            href="https://relaxed-malasada-47e47c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            View Live Project
          </a>
        </div>
      </div>
   <div className="project-card">
  <h2 className="text-primary mb-3">Testimonial Reviews App</h2>
  <h5 className="text-muted">React, Formik, Yup | Node.js, Express, MongoDB | Self-employed | Completed in 7 days</h5>
  <hr />

  <ul className="list-unstyled project-details">
    <li>
      <i className="bi bi-person-lines-fill text-info me-2"></i>
      Built a <strong>testimonial management system</strong> where users can sign up, log in, and post reviews.
    </li>
    <li>
      <i className="bi bi-lock-fill text-info me-2"></i>
      Implemented <strong>authentication & conditional access</strong> using Node.js, Express, and MongoDB.
    </li>
    <li>
      <i className="bi bi-ui-checks-grid text-info me-2"></i>
      Used <strong>Formik and Yup</strong> on the frontend for form state management and validation.
    </li>
    <li>
      <i className="bi bi-database-fill text-info me-2"></i>
      Reviews are stored in MongoDB and retrieved via Express API endpoints.
    </li>
    <li>
      <i className="bi bi-phone text-info me-2"></i>
      Designed a <strong>responsive UI</strong> using Bootstrap for seamless mobile and desktop experience.
    </li>
  </ul>

  <div className="tech-stack mt-3">
    <h6>Technologies Used:</h6>
    <span className="badge bg-primary me-2">React</span>
    <span className="badge bg-success me-2">Formik</span>
    <span className="badge bg-info text-dark me-2">Yup</span>
    <span className="badge bg-warning text-dark me-2">Node.js</span>
    <span className="badge bg-secondary text-white me-2">Express</span>
    <span className="badge bg-dark text-white">MongoDB</span>
    <span className="badge bg-info text-dark me-2">Bootstrap</span>
  </div>

        <div className="mt-3">
           <a
            href="https://github.com/Ramyakrishnapitaka/Testimonial-Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning m-2"
          >
            View GitHub Code
          </a>
          <a
            href="https://testimonial-reviews-frontend.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            View Live Project
          </a>

        </div>
      </div>

    </div>
  );
}

export default Project;

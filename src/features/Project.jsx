import React from "react";
import "../App.css";

function Project() {
  return (
    <div className="project-container mt-5">

      {/* COURSE TRACKER PROJECT */}
     
      
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
           <span className="badge bg-primary me-2">React</span>           <span className="badge bg-success me-2">Formik</span>           <span className="badge bg-info text-dark me-2">Yup</span>
           <span className="badge bg-warning text-dark me-2">Bootstrap</span>
           <span className="badge bg-secondary text-white">CSS</span>         </div>       <div className="mt-3">
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
        <h2 className="text-primary mb-3">Course UpSkilled App</h2>
        <h5 className="text-muted">
          React, React Router, Context API | Self-employed | Completed in 1 day
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
            href="https://github.com/Ramyakrishnapitaka/React-Course-Project/blob/main" // replace with your actual repo
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning m-2"
          >
            View GitHub Code
          </a>
          <a
            href="https://react-upskilledcourse-project.onrender.com" // replace with your live link
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

import './Workbook.css';

function Workbook({ onNavigate }) {
  return (
    <div className="workbook-page">
      <header className="workbook-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="workbook-logo">CI Feedback Training</div>
      </header>
      
      <main className="workbook-content">
        <h1 className="workbook-title">CI Feedback Training</h1>
        <div className="workbook-intro">
          <p>
            CI checks are programmatic evaluations of task correctness and completeness. 
            You need to iterate on your task until all checks pass. This page provides a 
            practice workbook where you can do so, along with a video explaining the solution 
            and walking through how to iterate on CI feedback.
          </p>
          <p>
            <a 
              href="/Terminus-EC-Training/ci_feedback_training.ipynb" 
              download="ci_feedback_training.ipynb"
              className="notebook-download-link"
            >
              📓 Download CI Feedback Training Notebook
            </a>
          </p>
        </div>
        
        <div className="workbook-video-section">
          <div className="video-card">
            <h3 className="video-card-title">CI Feedback Training Tutorial</h3>
            <div className="video-wrapper">
              <iframe
                src="https://www.loom.com/embed/db35a5b03c1c43ab80f46f481fa02be1?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                frameBorder="0"
                allowFullScreen
                className="video-iframe"
                title="Practice Workbook Tutorial"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <footer className="workbook-footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Workbook;


import './Videos.css';
import './Content.css';

function Glossary({ onNavigate }) {
  return (
    <div className="videos-page">
      <header className="videos-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="videos-logo">Glossary</div>
      </header>
      
      <main className="videos-content">
        <h1 className="videos-title">Glossary</h1>
        <div className="content-body" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
          <div className="glossary-grid">

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Alias Email</h3>
              <p style={{ marginBottom: 0 }}>
                A special project-specific email account provided to you. Used only for logging into the client platform. Not for personal use, communication, or external activity.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Assessment 1 (CoderPad Test)</h3>
              <p style={{ marginBottom: 0 }}>
                The first qualification step: a 10-question Python knowledge assessment.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Assessment 2 (Marlin-Expert_Assessment-2)</h3>
              <p style={{ marginBottom: 0 }}>
                A task where you review an AI-generated code response, identify errors, apply changes locally, run tests, and write a corrective follow-up prompt.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Baseline Repo / Initial Repo</h3>
              <p style={{ marginBottom: 0 }}>
                The repository you download before any model changes. It represents the "starting point" before the requested PR update.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Blocking Issues</h3>
              <p style={{ marginBottom: 0 }}>
                Mistakes that make a code submission unacceptable. Examples: incorrect logic, missing features, broken tests, invalid file paths.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Bullet List (Mistakes List)</h3>
              <p style={{ marginBottom: 0 }}>
                A structured list of issues you discovered in the model's output during Assessment 2.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Client Platform</h3>
              <p style={{ marginBottom: 0 }}>
                The secure environment where ECs conduct Phase 4 PR-generation tasks.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Code Diff / Diff Checker</h3>
              <p style={{ marginBottom: 0 }}>
                A tool or comparison process used to check differences between original and updated files. Required to confirm whether code changes were actually applied and whether they are correct.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Code of Conduct</h3>
              <p style={{ marginBottom: 0 }}>
                Project rules governing professional demeanor, respect, confidentiality, and safe communication standards.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Complexity Requirement</h3>
              <p style={{ marginBottom: 0 }}>
                The rule that selected PRs must be challenging enough to require several interaction turns and meaningful reasoning (not solvable immediately or trivially).
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Context Setting</h3>
              <p style={{ marginBottom: 0 }}>
                Part of Prompt-Preparation: describing the repo's purpose and explaining the PR's significance.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Current Behavior</h3>
              <p style={{ marginBottom: 0 }}>
                How the codebase works today before implementing PR changes.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Dependency Setup</h3>
              <p style={{ marginBottom: 0 }}>
                The process of installing required packages, libraries, and tools so the repo can run locally.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Diff Review</h3>
              <p style={{ marginBottom: 0 }}>
                Examining file-by-file changes output by the model to ensure accuracy.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>EC (Expert Contributor)</h3>
              <p style={{ marginBottom: 0 }}>
                You — the participant performing analysis, prompting, and code review tasks for Marlin.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Edge Cases</h3>
              <p style={{ marginBottom: 0 }}>
                Nonstandard or tricky scenarios the updated code must correctly handle.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Expected Behavior</h3>
              <p style={{ marginBottom: 0 }}>
                How the code should function after the requested PR is fully implemented.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Feedback Fields (Preference Selection)</h3>
              <p style={{ marginBottom: 0 }}>
                Where you evaluate two model outputs, identify strengths/weaknesses, and select the preferred version.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>File Structure Correctness</h3>
              <p style={{ marginBottom: 0 }}>
                Ensuring the output code places files in the correct directories — incorrect structure is a significant error.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Final Tarball (.tar.gz)</h3>
              <p style={{ marginBottom: 0 }}>
                A compressed archive containing the final, production-ready repository. Must be perfect and ready to merge.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Initial Prompt</h3>
              <p style={{ marginBottom: 0 }}>
                The structured instruction you prepare during Prompt-Preparation and submit in Turn 1.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Last-Mile Edits</h3>
              <p style={{ marginBottom: 0 }}>
                Small allowable manual fixes (e.g., variable renames, removing duplicates). Major fixes (logic, missing files, wrong structure) must be corrected through an additional prompt turn.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Local Environment</h3>
              <p style={{ marginBottom: 0 }}>
                Your computer setup where you download, install, and test the repo.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Model Response (Option A & B)</h3>
              <p style={{ marginBottom: 0 }}>
                Two versions of the AI's output for each prompt turn, which you compare and evaluate.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Non-Blocking Issues</h3>
              <p style={{ marginBottom: 0 }}>
                Minor issues that do not prevent merging but should be noted (style, minor inefficiencies, small inconsistencies).
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>PR (Pull Request)</h3>
              <p style={{ marginBottom: 0 }}>
                A request to merge a set of code changes into a repository. In Marlin, ECs recreate PRs from real examples as isolated tasks.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>PR Selection Task</h3>
              <p style={{ marginBottom: 0 }}>
                The Phase 3 step where you choose a repo and a PR suitable for training.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>PR-Writer</h3>
              <p style={{ marginBottom: 0 }}>
                The platform feature where you submit prompts, review model responses, and iterate through turns to generate a final PR.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Preference Ratings</h3>
              <p style={{ marginBottom: 0 }}>
                Your evaluation of which model output (A or B) is better along several dimensions (correctness, clarity, quality, completeness).
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Production-Ready Code</h3>
              <p style={{ marginBottom: 0 }}>
                The standard for final submissions: correct logic, correct structure, full test coverage, no missing changes, and clean implementation.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Prompt-Preparation</h3>
              <p style={{ marginBottom: 0 }}>
                Phase 3 task where you define your strategy, acceptance criteria, tests, and initial prompt before entering the live PR-writing workflow.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Prompt Review Submission</h3>
              <p style={{ marginBottom: 0 }}>
                Final step after completing a PR-writing task: logging duration, uploading the final tarball, and reporting any issues.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Repo</h3>
              <p style={{ marginBottom: 0 }}>
                A software project stored in a source control system. ECs clone or download it to work locally.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Requirements File</h3>
              <p style={{ marginBottom: 0 }}>
                A file listing the dependencies needed to run the repo.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Setup Notes</h3>
              <p style={{ marginBottom: 0 }}>
                Your documented explanation of how you installed dependencies and fixed environment issues.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Submissions</h3>
              <p style={{ marginBottom: 0 }}>
                Work you complete and deliver through the platform. In Marlin: Assessment 1, Assessment 2, PR Selection, Prompt-Preparation, PR-writing task, and Prompt Review.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Task Approach</h3>
              <p style={{ marginBottom: 0 }}>
                Your written explanation (during Prompt-Preparation) of how you plan to solve the PR using structured prompting.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Test Cases</h3>
              <p style={{ marginBottom: 0 }}>
                Unit tests used to verify correctness of code changes. ECs must run existing tests and create or reference additional ones as needed.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Test Failures</h3>
              <p style={{ marginBottom: 0 }}>
                A sign that the model's code is incorrect and must be fixed in another turn.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Turn</h3>
              <p style={{ marginBottom: 0 }}>
                One iteration in the PR-writing workflow: You prompt → Model produces Option A & B → You review and respond. Minimum required: 3.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>URL Requirement</h3>
              <p style={{ marginBottom: 0 }}>
                The PR URL you submit must end with /pull/### so the system correctly maps and tracks your task.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Waiting Period (Processing Time)</h3>
              <p style={{ marginBottom: 0 }}>
                The 30–45 minute delay after PR Selection where the system prepares your repo for later phases.
              </p>
            </div>

            <div className="info-box" style={{ marginTop: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Workflow Pipeline</h3>
              <p style={{ marginBottom: 0 }}>
                The sequential structure of Marlin: Assessment 1 → Assessment 2 → PR Selection → Prompt-Preparation → PR Writer → Prompt Review → Restart.
              </p>
            </div>

          </div>
        </div>
      </main>

      <footer className="videos-footer">
        <p>&copy; 2025 Marlin EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Glossary;
import './Videos.css';

function FAQ({ onNavigate }) {
  return (
    <div className="videos-page">
      <header className="videos-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="videos-logo">FAQ</div>
      </header>
      
      <main className="videos-content">
        <h1 className="videos-title">Frequently Asked Questions</h1>
        <div className="faq-container">
          
          {/* Getting Started */}
          <h2 className="faq-section-title">Getting Started</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">1. Where do I find the first two assessments?</h3>
            <p className="faq-answer">Updated info coming soon…</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">2. How long until my first two assessments are graded?</h3>
            <p className="faq-answer">It can take multiple days for your assessments to be graded. Please be patient and our team will get back to you as soon as possible.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">3. How long until my Prompt-Preparation submission is reviewed?</h3>
            <p className="faq-answer">It can take multiple days for your Prompt-Preparation submission to be reviewed. Please be patient and our team will get back to you as soon as possible.
However, you are encouraged to continue working on and completing additional tasks while you wait, as this helps maintain momentum and ensures you’re ready to proceed as soon as your submission is approved.</p>
          </div>

          {/* Workflow and Sequencing */}
          <h2 className="faq-section-title">Workflow and Sequencing</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">1. What's the end-to-end workflow?</h3>
            <ul className="faq-answer-list">
              <li><strong>Marlin-PR-Selection:</strong> choose a repo and associated PR → submit</li>
              <li>Wait 30–45 minutes for systems to process your choice (compilation for later use)</li>
              <li><strong>Marlin-Prompt-Preparation:</strong> answer the structured questions (Context Setting, Task Approach, Prompt Definition)</li>
              <li>Receive feedback, refine as needed</li>
              <li>Upon approval, move to the client's platform to perform the actual task</li>
            </ul>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">2. Can I skip steps (e.g., jump straight to the client/login)?</h3>
            <p className="faq-answer">No. Each step is part of one pipeline. You must complete them in sequence to proceed.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">3. Why is there a 30–45 minute wait after PR selection?</h3>
            <p className="faq-answer">Our systems compile and prepare the repo/PR context for your later use. Do not submit another selection while waiting; the UI may show another selection task, but submitting again will slow you down. If it's been more than 1 hour, ping #ec-marlin-support.</p>
          </div>

          {/* Marlin-PR Selection */}
          <h2 className="faq-section-title">Marlin-PR Selection</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">1. What am I selecting in Marlin-PR-Selection?</h3>
            <p className="faq-answer">You must select one open-source GitHub repository and one associated PR you're confident addressing with the model.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">2. How should I choose a PR?</h3>
            <p className="faq-answer">Open the repo and PR URLs (copy/paste into your browser) and review code, structure, tests, and discussion.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">3. Can I make multiple PR selections while I wait for the first to be approved?</h3>
            <p className="faq-answer">It is recommended to limit selections to a maximum of two and to focus on addressing them thoroughly with their designated models.</p>
          </div>

          {/* Marlin-Prompt-Preparation */}
          <h2 className="faq-section-title">Marlin-Prompt-Preparation</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">1. Is the prompt I create separate from the PR?</h3>
            <p className="faq-answer">Yes, they are separate deliverables. Your prompt must be grounded in the selected repo and aligned with your proposed PR. Think of a PR as what changes and your prompt as how to ask the model to produce those changes (files, constraints, tests, acceptance criteria).</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">2. How detailed should my answers be?</h3>
            <p className="faq-answer">Be clear, concrete, and objective. Align edge cases with test cases and make acceptance criteria measurable. Please avoid vague wording.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">3. What's an acceptable prompting style?</h3>
            <p className="faq-answer">Use an unambiguous, non-adversarial approach that guides the model directly to the PR's solution. Do not use role-based prompting (e.g., "As a software engineer,…").</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">4. What makes a strong Prompt?</h3>
            <p className="faq-answer">Self-contained instructions specifying: targeted files, required constraints, testing expectations, acceptance criteria, and output format (e.g., minimal diffs + notes). Include time estimate and complexity rating.</p>
          </div>

          {/* Anthropic Platform */}
          <h2 className="faq-section-title"> Platform</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">1. Should I re-upload the "original" tarball on every subsequent turn?</h3>
            <p className="faq-answer">It is very important that you <strong>DO NOT</strong> re-upload the "original" tarball on every subsequent turn. When you upload the tarball on each prompt, that unfortunately creates duplicate repos in the context of the prompt and confuses the model with the state of the fixes. Unless confirmed by the project team, do not upload any new files after turn 1.</p>
          </div>

        </div>
      </main>

      <footer className="videos-footer">
        <p>&copy; 2025 Marlin Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FAQ;
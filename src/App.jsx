import './App.css'

function App() {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <div className="logo">Terminus EC</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1 className="hero-title">Welcome to Terminus EC Training</h1>
          <p className="hero-subtitle">
            A modern platform for learning and development
          </p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>Intuitive interface designed for seamless navigation</p>
          </div>
          <div className="feature-card">
            <h3>Comprehensive</h3>
            <p>Everything you need in one place</p>
          </div>
          <div className="feature-card">
            <h3>Reliable</h3>
            <p>Built with modern technology for stability</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

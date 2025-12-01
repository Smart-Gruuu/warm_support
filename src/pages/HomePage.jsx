import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">You Are Not Alone</h1>
            <p className="hero-subtitle">
              At Our Ears Are Open, we believe everyone deserves to be heard. 
              We're here to listen, support, and walk alongside you through difficult times.
            </p>
            <div className="hero-actions">
              <Link to="/booking" className="btn btn-primary">
                Book a Session
              </Link>
              <Link to="/chat" className="btn btn-secondary">
                Start a Chat
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="crisis-alert">
        <div className="container">
          <div className="crisis-box">
            <h2 className="crisis-title">In Crisis? Help is Available Now</h2>
            <div className="crisis-content">
              <div className="crisis-item">
                <h3>988 Suicide & Crisis Lifeline</h3>
                <p className="crisis-phone">
                  <a href="tel:988">Call or Text 988</a>
                </p>
                <p className="crisis-note">Available 24/7, free and confidential</p>
              </div>
              <div className="crisis-item">
                <h3>Emergency Services</h3>
                <p className="crisis-phone">
                  <a href="tel:911">Call 911</a>
                </p>
                <p className="crisis-note">For immediate life-threatening emergencies</p>
              </div>
            </div>
            <div className="crisis-message">
              <p>
                <strong>If you or someone you know is having thoughts of suicide, 
                please reach out immediately.</strong> There are people who care and 
                resources available to help. Your life matters, and there is hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <p className="mission-text">
              Our Ears Are Open was created with a simple, powerful belief: 
              everyone deserves to feel heard, understood, and supported. 
              In moments of distress, loneliness, or uncertainty, having someone 
              to listen can make all the difference.
            </p>
            <p className="mission-text">
              We provide a safe, compassionate space where you can share your 
              thoughts and feelings without judgment. Whether you're navigating 
              a difficult time, feeling isolated, or simply need someone to talk to, 
              we're here for you.
            </p>
            <p className="mission-text">
              Our trained volunteers and staff are committed to offering empathy, 
              understanding, and a listening ear. You don't have to face your 
              challenges alone.
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">How We Can Help</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Book a Session</h3>
              <p>Schedule a 15-minute one-on-one conversation with a trained listener</p>
              <Link to="/booking" className="feature-link">Learn more →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Instant Chat</h3>
              <p>Connect with a listener right away through our open chat queue</p>
              <Link to="/chat" className="feature-link">Start chatting →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Support Our Mission</h3>
              <p>Help us reach more people by making a donation</p>
              <Link to="/donate" className="feature-link">Donate →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage


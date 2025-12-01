import { Link } from 'react-router-dom'
import './CommunicationPage.css'

function CommunicationPage() {
  return (
    <div className="communication-page">
      <div className="container">
        <section className="page-header">
          <h1 className="page-title">How to Reach Us</h1>
          <p className="page-intro">
            We offer multiple ways to connect with our trained listeners. 
            Choose the option that feels most comfortable for you.
          </p>
        </section>

        <section className="communication-options">
          <div className="option-card">
            <div className="option-icon">📅</div>
            <h2>Book a Scheduled Session</h2>
            <p>
              Schedule a 15-minute one-on-one conversation at a time that works 
              for you. Our booking system allows you to see available time slots 
              and choose what fits your schedule.
            </p>
            <ul className="option-features">
              <li>15-minute focused sessions</li>
              <li>Choose your preferred time</li>
              <li>Email confirmation sent automatically</li>
              <li>Secure and private</li>
            </ul>
            <Link to="/booking" className="btn btn-primary">
              Book a Session
            </Link>
          </div>

          <div className="option-card">
            <div className="option-icon">💬</div>
            <h2>Instant Chat</h2>
            <p>
              Need to talk right now? Our instant chat connects you with an 
              available listener through an open queue. No booking required—just 
              start chatting when you're ready.
            </p>
            <ul className="option-features">
              <li>Available immediately</li>
              <li>No appointment needed</li>
              <li>15-minute chat sessions</li>
              <li>Real-time support</li>
            </ul>
            <Link to="/chat" className="btn btn-primary">
              Start Chatting
            </Link>
          </div>

          <div className="option-card">
            <div className="option-icon">📞</div>
            <h2>Phone Support</h2>
            <p>
              Sometimes hearing a friendly voice makes all the difference. 
              Our phone support system allows you to connect with a listener 
              over the phone for a more personal connection.
            </p>
            <ul className="option-features">
              <li>Voice-to-voice connection</li>
              <li>15-minute phone sessions</li>
              <li>Secure and confidential</li>
              <li>Available during scheduled hours</li>
            </ul>
            <p className="phone-note">
              <em>Phone support details and availability will be provided during booking.</em>
            </p>
          </div>
        </section>

        <section className="what-to-expect">
          <h2 className="section-title">What to Expect</h2>
          <div className="expectation-content">
            <div className="expectation-item">
              <h3>A Safe Space</h3>
              <p>
                Our conversations are confidential and judgment-free. You can 
                share as much or as little as you feel comfortable with.
              </p>
            </div>
            <div className="expectation-item">
              <h3>Active Listening</h3>
              <p>
                Our trained listeners are here to hear you. They practice active 
                listening and provide empathy and understanding.
              </p>
            </div>
            <div className="expectation-item">
              <h3>Respectful Boundaries</h3>
              <p>
                Sessions are limited to 15 minutes to ensure we can help as many 
                people as possible. As we grow, we'll be able to offer extended 
                sessions.
              </p>
            </div>
            <div className="expectation-item">
              <h3>No Pressure</h3>
              <p>
                You're never obligated to share more than you want. Our goal is 
                simply to provide a listening ear and emotional support.
              </p>
            </div>
          </div>
        </section>

        <section className="important-note">
          <div className="note-box">
            <h3>Important Note</h3>
            <p>
              While our listeners are trained in empathy and active listening, 
              we are not a replacement for professional mental health services. 
              If you're experiencing a mental health crisis, please contact:
            </p>
            <ul>
              <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
              <li><strong>Emergency Services:</strong> Call 911</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CommunicationPage


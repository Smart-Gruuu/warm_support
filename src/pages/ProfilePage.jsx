import { useState } from 'react'
import { format } from 'date-fns'
import './ProfilePage.css'

function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [showSignup, setShowSignup] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    location: '',
    password: ''
  })

  // Mock data for logged-in user
  const mockConversations = [
    {
      id: 1,
      type: 'Chat',
      date: new Date('2024-01-15'),
      duration: '15 minutes',
      cost: 0
    },
    {
      id: 2,
      type: 'Booked Session',
      date: new Date('2024-01-20'),
      duration: '15 minutes',
      cost: 0
    }
  ]

  const mockPayments = [
    {
      id: 1,
      type: 'Donation',
      amount: 25.00,
      date: new Date('2024-01-10'),
      status: 'Completed'
    }
  ]

  const handleSignup = (e) => {
    e.preventDefault()
    // In real app, this would send to backend
    const newUser = {
      username: formData.username,
      email: formData.email,
      location: formData.location
    }
    setUser(newUser)
    setIsLoggedIn(true)
    setShowSignup(false)
    setFormData({ username: '', email: '', location: '', password: '' })
    
    // Simulate email confirmation
    console.log('Welcome email sent to:', formData.email)
    console.log('Email content: Welcome to Our Ears Are Open! Your account has been created.')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // In real app, this would authenticate with backend
    // For MVP, we'll just simulate login
    setUser({
      username: 'DemoUser',
      email: 'demo@example.com',
      location: 'New York, NY'
    })
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  if (!isLoggedIn) {
    return (
      <div className="profile-page">
        <div className="container">
          <section className="page-header">
            <h1 className="page-title">Your Profile</h1>
            <p className="page-intro">
              Create an account to track your conversations, payments, and manage 
              your sessions. You can use a username instead of your real name.
            </p>
          </section>

          <div className="auth-container">
            {!showSignup ? (
              <div className="auth-box">
                <h2>Sign In</h2>
                <form onSubmit={handleLogin} className="auth-form">
                  <div className="form-group">
                    <label htmlFor="login-email">Email</label>
                    <input
                      type="email"
                      id="login-email"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login-password">Password</label>
                    <input
                      type="password"
                      id="login-password"
                      required
                      placeholder="Enter your password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-large">
                    Sign In
                  </button>
                </form>
                <p className="auth-switch">
                  Don't have an account?{' '}
                  <button 
                    className="link-btn" 
                    onClick={() => setShowSignup(true)}
                  >
                    Sign up
                  </button>
                </p>
              </div>
            ) : (
              <div className="auth-box">
                <h2>Create Account</h2>
                <form onSubmit={handleSignup} className="auth-form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      required
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      placeholder="Choose a username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="City, State or Country"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create a password"
                      minLength="6"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-large">
                    Create Account
                  </button>
                </form>
                <p className="auth-switch">
                  Already have an account?{' '}
                  <button 
                    className="link-btn" 
                    onClick={() => setShowSignup(false)}
                  >
                    Sign in
                  </button>
                </p>
                <div className="email-note">
                  <p>
                    <strong>Note:</strong> After signing up, you'll receive a 
                    welcome email confirming your account creation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="profile-page">
      <div className="container">
        <section className="profile-header">
          <div className="profile-info">
            <h1 className="page-title">Welcome, {user.username}</h1>
            <button className="logout-btn" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </section>

        <div className="profile-content">
          <div className="profile-section">
            <h2>Account Information</h2>
            <div className="info-card">
              <div className="info-item">
                <strong>Username:</strong> {user.username}
              </div>
              <div className="info-item">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="info-item">
                <strong>Location:</strong> {user.location}
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Your Conversations</h2>
            {mockConversations.length > 0 ? (
              <div className="conversations-list">
                {mockConversations.map((conv) => (
                  <div key={conv.id} className="conversation-item">
                    <div className="conv-type">{conv.type}</div>
                    <div className="conv-details">
                      <p><strong>Date:</strong> {format(conv.date, 'MMMM d, yyyy')}</p>
                      <p><strong>Duration:</strong> {conv.duration}</p>
                      <p><strong>Cost:</strong> ${conv.cost.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-state">No conversations yet.</p>
            )}
          </div>

          <div className="profile-section">
            <h2>Payment History</h2>
            {mockPayments.length > 0 ? (
              <div className="payments-list">
                {mockPayments.map((payment) => (
                  <div key={payment.id} className="payment-item">
                    <div className="payment-type">{payment.type}</div>
                    <div className="payment-details">
                      <p><strong>Amount:</strong> ${payment.amount.toFixed(2)}</p>
                      <p><strong>Date:</strong> {format(payment.date, 'MMMM d, yyyy')}</p>
                      <p><strong>Status:</strong> <span className="status-completed">{payment.status}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-state">No payments yet.</p>
            )}
            <div className="payment-actions">
              <a href="/donate" className="btn btn-primary">Make a Donation</a>
            </div>
          </div>

          <div className="profile-section">
            <h2>Quick Actions</h2>
            <div className="quick-actions">
              <a href="/booking" className="action-card">
                <span className="action-icon">📅</span>
                <span>Book a Session</span>
              </a>
              <a href="/chat" className="action-card">
                <span className="action-icon">💬</span>
                <span>Start a Chat</span>
              </a>
              <a href="/donate" className="action-card">
                <span className="action-icon">❤️</span>
                <span>Make a Donation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage


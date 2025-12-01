import { useState } from 'react'
import './DonationPage.css'

function DonationPage() {
  const [donationAmount, setDonationAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    anonymous: false
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const presetAmounts = [25, 50, 100, 250, 500]

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount.toString())
    setCustomAmount('')
  }

  const handleCustomAmount = (e) => {
    const value = e.target.value
    setCustomAmount(value)
    if (value) {
      setDonationAmount(value)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setDonorInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const finalAmount = customAmount || donationAmount
    if (!finalAmount || parseFloat(finalAmount) <= 0) {
      alert('Please select or enter a donation amount')
      return
    }
    
    // In real app, this would process donation through secure payment gateway
    // For MVP, we'll just show confirmation
    setShowConfirmation(true)
    
    // Simulate email confirmation
    console.log('Donation confirmation email sent to:', donorInfo.email)
    console.log('Donation details:', {
      amount: finalAmount,
      anonymous: donorInfo.anonymous,
      donorName: donorInfo.anonymous ? 'Anonymous' : donorInfo.name
    })
  }

  if (showConfirmation) {
    return (
      <div className="donation-page">
        <div className="container">
          <div className="confirmation-box">
            <div className="confirmation-icon">❤️</div>
            <h1>Thank You for Your Donation!</h1>
            <p>Your generosity helps us reach more people in need.</p>
            <div className="confirmation-details">
              <p><strong>Amount:</strong> ${parseFloat(customAmount || donationAmount).toFixed(2)}</p>
              {!donorInfo.anonymous && (
                <p><strong>Donor:</strong> {donorInfo.name}</p>
              )}
              <p><strong>Email:</strong> {donorInfo.email}</p>
            </div>
            <p className="confirmation-note">
              A confirmation email with your donation receipt has been sent to {donorInfo.email}.
            </p>
            <div className="confirmation-actions">
              <a href="/" className="btn btn-primary">Return Home</a>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setShowConfirmation(false)
                  setDonationAmount('')
                  setCustomAmount('')
                  setDonorInfo({ name: '', email: '', anonymous: false })
                }}
              >
                Make Another Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="donation-page">
      <div className="container">
        <section className="page-header">
          <h1 className="page-title">Support Our Mission</h1>
          <p className="page-intro">
            Your donation helps us provide support to those in need. Every contribution, 
            no matter the size, makes a difference in someone's life.
          </p>
        </section>

        <div className="donation-container">
          <div className="donation-form-section">
            <h2>Make a Donation</h2>
            <form onSubmit={handleSubmit} className="donation-form">
              <div className="amount-section">
                <h3>Select Amount</h3>
                <div className="preset-amounts">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`amount-btn ${donationAmount === amount.toString() ? 'selected' : ''}`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="custom-amount">
                  <label htmlFor="customAmount">Or enter custom amount</label>
                  <div className="amount-input-wrapper">
                    <span className="currency">$</span>
                    <input
                      type="number"
                      id="customAmount"
                      min="1"
                      step="0.01"
                      value={customAmount}
                      onChange={handleCustomAmount}
                      placeholder="0.00"
                      onFocus={() => setDonationAmount('')}
                    />
                  </div>
                </div>
              </div>

              <div className="donor-info-section">
                <h3>Donor Information</h3>
                <div className="form-group">
                  <label htmlFor="name">Name {donorInfo.anonymous && '(Optional)'}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={donorInfo.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    disabled={donorInfo.anonymous}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={donorInfo.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                  <small>We'll send your donation receipt to this email</small>
                </div>
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="anonymous"
                      checked={donorInfo.anonymous}
                      onChange={handleInputChange}
                    />
                    <span>Make this donation anonymous</span>
                  </label>
                </div>
              </div>

              <div className="donation-summary">
                <div className="summary-row">
                  <span>Donation Amount:</span>
                  <strong>${parseFloat(customAmount || donationAmount || 0).toFixed(2)}</strong>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <strong>${parseFloat(customAmount || donationAmount || 0).toFixed(2)}</strong>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-large"
                disabled={!donationAmount && !customAmount}
              >
                Continue to Payment
              </button>
            </form>
          </div>

          <div className="donation-info">
            <h3>How Your Donation Helps</h3>
            <div className="impact-list">
              <div className="impact-item">
                <span className="impact-icon">👂</span>
                <div>
                  <strong>Support More Listeners</strong>
                  <p>Help us train and support more volunteers</p>
                </div>
              </div>
              <div className="impact-item">
                <span className="impact-icon">💬</span>
                <div>
                  <strong>Expand Our Reach</strong>
                  <p>Enable us to help more people in need</p>
                </div>
              </div>
              <div className="impact-item">
                <span className="impact-icon">❤️</span>
                <div>
                  <strong>Create Safe Spaces</strong>
                  <p>Maintain and improve our platform</p>
                </div>
              </div>
            </div>
            <div className="security-note">
              <p>
                <strong>Secure & Trustworthy</strong>
              </p>
              <p>
                All donations are processed securely. We are committed to transparency 
                and will use your contribution to directly support our mission.
              </p>
            </div>
            <div className="tax-note">
              <p>
                <em>Donations may be tax-deductible. Please consult with a tax professional 
                for advice on your specific situation.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationPage


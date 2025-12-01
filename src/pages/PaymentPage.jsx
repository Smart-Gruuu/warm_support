import { useState } from 'react'
import './PaymentPage.css'

function PaymentPage() {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    zipCode: ''
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In real app, this would process payment through secure payment gateway
    // For MVP, we'll just show confirmation
    setShowConfirmation(true)
    
    // Simulate email confirmation
    console.log('Payment confirmation email sent to:', paymentData.email)
    console.log('Payment details:', {
      amount: paymentData.amount,
      type: 'Session Payment'
    })
  }

  if (showConfirmation) {
    return (
      <div className="payment-page">
        <div className="container">
          <div className="confirmation-box">
            <div className="confirmation-icon">✓</div>
            <h1>Payment Successful!</h1>
            <p>Your payment has been processed successfully.</p>
            <div className="confirmation-details">
              <p><strong>Amount:</strong> ${parseFloat(paymentData.amount).toFixed(2)}</p>
              <p><strong>Email:</strong> {paymentData.email}</p>
            </div>
            <p className="confirmation-note">
              A confirmation email has been sent to {paymentData.email} with 
              your payment receipt.
            </p>
            <div className="confirmation-actions">
              <a href="/profile" className="btn btn-primary">View Profile</a>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setShowConfirmation(false)
                  setPaymentData({
                    amount: '',
                    name: '',
                    email: '',
                    cardNumber: '',
                    expiryDate: '',
                    cvv: '',
                    zipCode: ''
                  })
                }}
              >
                Make Another Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="payment-page">
      <div className="container">
        <section className="page-header">
          <h1 className="page-title">Payment</h1>
          <p className="page-intro">
            Complete your payment securely. All transactions are encrypted and secure.
          </p>
        </section>

        <div className="payment-container">
          <div className="payment-form-section">
            <h2>Payment Information</h2>
            <form onSubmit={handleSubmit} className="payment-form">
              <div className="form-group">
                <label htmlFor="amount">Amount ($)</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  required
                  min="1"
                  step="0.01"
                  value={paymentData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name on Card</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={paymentData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={paymentData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  required
                  maxLength="19"
                  value={paymentData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    required
                    maxLength="5"
                    value={paymentData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    required
                    maxLength="4"
                    value={paymentData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  value={paymentData.zipCode}
                  onChange={handleInputChange}
                  placeholder="12345"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Process Payment
              </button>
            </form>
          </div>

          <div className="payment-info">
            <h3>Secure Payment</h3>
            <p>
              All payments are processed through secure, encrypted channels. 
              We never store your full card details.
            </p>
            <div className="security-badges">
              <div className="badge">🔒 SSL Encrypted</div>
              <div className="badge">✓ PCI Compliant</div>
            </div>
            <div className="payment-note">
              <p>
                <strong>Note:</strong> This is a demo payment form. In production, 
                this would integrate with a secure payment processor like Stripe, 
                PayPal, or similar service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage


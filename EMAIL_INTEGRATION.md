# Email System Integration Guide

This document explains how the email system works in the MVP and how to integrate it with a real email service.

## Current Implementation

The MVP currently logs email events to the console. All email triggers are in place and ready for integration.

## Email Events

### 1. User Signup Email

**Location**: `src/pages/ProfilePage.jsx` - `handleSignup` function

**Trigger**: When a new user creates an account

**Data Available**:
- `username`: User's chosen username
- `email`: User's email address
- `location`: User's location

**Current Code**:
```javascript
console.log('Welcome email sent to:', formData.email)
console.log('Email content: Welcome to Our Ears Are Open! Your account has been created.')
```

**Recommended Email Template**:
```
Subject: Welcome to Our Ears Are Open

Dear [username],

Thank you for creating an account with Our Ears Are Open. We're here to listen and support you.

Your account details:
- Username: [username]
- Location: [location]

You can now:
- Book a session
- Start a chat
- Track your conversations
- Make donations

We're glad you're here.

With care,
The Our Ears Are Open Team
```

### 2. Booking Confirmation Email

**Location**: `src/pages/BookingPage.jsx` - `handleBooking` function

**Trigger**: When a user confirms a booking

**Data Available**:
- `date`: Selected date (formatted)
- `time`: Selected time slot
- `userEmail`: User's email (from profile)

**Current Code**:
```javascript
console.log('Email confirmation would be sent to:', 'user@example.com')
console.log('Booking details:', {
  date: format(selectedDate, 'yyyy-MM-dd'),
  time: selectedTime
})
```

**Recommended Email Template**:
```
Subject: Your Session is Confirmed - Our Ears Are Open

Dear [username],

Your session has been confirmed!

Session Details:
- Date: [date]
- Time: [time]
- Duration: 15 minutes

We look forward to listening and supporting you.

If you need to reschedule or have questions, please contact us.

With care,
The Our Ears Are Open Team
```

### 3. Payment Confirmation Email

**Location**: `src/pages/PaymentPage.jsx` - `handleSubmit` function

**Trigger**: When a payment is processed

**Data Available**:
- `amount`: Payment amount
- `email`: User's email
- `type`: Payment type (e.g., "Session Payment")

**Current Code**:
```javascript
console.log('Payment confirmation email sent to:', paymentData.email)
console.log('Payment details:', {
  amount: paymentData.amount,
  type: 'Session Payment'
})
```

**Recommended Email Template**:
```
Subject: Payment Confirmation - Our Ears Are Open

Dear [name],

Thank you for your payment.

Payment Details:
- Amount: $[amount]
- Date: [date]
- Transaction ID: [transaction_id]

This email serves as your receipt. Please keep it for your records.

With gratitude,
The Our Ears Are Open Team
```

### 4. Donation Receipt Email

**Location**: `src/pages/DonationPage.jsx` - `handleSubmit` function

**Trigger**: When a donation is completed

**Data Available**:
- `amount`: Donation amount
- `email`: Donor's email
- `name`: Donor's name (or "Anonymous")
- `anonymous`: Whether donation is anonymous

**Current Code**:
```javascript
console.log('Donation confirmation email sent to:', donorInfo.email)
console.log('Donation details:', {
  amount: finalAmount,
  anonymous: donorInfo.anonymous,
  donorName: donorInfo.anonymous ? 'Anonymous' : donorInfo.name
})
```

**Recommended Email Template**:
```
Subject: Thank You for Your Donation - Receipt

Dear [name],

Thank you for your generous donation to Our Ears Are Open!

Donation Details:
- Amount: $[amount]
- Date: [date]
- Donation ID: [donation_id]

Your contribution helps us reach more people in need. We are deeply grateful.

This email serves as your donation receipt for tax purposes.

With heartfelt thanks,
The Our Ears Are Open Team
```

## Integration Steps

### Option 1: SendGrid (Recommended)

1. **Install SendGrid**:
```bash
npm install @sendgrid/mail
```

2. **Create Email Service** (`src/services/email.js`):
```javascript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)

export const sendWelcomeEmail = async (email, username, location) => {
  const msg = {
    to: email,
    from: {
      email: 'noreply@ourearsareopen.org',
      name: 'Our Ears Are Open'
    },
    subject: 'Welcome to Our Ears Are Open',
    html: `
      <h1>Welcome, ${username}!</h1>
      <p>Thank you for creating an account with Our Ears Are Open.</p>
      <p>We're here to listen and support you.</p>
      <p>Location: ${location}</p>
    `
  }
  try {
    await sgMail.send(msg)
    console.log('Welcome email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

export const sendBookingConfirmation = async (email, date, time) => {
  // Similar implementation
}

export const sendPaymentConfirmation = async (email, amount, transactionId) => {
  // Similar implementation
}

export const sendDonationReceipt = async (email, amount, donorName, donationId) => {
  // Similar implementation
}
```

3. **Update Pages**: Replace `console.log` calls with service functions

4. **Set Environment Variable**: Add `REACT_APP_SENDGRID_API_KEY` to `.env`

### Option 2: Backend API

For better security, create a backend API that handles email sending:

1. **Backend Endpoint**: `POST /api/send-email`
2. **Frontend Call**: Use `fetch` to call the API
3. **Backend Service**: Use SendGrid, Mailgun, or AWS SES on the backend

### Option 3: Serverless Functions

Use serverless functions (Vercel, Netlify, AWS Lambda) to send emails:

1. Create serverless function
2. Call from frontend
3. Function handles email sending

## Email Service Comparison

| Service | Free Tier | Best For | Setup Difficulty |
|---------|-----------|----------|------------------|
| SendGrid | 100 emails/day | Most projects | Easy |
| Mailgun | 5,000 emails/month | Developers | Easy |
| AWS SES | 62,000 emails/month | High volume | Medium |
| Resend | 3,000 emails/month | Modern apps | Easy |

## Testing

Before going live, test all email types:

1. Create test accounts
2. Make test bookings
3. Process test payments
4. Make test donations
5. Verify all emails are received
6. Check email formatting on different clients

## Production Checklist

- [ ] Set up email service account
- [ ] Configure sender email address
- [ ] Verify domain (for better deliverability)
- [ ] Create email templates
- [ ] Test all email types
- [ ] Set up email monitoring
- [ ] Configure bounce handling
- [ ] Set up unsubscribe mechanism (if needed)
- [ ] Add email to environment variables
- [ ] Test on production domain

## Notes

- **Never expose API keys** in frontend code - use environment variables
- **Consider using a backend** for email sending to keep keys secure
- **Test email deliverability** - check spam folders
- **Monitor email metrics** - open rates, bounce rates
- **Comply with email regulations** - CAN-SPAM, GDPR if applicable


# Our Ears Are Open - MVP Website

A warm, welcoming website for people in distress to reach out and feel heard. Built with React and designed with calming, soft colors to create a safe and inviting space.

## Features

- **Landing Page**: Introduction and mission with prominent suicide prevention resources
- **Who We Are**: Team information and values
- **Communication**: Information about different ways to connect
- **Booking System**: Calendar-based session booking with email confirmations
- **Chat System**: Open queue chat for immediate support
- **User Profiles**: Simple signup and tracking of conversations and payments
- **Payment Processing**: Secure payment form (ready for integration)
- **Donation Page**: Easy donation process with email receipts

## Tech Stack

- **React 18** - UI framework
- **React Router** - Navigation
- **Vite** - Build tool and dev server
- **date-fns** - Date formatting
- **CSS** - Custom styling with warm, calming color palette

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Email System Integration

The MVP includes email functionality placeholders that log to the console. For production, you'll need to integrate with an email service. Here's how the email system works:

### Email Triggers

1. **User Signup** (`ProfilePage.jsx`)
   - Trigger: When a new user creates an account
   - Email Type: Welcome email
   - Content: Account confirmation and welcome message
   - Location: `src/pages/ProfilePage.jsx` - `handleSignup` function

2. **Booking Confirmation** (`BookingPage.jsx`)
   - Trigger: When a user confirms a booking
   - Email Type: Booking confirmation
   - Content: Date, time, and session details
   - Location: `src/pages/BookingPage.jsx` - `handleBooking` function

3. **Payment Confirmation** (`PaymentPage.jsx`)
   - Trigger: When a payment is processed
   - Email Type: Payment receipt
   - Content: Payment amount and transaction details
   - Location: `src/pages/PaymentPage.jsx` - `handleSubmit` function

4. **Donation Receipt** (`DonationPage.jsx`)
   - Trigger: When a donation is completed
   - Email Type: Donation receipt
   - Content: Donation amount and tax information
   - Location: `src/pages/DonationPage.jsx` - `handleSubmit` function

### Recommended Email Services

For production, consider integrating with:

1. **SendGrid** - Reliable, scalable, good free tier
   - Easy API integration
   - Transactional email templates
   - Good deliverability

2. **Mailgun** - Developer-friendly
   - Simple REST API
   - Good documentation
   - Free tier available

3. **AWS SES** - Cost-effective at scale
   - Very affordable
   - Requires AWS setup
   - Good for high volume

4. **Resend** - Modern, simple API
   - Great developer experience
   - React email templates support
   - Good free tier

### Implementation Example (SendGrid)

```javascript
// Create a service file: src/services/email.js
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)

export const sendWelcomeEmail = async (email, username) => {
  const msg = {
    to: email,
    from: 'noreply@ourearsareopen.org',
    subject: 'Welcome to Our Ears Are Open',
    html: `
      <h1>Welcome, ${username}!</h1>
      <p>Thank you for creating an account with Our Ears Are Open.</p>
      <p>We're here to listen and support you.</p>
    `
  }
  await sgMail.send(msg)
}
```

Then update the pages to use this service instead of console.log.

## Chat & Phone System Integration

The MVP includes a basic chat interface. For production, consider:

### Chat Options

1. **Twilio Conversations** - Full-featured chat API
2. **Socket.io** - Real-time chat with custom backend
3. **Pusher** - Real-time messaging service
4. **Intercom** - Customer support platform

### Phone Options

1. **Twilio Voice** - Programmable voice calls
2. **Vonage (formerly Nexmo)** - Voice API
3. **RingCentral** - Business phone system

## Payment Integration

The payment form is ready for integration. Recommended services:

1. **Stripe** - Most popular, excellent documentation
2. **PayPal** - Widely trusted
3. **Square** - Good for small businesses

### Stripe Integration Example

```javascript
// Install: npm install @stripe/stripe-js
import { loadStripe } from '@stripe/stripe-js'

const stripe = await loadStripe('your-publishable-key')
// Process payment with Stripe
```

## Design System

### Color Palette

- **Cream**: `#F7F5F3` - Background
- **Sage**: `#B8C5A6` - Primary actions
- **Dusty Rose**: `#D4A5A5` - Accents
- **Warm Gray**: `#8B8B8B` - Text secondary
- **Soft Brown**: `#A68B7A` - Hover states
- **Light Peach**: `#F5E6D3` - Cards and highlights

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Logo

The logo is an SVG component located in `src/components/Logo.jsx`. It features:
- Two ear shapes representing listening
- A heart in the center representing care
- Gentle waves representing openness

The logo can be exported for use on social media and for trademark purposes.

## Deployment

### Recommended Hosting

1. **Vercel** - Excellent for React apps, easy deployment
2. **Netlify** - Great for static sites, good free tier
3. **AWS Amplify** - Scalable, integrates with AWS services
4. **Cloudflare Pages** - Fast, global CDN

### Deployment Steps

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your domain
4. Set up environment variables for API keys
5. Connect your email service
6. Set up payment processing
7. Configure chat/phone systems

## Project Structure

```
distress_react/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Layout.css
│   │   ├── Logo.jsx
│   │   └── Logo.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── WhoWeArePage.jsx
│   │   ├── WhoWeArePage.css
│   │   ├── CommunicationPage.jsx
│   │   ├── CommunicationPage.css
│   │   ├── BookingPage.jsx
│   │   ├── BookingPage.css
│   │   ├── ChatPage.jsx
│   │   ├── ChatPage.css
│   │   ├── ProfilePage.jsx
│   │   ├── ProfilePage.css
│   │   ├── PaymentPage.jsx
│   │   ├── PaymentPage.css
│   │   ├── DonationPage.jsx
│   │   └── DonationPage.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Next Steps for Production

1. **Backend API**: Set up a backend to handle:
   - User authentication
   - Booking management
   - Chat message storage
   - Payment processing
   - Email sending

2. **Database**: Choose a database for:
   - User accounts
   - Booking records
   - Conversation history
   - Payment records

3. **Security**: Implement:
   - HTTPS
   - Secure authentication
   - Input validation
   - Rate limiting
   - CORS configuration

4. **Testing**: Add:
   - Unit tests
   - Integration tests
   - E2E tests
   - Accessibility testing

5. **Analytics**: Set up:
   - Google Analytics or similar
   - Error tracking (Sentry)
   - Performance monitoring

## Support

For questions or issues, please refer to the codebase or contact the development team.

---

Built with care for those who need to be heard. ❤️


import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import WhoWeArePage from './pages/WhoWeArePage'
import CommunicationPage from './pages/CommunicationPage'
import BookingPage from './pages/BookingPage'
import ChatPage from './pages/ChatPage'
import ProfilePage from './pages/ProfilePage'
import PaymentPage from './pages/PaymentPage'
import DonationPage from './pages/DonationPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/communication" element={<CommunicationPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/donate" element={<DonationPage />} />
      </Routes>
    </Layout>
  )
}

export default App


import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo-link">
              <Logo />
              <span className="logo-text">Our Ears Are Open</span>
            </Link>
            <nav className="nav">
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
              <Link 
                to="/who-we-are" 
                className={location.pathname === '/who-we-are' ? 'active' : ''}
              >
                Who We Are
              </Link>
              <Link 
                to="/communication" 
                className={location.pathname === '/communication' ? 'active' : ''}
              >
                Communication
              </Link>
              <Link 
                to="/booking" 
                className={location.pathname === '/booking' ? 'active' : ''}
              >
                Book a Session
              </Link>
              <Link 
                to="/chat" 
                className={location.pathname === '/chat' ? 'active' : ''}
              >
                Chat
              </Link>
              <Link 
                to="/donate" 
                className={location.pathname === '/donate' ? 'active' : ''}
              >
                Donate
              </Link>
              <Link 
                to="/profile" 
                className={location.pathname === '/profile' ? 'active' : ''}
              >
                Profile
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Our Ears Are Open. All rights reserved.</p>
          <p className="footer-note">You are not alone. We are here to listen.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout


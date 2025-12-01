import './Logo.css'

function Logo() {
  return (
    <svg 
      className="logo" 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Our Ears Are Open Logo"
    >
      {/* Ear shape - left */}
      <path 
        d="M 25 35 Q 20 25 15 30 Q 10 35 15 45 Q 20 55 25 50 Q 30 45 25 35 Z" 
        fill="var(--color-sage)"
        opacity="0.8"
      />
      {/* Ear shape - right */}
      <path 
        d="M 75 35 Q 80 25 85 30 Q 90 35 85 45 Q 80 55 75 50 Q 70 45 75 35 Z" 
        fill="var(--color-sage)"
        opacity="0.8"
      />
      {/* Heart in the center - representing care and compassion */}
      <path 
        d="M 50 40 Q 45 35 40 40 Q 40 45 50 55 Q 60 45 60 40 Q 55 35 50 40 Z" 
        fill="var(--color-dusty-rose)"
        opacity="0.9"
      />
      {/* Gentle waves - representing listening and openness */}
      <path 
        d="M 30 70 Q 35 65 40 70 Q 45 75 50 70 Q 55 65 60 70 Q 65 75 70 70" 
        stroke="var(--color-soft-brown)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )
}

export default Logo


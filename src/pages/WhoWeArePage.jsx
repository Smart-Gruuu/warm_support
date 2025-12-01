import './WhoWeArePage.css'

function WhoWeArePage() {
  return (
    <div className="who-we-are-page">
      <div className="container">
        <section className="page-header">
          <h1 className="page-title">Who We Are</h1>
          <p className="page-intro">
            We are a community of compassionate listeners dedicated to providing 
            support and understanding to those who need it most.
          </p>
        </section>

        <section className="our-story">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <p>
              Our Ears Are Open was born from a simple observation: in times of 
              distress, what people need most is someone who will truly listen. 
              Too often, those struggling with loneliness, anxiety, depression, 
              or life's challenges feel isolated and unheard.
            </p>
            <p>
              We recognized that while professional mental health services are 
              crucial, there's also a profound need for accessible, immediate 
              support from people who care. Our mission is to bridge that gap 
              by providing a safe, welcoming space where anyone can reach out 
              and be heard.
            </p>
            <p>
              What started as a small initiative has grown into a community of 
              trained volunteers and staff members who are committed to offering 
              empathy, understanding, and a listening ear. We believe that 
              everyone deserves to feel valued, understood, and supported.
            </p>
          </div>
        </section>

        <section className="our-values">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Compassion</h3>
              <p>We approach every conversation with empathy and understanding, 
              recognizing that each person's experience is unique and valid.</p>
            </div>
            <div className="value-card">
              <h3>Accessibility</h3>
              <p>We believe support should be available to everyone, regardless 
              of their circumstances. Our services are designed to be easy to 
              access and use.</p>
            </div>
            <div className="value-card">
              <h3>Respect</h3>
              <p>We honor the dignity of every person who reaches out to us. 
              Your story matters, and we treat it with the respect it deserves.</p>
            </div>
            <div className="value-card">
              <h3>Safety</h3>
              <p>We create a safe, non-judgmental space where you can share 
              openly and honestly without fear of criticism or dismissal.</p>
            </div>
          </div>
        </section>

        <section className="our-team">
          <h2 className="section-title">Our Team</h2>
              <p className="team-intro">
                Our team consists of dedicated volunteers and staff members who 
                have undergone training in active listening, empathy, and crisis 
                support. While we are not a replacement for professional mental 
                health services, we provide a compassionate ear and emotional 
                support to those who need it.
              </p>
              <p className="team-note">
                <em>Note: Team member bios and photos will be added here as provided.</em>
              </p>
        </section>

        <section className="contact-us">
          <h2 className="section-title">Get in Touch</h2>
          <p>
            If you have questions about our services or would like to learn more 
            about how we can help, please don't hesitate to reach out.
          </p>
          <div className="contact-actions">
            <a href="/booking" className="btn btn-primary">Book a Session</a>
            <a href="/chat" className="btn btn-secondary">Start a Chat</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WhoWeArePage


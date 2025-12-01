import { useState } from 'react'
import { format, addDays, startOfWeek, addWeeks, isSameDay } from 'date-fns'
import './BookingPage.css'

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [weekOffset, setWeekOffset] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Generate available time slots (9 AM to 8 PM, every 15 minutes)
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour < 20; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        slots.push(time)
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  // Generate calendar days for the week
  const getWeekDays = () => {
    const start = startOfWeek(addDays(new Date(), weekOffset * 7), { weekStartsOn: 1 })
    const days = []
    for (let i = 0; i < 7; i++) {
      days.push(addDays(start, i))
    }
    return days
  }

  const weekDays = getWeekDays()

  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // In a real app, this would send data to backend
      // For MVP, we'll just show confirmation
      setShowConfirmation(true)
      
      // Simulate email confirmation
      console.log('Email confirmation would be sent to:', 'user@example.com')
      console.log('Booking details:', {
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: selectedTime
      })
    }
  }

  if (showConfirmation) {
    return (
      <div className="booking-page">
        <div className="container">
          <div className="confirmation-box">
            <div className="confirmation-icon">✓</div>
            <h1>Booking Confirmed!</h1>
            <p>Your session has been scheduled for:</p>
            <div className="confirmation-details">
              <p><strong>Date:</strong> {format(selectedDate, 'EEEE, MMMM d, yyyy')}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
            </div>
            <p className="confirmation-note">
              A confirmation email has been sent to your registered email address. 
              Please check your inbox for details.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setShowConfirmation(false)
                setSelectedDate(null)
                setSelectedTime(null)
              }}
            >
              Book Another Session
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-page">
      <div className="container">
        <section className="page-header">
          <h1 className="page-title">Book a Session</h1>
          <p className="page-intro">
            Choose a date and time that works for you. Sessions are 15 minutes long 
            and provide a safe space to share and be heard.
          </p>
        </section>

        <div className="booking-container">
          <div className="calendar-section">
            <div className="calendar-header">
              <button 
                className="calendar-nav-btn"
                onClick={() => setWeekOffset(weekOffset - 1)}
              >
                ← Previous Week
              </button>
              <h2>{format(weekDays[0], 'MMMM yyyy')}</h2>
              <button 
                className="calendar-nav-btn"
                onClick={() => setWeekOffset(weekOffset + 1)}
              >
                Next Week →
              </button>
            </div>
            <div className="calendar-grid">
              {weekDays.map((day, index) => (
                <button
                  key={index}
                  className={`calendar-day ${selectedDate && isSameDay(day, selectedDate) ? 'selected' : ''}`}
                  onClick={() => handleDateSelect(day)}
                >
                  <div className="day-name">{format(day, 'EEE')}</div>
                  <div className="day-number">{format(day, 'd')}</div>
                </button>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div className="time-section">
              <h3>Select a Time</h3>
              <p className="selected-date">
                {format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </p>
              <div className="time-slots-grid">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedDate && selectedTime && (
            <div className="booking-summary">
              <h3>Booking Summary</h3>
              <div className="summary-details">
                <p><strong>Date:</strong> {format(selectedDate, 'EEEE, MMMM d, yyyy')}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Duration:</strong> 15 minutes</p>
              </div>
              <button className="btn btn-primary btn-large" onClick={handleBooking}>
                Confirm Booking
              </button>
              <p className="booking-note">
                You'll receive an email confirmation once your booking is complete.
              </p>
            </div>
          )}
        </div>

        <div className="chat-support">
          <h3>Questions? Need Help?</h3>
          <p>Our consultants are available to help you with the booking process.</p>
          <a href="/chat" className="btn btn-secondary">Start a Chat</a>
        </div>
      </div>
    </div>
  )
}

export default BookingPage


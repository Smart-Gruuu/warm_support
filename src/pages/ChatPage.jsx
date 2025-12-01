import { useState, useRef, useEffect } from 'react'
import './ChatPage.css'

function ChatPage() {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [queuePosition, setQueuePosition] = useState(null)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleConnect = () => {
    // Simulate queue connection
    setQueuePosition(3)
    setTimeout(() => {
      setIsConnected(true)
      setQueuePosition(null)
      setMessages([
        {
          id: 1,
          text: "Hello, thank you for reaching out. I'm here to listen. How are you feeling today?",
          sender: 'listener',
          timestamp: new Date()
        }
      ])
    }, 2000)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim() || !isConnected) return

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputMessage('')

    // Simulate listener response (in real app, this would come from backend)
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        text: "I hear you. That sounds really difficult. Can you tell me more about what's on your mind?",
        sender: 'listener',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, response])
    }, 1500)
  }

  const handleEndChat = () => {
    if (window.confirm('Are you sure you want to end this chat session?')) {
      setIsConnected(false)
      setMessages([])
      setInputMessage('')
    }
  }

  return (
    <div className="chat-page">
      <div className="container">
        <section className="page-header">
          <h1 className="page-title">Chat with a Listener</h1>
          <p className="page-intro">
            Connect with a trained listener right away. No booking required—just 
            start chatting when you're ready. Sessions are 15 minutes long.
          </p>
        </section>

        {!isConnected ? (
          <div className="chat-connect">
            <div className="connect-box">
              <h2>Ready to Connect?</h2>
              <p>
                Click the button below to join the chat queue. A listener will 
                be with you shortly.
              </p>
              {queuePosition !== null ? (
                <div className="queue-status">
                  <p>Connecting you to a listener...</p>
                  <p className="queue-position">
                    Your position in queue: {queuePosition}
                  </p>
                  <div className="loading-spinner"></div>
                </div>
              ) : (
                <button className="btn btn-primary btn-large" onClick={handleConnect}>
                  Start Chatting
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="chat-container">
            <div className="chat-header">
              <div className="chat-status">
                <span className="status-indicator"></span>
                <span>Connected with a listener</span>
              </div>
              <button className="end-chat-btn" onClick={handleEndChat}>
                End Chat
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.sender === 'user' ? 'user-message' : 'listener-message'}`}
                >
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                className="chat-input"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                autoFocus
              />
              <button type="submit" className="send-btn" disabled={!inputMessage.trim()}>
                Send
              </button>
            </form>

            <div className="chat-info">
              <p>
                <strong>Note:</strong> This is a 15-minute session. If you need 
                additional support, you can start a new chat or book a scheduled session.
              </p>
            </div>
          </div>
        )}

        <div className="chat-alternatives">
          <h3>Prefer a Scheduled Session?</h3>
          <p>If you'd like to book a specific time, you can schedule a session instead.</p>
          <a href="/booking" className="btn btn-secondary">Book a Session</a>
        </div>
      </div>
    </div>
  )
}

export default ChatPage


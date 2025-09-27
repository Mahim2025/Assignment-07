import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

// --- Tickets Data (12 items) ---
const ticketData = [
  {
    id: "#1001",
    title: "Login Issues - Can't Access Account",
    description:
      "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
    customer: "John Smith",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/15/2024",
  },
  {
    id: "#1002",
    title: "Payment Failed - Card Declined",
    description:
      "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
    customer: "Sarah Johnson",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/16/2024",
  },
  {
    id: "#1003",
    title: "Unable to Download Invoice",
    description:
      "Customer cannot download their January invoice from the billing section. The download button is...",
    customer: "Michael Brown",
    priority: "MEDIUM PRIORITY",
    status: "In Progress",
    createdAt: "1/7/2024",
  },
  {
    id: "#1004",
    title: "Incorrect Billing Address",
    description:
      "Customer’s billing address shows a different city. They updated it but it still displays the old one.",
    customer: "Emily Davis",
    priority: "LOW PRIORITY",
    status: "Open",
    createdAt: "1/13/2024",
  },
  {
    id: "#1005",
    title: "App Crash on Launch",
    description:
      "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
    customer: "David Wilson",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/9/2024",
  },
  {
    id: "#1006",
    title: "Refund Not Processed",
    description:
      "Customer requested a refund two weeks ago but has not received the amount yet.",
    customer: "Sophia Taylor",
    priority: "MEDIUM PRIORITY",
    status: "In Progress",
    createdAt: "1/12/2024",
  },
  {
    id: "#1007",
    title: "Two-Factor Authentication Issue",
    description:
      "Customer is not receiving 2FA codes on their registered phone number.",
    customer: "James Anderson",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/21/2024",
  },
  {
    id: "#1008",
    title: "Unable to Update Profile Picture",
    description:
      "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
    customer: "Olivia Martinez",
    priority: "LOW PRIORITY",
    status: "Open",
    createdAt: "1/22/2024",
  },
  {
    id: "#1009",
    title: "Subscription Auto-Renewal",
    description:
      "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
    customer: "Liam Thomas",
    priority: "MEDIUM PRIORITY",
    status: "In Progress",
    createdAt: "1/19/2024",
  },
  {
    id: "#1010",
    title: "Missing Order Confirmation Email",
    description:
      "Customer placed an order but didn’t receive a confirmation email even though payment succeeded.",
    customer: "Isabella Garcia",
    priority: "MEDIUM PRIORITY",
    status: "Open",
    createdAt: "1/24/2024",
  },
  {
    id: "#1011",
    title: "Broken Link in FAQ",
    description:
      "User reported that the FAQ page has a broken link in the troubleshooting section.",
    customer: "Ethan Lee",
    priority: "LOW PRIORITY",
    status: "Open",
    createdAt: "1/25/2024",
  },
  {
    id: "#1012",
    title: "Slow Page Load Times",
    description:
      "Website takes too long to load on slower internet connections. Needs optimization.",
    customer: "Ava Walker",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/26/2024",
  },
];

// Initial state data creation: All 12 tickets start in the 'tickets' (Open) state.
const initialOpenTickets = ticketData;
const initialInProgress = []; // In Progress starts empty
const initialResolved = []; // Resolved starts empty


function App() {
  // State initialization
  const [tickets, setTickets] = useState(initialOpenTickets);
  const [inProgress, setInProgress] = useState(initialInProgress);
  const [resolved, setResolved] = useState(initialResolved);

  /**
   * Moves a ticket from the Open list to the In Progress list.
   * @param {object} ticket - The ticket object to move.
   */
  const handleAddToInProgress = (ticket) => {
    // Prevent adding if already in progress or resolved.
    if (
      inProgress.find((t) => t.id === ticket.id) ||
      resolved.find((t) => t.id === ticket.id)
    ) {
      toast.info("This ticket is already in progress or resolved.");
      return;
    }
    
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    setInProgress((prev) => [...prev, ticket]);
    toast.success(`Added "${ticket.title}" to In Progress.`);
  };

  /**
   * Moves a ticket from the In Progress list to the Resolved list.
   * @param {object} ticket - The ticket object to move.
   */
  const handleCompleteTask = (ticket) => {
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [...prev, ticket]);
    
    toast.success(`Marked "${ticket.title}" as Resolved.`);
  };

  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CS — Ticket System</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#faq">FAQ</a>
          <a href="#changelog">Changelog</a>
          <a href="#blog">Blog</a>
          <a href="#download">Download</a>
          <a href="#contact">Contact</a>
          <button className="new-ticket-btn">+ New Ticket</button>
        </div>
      </nav>

      {/* Banner Section - Shows current counts */}
      <div className="banner-section">
        <div className="banner in-progress-banner">
          <h3>In Progress</h3>
          <p>{inProgress.length}</p> 
        </div>
        <div className="banner resolved-banner">
          <h3>Resolved</h3>
          <p>{resolved.length}</p> 
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-section">
        {/* Left Column: Customer Tickets (Open) */}
        <div className="tickets-column">
          <h3>Customer Tickets (Open)</h3>
          <div className="ticket-grid">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="ticket-card"
                onClick={() => handleAddToInProgress(ticket)}
                style={{ cursor: "pointer" }}
                title="Click to add to In Progress"
              >
                <div className="ticket-header">
                  <h4>{ticket.title}</h4>
                  <span
                    className={`status ${ticket.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    ● {ticket.status}
                  </span>
                </div>
                <p>{ticket.description}</p>
                <div className="ticket-footer">
                  <span>{ticket.id}</span>
                  <span
                    className={`priority ${ticket.priority
                      .split(" ")[0]
                      .toLowerCase()}`}
                  >
                    {ticket.priority}
                  </span>
                  <span>{ticket.customer}</span>
                  <span>{ticket.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

       {/* Right Column: Task Status */}
        <div className="task-column">
          <h3>Task Status (In Progress)</h3>
          
          {/* IN PROGRESS TASKS: Display cards with Complete button */}
          {inProgress.length === 0 ? (
            <p style={{ marginTop: '10px' }}>No tasks in progress.</p>
          ) : (
            inProgress.map((ticket) => (
              <div key={ticket.id} className="task-card">
                <span>{ticket.title}</span>
                <button
                  className="complete-btn"
                  onClick={() => handleCompleteTask(ticket)}
                >
                  Complete
                </button>
              </div>
            ))
          )}

          <h3 style={{ marginTop: '30px' }}>Resolved Tasks</h3> 
          
          {/* RESOLVED TASKS: Display static cards */}
          {resolved.length === 0 ? (
            <p style={{ marginTop: '10px' }}>No resolved tasks yet.</p>
          ) : (
            resolved.map((ticket) => (
              <div 
                key={ticket.id} 
                className="task-card"
                style={{ 
                    borderLeft: '4px solid #1db954', 
                    cursor: 'default' 
                }}
                title="This task is resolved"
              >
                <span>{ticket.title}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-content-top">
          <div className="footer-column logo-column">
            <h3>CS — Ticket System</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#contact-sales">Contact Sales</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#products">Products & Services</a></li>
              <li><a href="#stories">Customer Stories</a></li>
              <li><a href="#apps">Download Apps</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#join">Join Us</a></li>
            </ul>
          </div>

          <div className="footer-column social-links-column">
            <h3>Social Links</h3>
            <ul>
              <li><a href="#twitter"><span className="social-icon">✖️</span> @CS — Ticket System</a></li>
              <li><a href="#linkedin"><span className="social-icon">👔</span> @CS — Ticket System</a></li>
              <li><a href="#facebook"><span className="social-icon">📘</span> @CS — Ticket System</a></li>
              <li><a href="mailto:support@cst.com"><span className="social-icon">📧</span> support@cst.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
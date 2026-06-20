import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">

        <div className="footer-section company-section">
          <div className="footer-logo">
            <div className="footer-logo-icon">L</div>

            <div>
              <h2>
                LOGI<span>TRACK</span>
              </h2>
              <p>Fleet & Delivery Platform</p>
            </div>
          </div>

          <p className="company-description">
            LogiTrack is a modern fleet and delivery management platform
            designed to simplify logistics operations, improve efficiency,
            and provide complete visibility into delivery activities.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Dashboard</li>
            <li>Tasks</li>
            <li>Vehicles</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>

          <ul>
            <li>Fleet Management</li>
            <li>Task Assignment</li>
            <li>Vehicle Tracking</li>
            <li>Reporting</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>

          <ul>
            <li>📧 support@logitrack.com</li>
            <li>📞 +92 300 1234567</li>
            <li>📍 Lahore, Pakistan</li>
          </ul>
        </div>

      </footer>

      <div className="copyright">
        © 2026 LogiTrack. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-left">

          <div className="hero-badge">
            Smart Fleet. Smooth Deliveries. Stronger Business.
          </div>

          <h1>
            Manage Your Fleet.
            <br />
            Deliver With
            <span> Confidence.</span>
          </h1>

          <p>
            LogiTrack helps dispatchers and drivers work together
            seamlessly through efficient task management,
            vehicle tracking, and delivery monitoring.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-right">
          🚚
        </div>

      </section>

      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">
          <div className="feature-icon">🚛</div>
          <h3>Fleet Management</h3>
          <p>
            Manage all vehicles from one dashboard.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📋</div>
          <h3>Task Management</h3>
          <p>
            Create and assign delivery tasks easily.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Real-Time Reports</h3>
          <p>
            Monitor deliveries and fleet performance.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure Access</h3>
          <p>
            Role-based access for dispatchers and drivers.
          </p>
        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="stat-box">
          <h2>1250+</h2>
          <p>Deliveries</p>
        </div>

        <div className="stat-box">
          <h2>320+</h2>
          <p>Drivers</p>
        </div>

        <div className="stat-box">
          <h2>85+</h2>
          <p>Vehicles</p>
        </div>

        <div className="stat-box">
          <h2>98%</h2>
          <p>Success Rate</p>
        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>
          Ready To Transform Your Logistics Operations?
        </h2>

        <p>
          Start managing deliveries and fleets efficiently today.
        </p>

        <button>
          Join LogiTrack
        </button>

      </section>

    </div>
  );
}

export default Home;
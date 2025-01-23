import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <img
        src="data:image/png;base64,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" // Replace with your profile picture URL
        alt="Profile"
        className="profile-pic"
      />
      <h1>Nivetha Elanchezhiyan</h1>
      <p className="tagline">Aspiring Electronics and Communication Engineer | IoT Enthusiast</p>
      <p>
        <a href="https://www.linkedin.com/in/nivethaelanchezhiyan235/" target="_blank" rel="noopener noreferrer">
           LinkedIn |   
        </a>
        <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
           | Github
        </a>
      </p>
    </header>

    {/* About Section */}
    <section className="light-bg">
      <h2>About Me</h2>
      <p>
        I'm an emerging engineer specializing in IoT devices, embedded systems, and hardware. Passionate about bridging
        technology and real-world applications, I am eager to contribute to the field with innovative solutions.
      </p>
    </section>

    {/* Experiences Section */}
    <section className="dark-bg">
      <h2>Experiences</h2>
      <div className="experience-card">
        <h3>IoT Internship at Robomatiic</h3>
        <p>
          Duration: 15 days <br />
        </p>
        <p>
          Gained hands-on experience in IoT, focusing on integrating sensors, hardware systems, and real-time data
          monitoring.
        </p>
      </div>
      <div className="experience-card">
        <h3>Hackathon Participation</h3>
        <p>
          Participated in KGISL HACKATHON - SPECTRA2K25 and other inter-college events, showcasing innovative ideas like smart
          traffic management and IoT-based monitoring systems.
        </p>
      </div>
    </section>

    {/* Projects Section */}
    <section className="light-bg">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Smart Traffic Management System</h3>
        <p>
          Designed an AI-driven system using IoT sensors and machine learning algorithms to optimize traffic flow and
          improve emergency response times.
        </p>
      </div>
      <div className="project-card">
        <h3>Wireless Water Level Monitoring System</h3>
        <p>
          Built a system using ESP32 modules and sensors to detect water levels, with real-time alerts and display
          integration.
        </p>
      </div>
      <div className="project-card">
        <h3>Office People Tracking System</h3>
        <p>
          Developed a system with PIR and fingerprint sensors for tracking people and displaying data on a user-friendly
          dashboard.
        </p>
      </div>
    </section>

    {/* Contact Section */}
    <section className="dark-bg">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to discuss projects or collaborations.</p>
      <p>
        <a href="727723euec124@skcet.ac.in">727723euec124@skcet.ac.in</a>
      </p>
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="nivethaelanchezhiyan235" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/nivethaelanchezhiyan235?trk=profile-badge">Nivetha Elanchezhiyan</a></div>
    </section>

    {/* Footer */}
    <footer>
      <p>&copy; 2025 NivethaElanchezhiyan. All rights reserved.</p>
    </footer>
  </>
  )
}

export default App

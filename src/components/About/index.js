// Write your code here
import './index.css'
import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-lg-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-sm-image"
      />
    </div>
  </div>
)

export default About

// Write your code here
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="not-found-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-fond-image"
      />
      <h1 className="lost-you-way">Lost Your Way?</h1>
      <p className="not-found-description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound

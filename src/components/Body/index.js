// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-menu-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <div>
                <ul className="list-container">
                  <li className="item">Item 1</li>
                  <li className="item">Item 2</li>
                  <li className="item">Item 3</li>
                  <li className="item">Item 4</li>
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectuter adipiscing elit, sed to
                eiusmod tempor incidident at labore et dolore magna aliqua.Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div className="right-navbar-menu-container">
              <h1 className="right-navbar-heading">Right Navbar Menu</h1>
              <div className="ads-container">
                <div className="ad-container">
                  <p className="ad-text">Ad 1</p>
                </div>
                <div className="ad-container">
                  <p className="ad-text">Ad 2</p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="configuration-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="check-box-container">
            <input
              type="checkbox"
              id="content"
              className="check-box"
              onChange={onToggleShowContent}
              defaultChecked
            />
            <label htmlFor="content" className="label-text">
              Content
            </label>
          </div>
          <div className="check-box-container">
            <input
              type="checkbox"
              id="left-navbar"
              className="check-box"
              onChange={onToggleShowLeftNavbar}
              defaultChecked
            />
            <label htmlFor="left-navbar" className="label-text">
              Left Navbar
            </label>
          </div>
          <div className="check-box-container">
            <input
              type="checkbox"
              id="right-navbar"
              className="check-box"
              onChange={onToggleShowRightNavbar}
              defaultChecked
            />
            <label htmlFor="right-navbar" className="label-text">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

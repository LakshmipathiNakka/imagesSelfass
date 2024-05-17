// Importing CSS file for styling
import './index.css' // Importing styles from './index.css'

// TabItem functional component definition
const TabItem = props => {
  // Destructuring props to extract tabDetails, setActiveTabId, and isActive
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  // Function to handle tab click
  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  // Determine the class name for the tab button based on isActive
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      {' '}
      {/* Tab item */}
      <p type="button" onClick={onClickTab} className={tabBtnClassName}>
        {' '}
        {/* Tab button */}
        {displayText} {/* Display text */}
      </p>
    </li>
  )
}

export default TabItem // Exporting TabItem component as the default export

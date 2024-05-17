// Importing necessary components

import AppStore from './components/AppStore' // Importing AppStore component from './components/CityStore'

// Importing CSS file for styling
import './App.css' // Importing styles from './App.css'

// Defining functional component App
const App = () => (
  <div className="app-container">
    <AppStore />
  </div>
)

export default App // Exporting App component as the default export

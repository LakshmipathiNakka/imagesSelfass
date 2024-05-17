// Importing CSS file for styling
import './index.css' // Importing styles from './index.css'

// CityItem functional component definition
const ImageItem = props => {
  // Destructuring props to extract cityDetails
  const {cityDetails} = props
  const {cityName, imageUrl} = cityDetails

  // Initializing a variable for success status

  // Function to handle form submission

  return (
    <div>
      {/* City item card */}
      <li className="city-item col-sm-6 col-lg-3">
        <img className="city-image" src={imageUrl} alt={cityName} />
        <p className="city-name">{cityName}</p>
        <div>
          {/* Button to open modal */}
          <button type="button" className="custom-button">
            Know More
          </button>
        </div>
      </li>
    </div>
  )
}

export default ImageItem // Exporting CityItem component as the default export

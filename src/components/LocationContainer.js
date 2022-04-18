import React from 'react'
import LocationInfo from './LocationInfo'

function LocationContainer({location}) {
  // console.log(location)
  return (
    <div>
      <LocationInfo location={location}/>
    </div>
  )
}

export default LocationContainer
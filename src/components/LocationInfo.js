import React, { useEffect, useState } from 'react'

function LocationInfo({location}) {

    const [name, setName] = useState('')
    const [type, setType] =useState('')
    const [dimension, setDimension] = useState('')
    const [residents, setResidents] = useState([])

    useEffect(() =>{
        if(location){
            setName(location.name)
            setType(location.type)
            setDimension(location.dimension)
            setResidents(location.residents)
        }
    },[location])


  return (
    <div className='LocationInfo'>
      <h4>👽Location name: {name}</h4>
      <h4>🪐Location type: {type}</h4>
      <h4>🌮Location dimension: {dimension}</h4>
      <h4>👨🏻Location residents: {residents.length}</h4>
    </div>
  )
}

export default LocationInfo
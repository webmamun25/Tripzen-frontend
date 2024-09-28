import React, { useEffect, useState } from 'react'

const TripData = () => {
    const [locations,setLocations]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/trip')
        .then(res=>res.json())
        .then(data=>setLocations(data))
    },[])

    console.log(locations)
  return [locations]
}

export default TripData
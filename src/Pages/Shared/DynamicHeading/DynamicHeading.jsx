import React from 'react'

const DynamicHeading = ({heading,subheading}) => {
  return (
    <div>
        <h3 >{heading}</h3>
        <h1>{subheading}</h1>
    </div>
  )
}

export default DynamicHeading
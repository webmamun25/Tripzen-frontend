import React from 'react'

const CommonButton = ({info}) => {
  return (
    <button className="text-white bg-[#1BBC9B] hover:bg-[#1BBC9B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{info}</button>
  )
}

export default CommonButton
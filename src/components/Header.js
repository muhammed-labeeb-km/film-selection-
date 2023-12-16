import React from 'react'

function Header(props) {
    const {onAct} = props
  return (
    <div className='text-center'>
      <select onChange={onAct} name="status" id="" className='w-25 bg-secondary m-5 p-3 text-center'>
      <option value="all">All</option>
      <option value="available">Available</option>
      <option value="non-available">Not Available</option>
      </select>
    </div>
  )
}

export default Header

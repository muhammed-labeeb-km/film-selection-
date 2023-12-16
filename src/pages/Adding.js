import React, { useState } from 'react';

function Adding() {
  const [detail, setDetail] = useState({
    title: '',
    genre: '',
    rating: '',
    available: false, // Initial value for the 'available' field
  });

  const takeval = (field, value) => {
    if (field === 'available') {
      // Convert the radio button value to a boolean
      setDetail({
        ...detail,
        [field]: value === 'available',
      });
    } else {
      // For other fields, update normally
      setDetail({
        ...detail,
        [field]: value,
      });
    }
  };

  const selectingAll = () => {
    console.log(detail);
  };

  return (
    <div className='text-center'>
      <br />
      <input
        onChange={(e) => takeval('title', e.target.value)}
        className='p-1 m-2 bg-warning text-light'
        type='text'
        placeholder='title'
      />
      <br />
      <input
        onChange={(e) => takeval('genre', e.target.value)}
        className='p-1 m-2 bg-warning text-light'
        type='text'
        placeholder='genre'
      />
      <br />
      <input
        onChange={(e) => takeval('rating', e.target.value)}
        className='p-1 m-2 bg-warning text-light'
        type='text'
        placeholder='rating'
      />
      <br />
      <label>
  <input
    onChange={(e) => takeval('available', e.target.value)}
    className='p-1 m-2 bg-warning text-light'
    type='radio'
    value='available'
    name='availability' // Same name for both radio buttons
  />
  Available
</label>
<label>
  <input
    onChange={(e) => takeval('available', e.target.value)}
    className='p-1 m-2 bg-warning text-light'
    type='radio'
    value='non-available'
    name='availability' // Same name for both radio buttons
  />
  Not Available
</label>

      <br />
      <button onClick={selectingAll}>Select</button>
      <br />
    </div>
  );
}

export default Adding;

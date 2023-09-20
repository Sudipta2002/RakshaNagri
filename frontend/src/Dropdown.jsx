import React, { useState } from 'react'
import {Select,MenuItem, FormLabel} from '@mui/material';

const Dropdown = () => {
    const [value,setValue]= useState("");
    function handleChange(e){
        setValue(e.target.value);
    }
  return (
    <div className='flex-col justify-center'>
      <div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Kind
          </label>
        </div>
        <div>
          <Select value={value} displayEmpty onChange={handleChange}>
              <MenuItem value="" disabled>Select Problem</MenuItem>
              <MenuItem value={1}>Electricity</MenuItem>
              <MenuItem value={2}>Water Crisis</MenuItem>
              <MenuItem value={3}>Road Damage</MenuItem>
              <MenuItem value={4}>Pond Treatment</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
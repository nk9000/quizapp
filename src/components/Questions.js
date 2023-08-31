import React, { useState } from 'react'

const Questions = () => {
    const [checked ,setChecked] = useState(0)
    function onSelect()
    {
        setChecked(true);
        console.log('onselect')
    }
  return (
    
    <div className='questions'>
    <h1 className='title text-light'>Simple Question 1</h1>

    <ul>
        <li>
            <input 
            type='radio'
            value={false}
            name='options'
            id='q1-option'
            onChange={()=>onSelect()}
            />

        <label className='text-primary' htmlFor='q1-option'>option</label>
        <div className='check checked'></div>
        </li>
    </ul>
    </div>
  )
}

export default Questions
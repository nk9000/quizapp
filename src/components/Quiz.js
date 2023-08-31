import React from 'react'
import Questions from './Questions'

const Quiz = () => {
  function onNext(){
    console.log('on next')
  }
  function onPrev(){
    console.log("on prev")
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <Questions></Questions>
      <div className='grid'>
      <button className='btn prev' onClick={onPrev}>Prev</button>
      <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz
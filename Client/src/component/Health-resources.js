import React from 'react'
import './Health-resources.css'
import search from './Image/search.png'
import proteins from './Image/proteins.png'
import drugs from './Image/drugs.png'

function Healthresources() {
  return (
    <div className='background'>
        <h1>Health Resources</h1>
        <div className='Icons'>
            <div className='divimg'><img src={drugs}/><h4>Find Drug </h4></div>
            <div className='divimg'><img src={proteins}/><h4>Find Supplement</h4></div>
            <div className='divimg'><img src={search}/><h4>Pill Checker</h4></div>
        </div>
    </div>
  )
}

export default Healthresources
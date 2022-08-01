import React from 'react'
import './Aboutus.css'
import pic from './Image/Aboutusimg.jpg'
function Aboutus() {
  return (
    <div className='aboutus'>
      <div class="container px-4">
        <div class="row gx-2">
          <div class="col p-3">
            <img className='imgabout' src={pic}/>
          </div>
          <div class="col p-3 about-us-text">
            <h2>Drug Interaction Checker</h2>
            <h4>Drug interactions can result in unwanted side <br/> effects, reduce the effectiveness of your medicine <br/> or possibly increase the action of a particular <br/> medicine. Our Drug Interactions Report can help <br/> you determine if the drugs you are taking have <br/> any adverse interactions with each other, with <br/> over the counter drugs or with your favorite <br/> herbals and vitamins.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
import React from 'react'
import './Reviews.css'
import Banner1 from './Image/Banner1.jpg'
import Banner2 from './Image/Banner2.jpg'
import Aboutusimg from './Image/Aboutusimg.jpg'
function Reviews() {
  return (
    <div className='ourreviews container pt-5 pb-5'>
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Banner1} class="d-block w-100 imgreviews" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Banner2} class="d-block w-100 imgreviews" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Aboutusimg} class="d-block w-100 imgreviews" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Reviews
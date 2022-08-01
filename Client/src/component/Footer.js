import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='footermaindiv'>
            <div class="container p-4">
                <div class="row">
                    <div class="col-12 col-md-3">
                    <h3><span className='x'>X</span><span className='ure1'>ure</span><span className='med'>MED</span></h3>
                    </div>
                    <div class="col-4 col-md-2 footercomp">
                    <a>Feedback</a>
                    <a>Community</a>
                    <a>Shipping</a>
                    <a>Returns</a>
                    <a>FAQ</a>
                    </div>
                    <div class="col-4 col-md-2 footercomp">
                    <a>Accessibility</a>
                    <a>Careers</a>
                    <a>Privacy Policy</a>
                    <a>Terms & conditions</a>
                    <a>Press Enquiries</a>
                    </div>
                    <div class="col-4 col-md-2 footercomp">
                    <a>Contact us</a>
                    <a>456 GMTsoftware</a>
                    <a>CA 95673</a>
                    <a>+2348083338392</a>
                    <a>xuremed@gmail.com</a>
                    </div>
                    <div class="col-12 col-md-3">
                    <h5>Find us on:</h5>
                    <div className='icons'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
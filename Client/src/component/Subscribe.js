import React from 'react'
import './Subscribe.css'

function Subscribe() {
  return (
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col align-self-center p-0">
                    <div className='subscribedivmain'>
                    <div className='subscribesecdiv'>
                    <h3><span className='x'>X</span><span className='ure'>ure</span><span className='med'>MED</span></h3>
                    <h6>Sign up for our free XureMed newsletter</h6>
                    <h6>Get doctor-approved health tips, news and more.</h6>
                    <form class="row g-3 p-1 justify-content-center">
                        <div class="col-6">
                            <input type="email" class="form-control subscribediv" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="col-auto">
    <                       button type="submit" class="btn btn-primary mb-3 subscribediv">Subscribe</button>
                        </div>
                    </form>
                    <h6>Your privacy is important to us, so we'll spam you or share your info with third <br/>
                    parties. Take a look at our Privacy Policy, you can unsubscribe at any time.</h6>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Subscribe
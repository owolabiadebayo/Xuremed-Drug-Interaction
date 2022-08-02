import React, { useEffect, useState } from 'react'
import './Navbar.css'
import './Signin.css'
import axios from 'axios'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Modal = ({ onRequestClose }) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});
    const initialState = Object.freeze({
        email: "",
        password:""
        })
    
        const [formData, setFormData] = useState(initialState)
    
        console.log(formData);

        const handleChange =(e) => {
            setFormData({...formData, [e.target.name]: e.target.value})
        }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await axios.post(
                "http://127.0.0.1:8000/api/login/",
                formData
            )
            if (res) {
                   window.localStorage.setItem('token', res.data)
                   setTimeout(() => onRequestClose(), 1000);
                   toast.success("login successfully")
                   setTimeout(()=> window.location.href="/Dashboard", 500)
            } 
        }
        catch (err) {
            if(err) toast.error('Invalid Email/Password try again..',{closeOnClick: true,});
        }
    }

	return (
		<div className="modal__backdrop">
			<div className="modal__container">
                <div class="container-fluid">
                <ToastContainer position="top-center"/>
                    <div class="row">
                        <div class="col-sm-12 col-md-6 xuremedcommunity">
                        <h1><span className='x'>X</span><span className='ure'>ure</span><span className='med'>MED</span></h1>
                        <h3>Join our community today and <br/> explore our vast resources</h3>
                        </div>
                        <div class="col-sm-12 col-md-6 signinmain">
                        <div className='signindiv'>
                            <form onSubmit={handleSubmit}>
                                <label className='loginemail'>Email</label><input onChange={handleChange} name="email" type='text' placeholder='Enter email address' className='emailsignin'/>
                                <label className='loginemail'>Password</label><input onChange={handleChange} name="password" type='password' placeholder='Enter password' className='emailsignin'/>
                                <input type="submit" className='emailsignup' value="Continue"/> 
                                {/* <div className= 'services'>By signing up, you agree to the <span className='policyspan'>Terms of Services</span> and <span className='policyspan'>Privacy Policy</span></div> */}
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
};


const Modals = ({ onRequestClose }) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

    const initialState = Object.freeze({
        email: "",
        password:""
        })
    
        const [formData, setFormData] = useState(initialState)
    
        console.log(formData);

        const handleChange =(e) => {
            setFormData({...formData, [e.target.name]: e.target.value})
        }
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                axios.post(
                    "http://127.0.0.1:8000/api/signup/",
                    formData
                ).then(res => {
                    setTimeout(onRequestClose(),1000)
                    toast.success("Registered Successfully")
                })
            }
            catch (err) {
                if(err) toast.error('Email already registered',{closeOnClick: true,});
            }
        }
        const closeButton = (e) => {
            onRequestClose();
        }


	return (
        <>
		<div className="modal__backdrop">
			<div className="modal__container">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 xuremedcommunity">
                        <h1><span className='x'>X</span><span className='ure'>ure</span><span className='med'>MED</span></h1>
                        <h3>Join our community today and <br/> explore our vast resources</h3>
                        </div>
                        <div class="col-sm-12 col-md-6 signinmain">
                     
                        <div className='signindiv'>
                        <form onSubmit={handleSubmit}>
                        <label className='loginemail'>Email</label><input type='email' name='email' placeholder='Enter email address' value={formData.email} onChange={handleChange} className='emailsignin' required/>
                          <label className='loginemail'>Password</label><input type='password' name='password' placeholder='Enter password' value={formData.password} onChange={handleChange}className='emailsignin' required/>
                          <button onClick={closeButton}>Close</button>
                          <div className= 'services'>By signing up, you agree to the <span className='policyspan'>Terms of Services</span> and <span className='policyspan'>Privacy Policy</span></div>
                          <h5 className='already'>Already have an account?</h5>
                          <input type="submit" className='googlesignup'/>
                          </form>
                        </div>
                        
                        </div>
                    </div>
                </div>
			</div>
		</div>
        </>
	);
};


function Navbar() {
    const [isModalOpen, setModalIsOpen] = useState(false);
	
	console.log(useState("hello")[1])
	const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

    const [isModalOpens, setModalIsOpens] = useState(false);
	
	console.log(useState("hello")[1])
	const toggleModals = () => {
		setModalIsOpens(!isModalOpens);
	};

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-color">
        {isModalOpen && <Modal onRequestClose={toggleModal} />}
        {isModalOpens && <Modals onRequestClose={toggleModals} />}
            <div class="container-fluid">
                <a class="navbar-brand logo" href="#"><span className='x'>X</span><span className='ure'>ure</span><span className='med'>MED</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse main-nav" id="navbarSupportedContent">
                <ul class="navbar-nav me-4 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" onClick={toggleModal}>Sign In</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" onClick={toggleModals}>Register</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-success me-5" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
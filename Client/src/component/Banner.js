import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Banner.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import {ToastContainer} from "react-toastify"
function Banner() {
  const drug1 = {
    drug1:""
  }
  const drug2 = {
    drug2: ""
  }
  const [drug, setdrug1] = useState(drug1)
  const [drugs, setdrug2] = useState(drug2)
  const [drugdata,setdrug] = useState([])
  const [disable,setDisable] = useState(false)
  const [value, setValue] = useState("login")
  console.log(value);
  useEffect(() => {

  }, [])
 

  
  
  const ddrug1 = (e) => {
    console.log({...drug1, [e.target.name]: e.target.value})
  }
  const ddrug2 = (e) => {
    console.log({...drug2, [e.target.name]: e.target.value})
  }
  const drugmap = drugdata.map((drug)=> drug.interaction1[0].name1)
  console.log(drugmap);
  const drugmap2 = drugdata.map((drug)=> drug.interaction2[0].name2)
  console.log(drugmap2);

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/dashboard/fetchdrug/").then (
      (res) => setdrug(res.data)
    )
  },[])
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (token.length > 7) {
      setDisable(true);
      setValue("Search")
      toast.success("Welcome back")
    }
  }, []);
 

 

 
  const myElement = drugmap.find((element) => element === drug)
  console.log(myElement);
  const myElement2 = drugmap2.find((element) => element === drugs)
  console.log(myElement2);

  const action = drugdata.filter((drug)=> drug.interaction1[0].name1 === drug && drug.interaction2[0].name2 === drugs)
 console.log(action);
 


  const submit = (e) => {
   e.preventDefault(); 

  }

  return (
    <div className='Banner'>
        <h1>Drug Interaction Checker</h1>
        <ToastContainer position="top-center"/>
        <div className='Banner2 container'>
          <form onSubmit={submit}>
        <input class="container inputbar form-control form-control-md" onChange={ddrug1} name='drug1' type="text" placeholder="Enter a drug, OTC and herbal supplement" aria-label=".form-control-lg example" />
        <input class="container inputbar form-control form-control-md" onChange={ddrug2} name='drug2' type="text" placeholder="Enter a drug, OTC and herbal supplement" aria-label=".form-control-lg example" />
        <input type= 'submit' value={value} disabled={{disable}}/>
        </form>
        </div>
        <div className='Banner3'>
        </div>
        
    </div>
  )
}

export default Banner
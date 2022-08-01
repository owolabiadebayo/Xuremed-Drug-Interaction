import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Banner.css'
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
  console.log(drugdata);
  
  const ddrug1 = (e) => {
    console.log({...drug1, [e.target.name]: e.target.value})
  }
  const ddrug2 = (e) => {
    console.log({...drug2, [e.target.name]: e.target.value})
  }
  const drugmap = drugdata.map((drug)=> drug.interaction1[0].name1)
  function filter (drugmap) {
    drugmap.includes("arthemeter-lumefantrine");
  }
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/dashboard/fetchdrug/").then (
      (res) => setdrug(res.data)
    )
  },[])
  if (drugdata) {
    filter(drugmap)
  } else {
    console.log("waiting for data");
  }

  console.log(filter);

  const submit = (e) => {
   e.preventDefault(); 
  }

  return (
    <div className='Banner'>
        <h1>Drug Interaction Checker</h1>
        <div className='Banner2 container'>
          <form onSubmit={submit}>
        <input class="container inputbar form-control form-control-md" onChange={ddrug1} name='drug1' type="text" placeholder="Enter a drug, OTC and herbal supplement" aria-label=".form-control-lg example" />
        <input class="container inputbar form-control form-control-md" onChange={ddrug2} name='drug2' type="text" placeholder="Enter a drug, OTC and herbal supplement" aria-label=".form-control-lg example" />
        <input type= 'submit' value='search' />
        </form>
        </div>
        
    </div>
  )
}

export default Banner
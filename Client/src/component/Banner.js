import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Banner.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import {ToastContainer} from "react-toastify"
import Result from './result';
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
  const [value, setValue] = useState("search")
  const [display, setDisplay] = useState(false)

  // console.log(drug.drug1);
  // console.log(drugs.drug2);
  // console.log(value);
  // useEffect(() => {

  // }, [])
 

  
  
  const ddrug1 = (e) => {
    setDisplay(false)
    setdrug1({...drug1, [e.target.name]: e.target.value})
  }
  const ddrug2 = (e) => {
    setDisplay(false)
    setdrug2({...drug2, [e.target.name]: e.target.value})
  }
  // const drugmap = drugdata.map((drug)=> drug.interaction1[0].name1)
  // console.log(drugmap);
  // const drugmap2 = drugdata.map((drug)=> drug.interaction2[0].name2)
  // console.log(drugmap2);
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/dashboard/fetchdrug/").then (
      (res) => setdrug(res.data)
    )
  },[])
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (!token) {
      setDisable(true);
      setValue("Login")
      toast.success("Welcome back")
    }
  }, []);
// const myElement = drugmap.find((element) => element === drug.drug1)
//   console.log(myElement);
// const myElement2 = drugmap2.find((element) => element === drugs.drug2)
//   console.log(myElement2);
  const drugString =drug.drug1.toString()
  const drugString2 = drugs.drug2.toString()
  const DrugResult = drugdata.filter((drug)=> drug.interaction1[0].name1 === drugString && drug.interaction2[0].name2 === drugString2 || drug.interaction2[0].name2 === drugString && drug.interaction1[0].name1 === drugString2)
const handleSubmit = (e) => {
  e.preventDefault()
  setDisplay(true)
  console.log("hello");
}
  
  return (
    <div className='Banner'>
        <h1>Drug Interaction Checker</h1>
        <ToastContainer position="top-center"/>
        <div className='Banner2 container'>
          <form className='Bannerform' >
        <input class="container me-2 inputbar form-control form-control-md" onChange={ddrug1} name='drug1' type="text" placeholder="Enter a drug, OTC and herbal supplement" aria-label=".form-control-lg example" />
        <input class="container inputbar me-2 form-control form-control-md" onChange={ddrug2} name='drug2' type="text" placeholder="Enter a drug, OTC and herbal supplement" aria-label=".form-control-lg example" />
        <input type= 'submit' value={value} onClick={handleSubmit}/>
        </form>
        </div>
        <div className='Banner3'>
        </div>
        {display === true ?  <Result DrugResult={DrugResult} /> : ""}
        
    </div>
  )
}

export default Banner
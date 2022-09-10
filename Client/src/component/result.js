import React from 'react'

function Result(props) {
    const drugData = props.DrugResult;
    console.log(drugData);
   
    // drugData = drugData.map((drug) => { 
    //     <div className="container">
    //     <h1>drugbank1</h1>
    //     <h1>drugbank2</h1>
    //     <h1>action:drugbank3</h1>
    //     <h1>severity:drugbank4</h1>
    //             </div>
    // }

  return (
    <div>
      {drugData ? drugData.map((drug,index) => {
        return (
          <div className="container resultdiv"  key={index}>
            {/* <h1>{drug.interaction1[0].name1}</h1>
            <h1>{drug.interaction2[0].name2}</h1> */}
            <h3>{drug.interaction3[0].action}</h3>
            <h3>{drug.interaction3[0].severity}</h3>
          </div>
        )
      }) : null}
    </div>
  )
}

export default Result
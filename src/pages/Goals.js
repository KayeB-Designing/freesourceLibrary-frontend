import React, { useState, useEffect } from "react";
// const axios = require('axios');

function Goals(props) {
  // console.log(`this is props at the start of the fn: ${props}`)
  // console.log(`this is props at the start of the fn: ${props.URL}`)
  // console.log(`this is props at the start of the fn: ${props.apiURL}`)
  const [goals, setGoals] = useState(null);
  // const [pdf, setPDF] = useState(null)
  const [click, setClick] = useState(false)



  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // const requestOptions = {
  //     method: "get",
  //     headers: myHeaders,
  //     redirect: "follow",
      
  // };


  const getGoalsData = async () => {
    const response = await fetch(`${props.URL}/goals`);
    const data = await response.json();
    // console.log(`this is the props.url in getGoalsData(): ${props.URL}`)
    // console.log(`this is the response in getGoalsData(): ${response}`)
    setGoals(data);
    // console.log(`this is data in getGoalsData(): ${data}`)
  };


  // function getPdf() {
  //   fetch(`https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=https://freesourcelibrary.netlify.app/goals/&inline=Download&document_size=Letter&orientation=portrait`
  //   , requestOptions
  //   )
  //   .then(response => response.text())
  //   // .then(console.log(response))
  //   .then(result => console.log(`this is the fetch result: ${result}`))
  //   .catch(error => console.log('error', error));
  //   setPDF(pdf)
  // }

  useEffect(() => {getGoalsData()}, []);
  // useEffect(() => getPdf());
  useEffect(() => setClick())

  const loaded = () => {
    // console.log(`This is goals: ${goals}`)
    return goals.map((item) => (
      <div className="result">
        <a className="resourceLink" href={item.Link}>
          <h2 className="itemTitle">{item.name}</h2>
        </a>
        <img src={item.qr} />
        <p className="descr">
          <ul className="descrList">
            <li className="descrListItem"><span className="descrSpan">{item.description}</span></li>
            <li className="descrListItem"><span className="itemSpan">Resource Type: </span>{item.type}</li>
            <li className="descrListItem"><span className="itemSpan">Email Required: </span>{item.email}</li>
          </ul>
        </p>
        <hr className="lineThin" />
      </div>
    ));
  };

  // const created = () => pdf

  function buttonClicked() {
    console.log(`clicked`)
    // created()
    return click
  }

  if(!goals){
    return <h2>Loading Goal Setting Resources, Thank You for Your Patience!!!</h2>
  }else{
    return (
      <div className="contentContainer" >
        <h1 className="pageTitle">Goal Setting Resources</h1>
        <hr className="lineThick" />
        {loaded()}
        <a target="_blank" href="https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=https://freesource-library.herokuapp.com/goals/&inline=Download&document_size=Letter&orientation=portrait" download><button onClick={buttonClicked}>Download List as JSON</button></a>
    </div>
    )
  }
};

export default Goals;
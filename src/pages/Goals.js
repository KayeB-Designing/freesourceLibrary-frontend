import React, { useState, useEffect } from "react";
// const axios = require('axios');

function Goals(props) {
  // console.log(`this is props at the start of the fn: ${props}`)
  // console.log(`this is props at the start of the fn: ${props.URL}`)
  // console.log(`this is props at the start of the fn: ${props.apiURL}`)
  const [goals, setGoals] = useState(null);
  // const [pdf, setPDF] = useState(null)
  const [click, setClick] = useState(false)



  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
      method: "get",
      headers: myHeaders,
      redirect: "follow",
      
  };


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
      <div>
        <a href={item.Link}>
            <img src={item.qr} />
            <h2>{item.name}</h2>
            <p>
                {item.type}
                {item.description}
                {item.email}
            </p>
        </a>
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
      <>
        <h1>Goal Setting Resources</h1>
        {loaded()}
        <a target="_blank" href="https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=https://freesource-library.herokuapp.com/goals/&inline=Download&document_size=Letter&orientation=portrait" download><button onClick={buttonClicked}>Download List as JSON</button></a>
    </>
    )
  }
};

export default Goals;
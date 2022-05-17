import { useState, useEffect } from "react";
// const axios = require('axios');

function Goals(props) {
  // console.log(`this is props at the start of the fn: ${props}`)
  // console.log(`this is props at the start of the fn: ${props.URL}`)
  // console.log(`this is props at the start of the fn: ${props.apiURL}`)
  const [goals, setGoals] = useState(null);
  // const [pdf, setPDF] = useState(null)
  // const [click, setClick] = useState(null)


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

  // const getPdfData = async () => {
  //   const response = await fetch(`https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=${props.URL}/goals`)
  //   // console.log(`this is the props.apiURL in getPdfData(): ${props.apiURL}`)
  //   // console.log(`this is the props.url  in getPdfData(): ${props.URL}`)
  //   // console.log(`this is the props.apiURLprops.URL/goals  in getPdfData(): https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=${props.URL}/goals`)
  //   console.log(`this is the getPdfData response: ${response}`)
  //   const data = await response.json;
  //   setPDF(data)
  //   console.log(`this is  getPdfData data: ${data}`)
  // }


  useEffect(() => getGoalsData(), []);
  // useEffect(() => getPdfData());
  // useEffect(() => setClick())

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

  // return goals ? loaded() : <h1>Loading...</h1>;

  // return (
  //   <>
  //   <h1>Resources</h1>
  //   goals ? loaded() : <h1>Loading...</h1>
  //   </>
  // );

  // const clicked = () => click
  // function clicked() {
  //   console.log(`clicked`)
  //   return created()
  // }

  // function fetchPdf() {
  //   fetch(`https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=${props.URL}/goals`, requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(`this is the fetch result: ${result}`))
  //   .catch(error => console.log('error', error));
  // }

  // function buttonClicked() {
  //   console.log(`clicked`)
  //   // fetchPdf()
  //   return click
  // }


  function hello(){
    console.log(`hello`)
  }




  if(!goals){
    return <h2>Loading Goal Setting Resources, Thank You for Your Patience!!!</h2>
  }else{
    return (
      <>
      <div>
        <h1>Goal Setting Resources</h1>
        {/* <button onClick={clicked()}>Download & Print PDF</button> */}
        {/* <button onClick={() => setClick(click)}>Download & Print PDF</button> */}
        
        {/* onClick={() => setCount(count + 1)} */}
        {/* onClick={() => setClick(click)} */}
        {/* <button onClick={created()}>Download & Print PDF</button> */}
        {/* <button onClick={console.log(`this button has been clicked`)}>Download & Print PDF</button> */}
        {/* <button onClick={buttonClicked()}>Download & Print PDF</button> */}
        <button onClick={hello()}>Download & Print PDF</button>
        {/* onClick={() => setPDF()} */}
      </div>
      <div>
        {loaded()}
      </div>
    </>
    )
  }

  // return (
  //   <>
  //     <h1>Goal Setting</h1>
  //     <button>Download & Print PDF</button>
  //   </>
  // )
};

export default Goals;
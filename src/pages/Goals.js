import { useState, useEffect } from "react";
// const axios = require('axios');

function Goals(props) {
  console.log(`this is props: ${props}`)
  const [goals, setGoals] = useState(null);
  const getGoalsData = async () => {
    const response = await fetch(`${props.URL}/goals`);
    const data = await response.json();
    // console.log(`this is the props.url: ${props.URL}`)
    // console.log(`this is the response: ${response}`)
    setGoals(data);
    // console.log(`this is data: ${data}`)
  };

  useEffect(() => getGoalsData(), []);

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

  // return goals ? loaded() : <h1>Loading...</h1>;

  // return (
  //   <>
  //   <h1>Resources</h1>
  //   goals ? loaded() : <h1>Loading...</h1>
  //   </>
  // );

  if(!goals){
    return <h2>Loading Goal Setting Resources, Thank You for Your Patience!!!</h2>
  }else{
    return (
      <>
      <div>
        <h1>Goal Setting Resources</h1>
        <button onClick={fetch("https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=https://www.google.com/search?q=free+resources&oq=fre&aqs=chrome.0.69i59l2j69i57j69i59j0i67l4j46i67j0i67.939j0j15&sourceid=chrome&ie=UTF-8")}>Download & Print PDF</button>
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
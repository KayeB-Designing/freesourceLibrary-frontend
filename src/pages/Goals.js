import { useState, useEffect } from "react";
const axios = require('axios');

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
        <h1>Resources</h1>
        
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
    return <h2>Loading...</h2>
  }else{
    return (
      <>
        <h1>Resources</h1>
        <button>Download & Print PDF</button>
        {loaded()}
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
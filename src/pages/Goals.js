// import { useState, useEffect } from "react";

function Goals(props) {
  // create state to hold projects
  // const [goals, setGoals] = useState(null);

  //create function to make api call
  // const getGoalsData = async () => {
  //   //make api call and get response
  //   const response = await fetch(props.URL + "goals");
  //   // turn response into javascript object
  //   const data = await response.json();
  //   // set the projects state to the data
  //   setGoals(data);
  // };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  // useEffect(() => getGoalsData(), []);

  // define a function that will return the JSX needed once we get the data
  // const loaded = () => {
  //   return goals.map((item) => (
  //     <div>
  //       <h1>Resources</h1>
  //       <a href={item.Link}>
  //           <img src={item.qr} />
  //           <h2>{item.name}</h2>
  //           <p>
  //               {item.type}
  //               {item.description}
  //               {item.email}
  //           </p>
  //       </a>
  //     </div>
  //   ));
  // };

  // return goals ? loaded() : <h1>Loading...</h1>;

  return <h1>Goal Setting</h1>
}

export default Goals;
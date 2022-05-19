import React, { useState, useEffect } from "react";

function Goals(props) {
  const [goals, setGoals] = useState(null);
  const [click, setClick] = useState(false)

  const getGoalsData = async () => {
    const response = await fetch(`${props.URL}/goals`);
    const data = await response.json();
    setGoals(data);
  };

  useEffect(() => {getGoalsData()}, []);
  useEffect(() => setClick())

  const loaded = () => {
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

  function buttonClicked() {
    console.log(`clicked`)
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
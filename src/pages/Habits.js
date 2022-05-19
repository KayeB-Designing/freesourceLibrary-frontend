import { useState, useEffect } from "react";

function Habits(props) {
  const [habits, setHabits] = useState(null);
  const [click, setClick] = useState(false)

  const getHabitsData = async () => {
    const response = await fetch(`${props.URL}/habits`);
    const data = await response.json();
    // set the projects state to the data
    setHabits(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getHabitsData()}, []);
  useEffect(() => setClick())

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return habits.map((item) => (
      <div className="result">
        <a  className="resourceLink" target="_blank" href={item.Link}>
          <h2 className="itemTitle">{item.name}</h2>
        </a>
        <img src={item.qr} />
        <p className="descr">
          <ul className="descrList">
            <li className="descrListItem">{item.type}</li>
            <li className="descrListItem">{item.description}</li>
            <li className="descrListItem">{item.email}</li>
          </ul>
        </p>
        <hr className="lineThin" />
      </div>
    ));
  };

  function buttonClicked() {
    console.log(`clicked`)
    // created()
    return click
  }

  if(!habits){
    return <h2>Loading Habit Building Resources, Thank You for Your Patience!!!</h2>
  }else{
    return (
      <div  className="contentContainer" >
        <h1 className="pageTitle">Habit Building Resources</h1>
        <hr className="lineThick" />
        {loaded()}
        <a target="_blank" href="https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=https://freesource-library.herokuapp.com/habits/&inline=Download&document_size=Letter&orientation=portrait" download><button onClick={buttonClicked}>Download List as JSON</button></a>
      </div>
    )
  }

  // return habits ? loaded() : <h1>Loading...</h1>;

  // return (
  //   <>
  //     <h1>Habit Building</h1>
  //     <button>Download & Print PDF</button>
  //   </>
  // )
}

export default Habits;
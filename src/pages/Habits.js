import { useState, useEffect } from "react";

function Habits(props) {
  const [habits, setHabits] = useState(null);
  const [click, setClick] = useState(false)

  const getHabitsData = async () => {
    const response = await fetch(`${props.URL}/habits`);
    const data = await response.json();
    setHabits(data);
  };

  useEffect(() => {getHabitsData()}, []);
  useEffect(() => setClick())

  const loaded = () => {
    return habits.map((item) => (
      <div className="result">
        <a  className="resourceLink" target="_blank" href={item.Link}>
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
}

export default Habits;
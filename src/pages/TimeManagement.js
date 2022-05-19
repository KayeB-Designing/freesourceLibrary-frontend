import { useState, useEffect } from "react";

function TimeManagement(props) {
  // create state to hold projects
  const [timeManagement, setTimeManagement] = useState(null);
  const [click, setClick] = useState(false)

  //create function to make api call
  const getTimeManagementData = async () => {
    //make api call and get response
    const response = await fetch(`${props.URL}/timeManagement`);
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setTimeManagement(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getTimeManagementData()}, []);
  useEffect(() => setClick())

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return timeManagement.map((item) => (
      <div className="result">
        <a className="resourceLink" href={item.Link}>
          <h2 className="itemTitle">{item.name}</h2>
          </a>
          <img src={item.qr} />
          
          <p className="descr">
            <ul className="descrList">
              <li className="descrListItem">{item.description}</li>
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
    // created()
    return click
  }

  if(!timeManagement){
    return <h2>Loading Time Management Resources, Thank You for Your Patience!!!</h2>
  }else{
    return (
      <div  className="contentContainer" >
        <h1 className="pageTitle">Time Management Resources</h1>
        <hr className="lineThick" />
        {loaded()}
        <a target="_blank" href="https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=https://freesource-library.herokuapp.com/timeManagement/&inline=Download&document_size=Letter&orientation=portrait" download><button onClick={buttonClicked}>Download List as JSON</button></a>
      </div>
    )
  }

  // return timeManagement ? loaded() : <h1>Loading...</h1>;

  // return (
  //   <>
  //     <h1>Time Management</h1>
  //     <button>Download & Print PDF</button>
  //   </>
  // )
}

export default TimeManagement;
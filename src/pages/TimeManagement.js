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

  function buttonClicked() {
    console.log(`clicked`)
    // created()
    return click
  }

  if(!timeManagement){
    return <h2>Loading Time Management Resources, Thank You for Your Patience!!!</h2>
  }else{
    return (
      <>
        <div>
          <h1>Time Management Resources</h1>
          <button>Download & Print PDF</button>
        </div>
        <div>
          {loaded()}
        </div>
      </>
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
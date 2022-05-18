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
      <div>
        <a target="_blank" href={item.Link}>
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

  if(!habits){
    return <h2>Loading Habit Building Resources, Thank You for Your Patience!!!</h2>
  }else{
    return (
      <>
      <div>
        <h1>Habit Building Resources</h1>
        <button>Download & Print PDF</button>
      </div>
      <div>
        {loaded()}
      </div>
    </>
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
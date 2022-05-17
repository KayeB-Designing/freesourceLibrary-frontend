import { useState, useEffect } from "react";

function Habits(props) {
  const [habits, setHabits] = useState(null);
  const getHabitsData = async () => {
    const response = await fetch(`${props.URL}/habits`);
    const data = await response.json();
    // set the projects state to the data
    setHabits(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getHabitsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return habits.map((item) => (
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

  return habits ? loaded() : <h1>Loading...</h1>;

  // return (
  //   <>
  //     <h1>Habit Building</h1>
  //     <button>Download & Print PDF</button>
  //   </>
  // )
}

export default Habits;
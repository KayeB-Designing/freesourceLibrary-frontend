import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  // create state to hold projects
  const [home, setHome] = useState(null);

  //create function to make api call
  const getHomeData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "home");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setHome(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getHomeData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return home.map((category) => (
      <div>
        <Link to={category.route}>
            <h2>{category.name}</h2>
            <p>
                {category.description}
            </p>
        </Link>
      </div>
    ));
  };

  return home ? loaded() : <h1>Loading...</h1>;
}

export default Home;
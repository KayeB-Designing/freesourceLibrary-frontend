// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  // create state to hold categories
  // const [categories, setCategories] = useState(null);

  // //create function to make api call
  // const getCategories = async () => {
  //   //make api call and get response
  //   const response = await fetch(props.URL + "home");
  //   // turn response into javascript object
  //   const category = await response.json();
  //   // set the Categories state to the category
  //   setCategories(category);
  // };

  // // make an initial call for the data inside a useEffect, so it only happens once on component load
  // useEffect(() => getCategories(), []);

  // // define a function that will return the JSX needed once we get the data
  // const loaded = () => {

  //   return categories.map((category) => (
  //     <div>
  //       <Link to={category.route}>
  //           <h2>{category.name}</h2>
  //           <p>
  //             {category.description}
  //           </p>
  //       </Link>
  //     </div>
  //   ));
  // };

  // return categories ? loaded() : <h1>Loading...</h1>;

  return (
    <>
      <h1>Categories</h1>
      <Link to="../goals">
      <h2>Goal Setting</h2>
      <p>
        category description
      </p>
      </Link>
      <Link to="../habits">
      <h2>Habit Building</h2>
      <p>
        category description
      </p>
      </Link>
      <Link to="../timeManagement">
      <h2>Time Management</h2>
      <p>
        category description
      </p>
      </Link>
    </>
  )

}

export default Home;
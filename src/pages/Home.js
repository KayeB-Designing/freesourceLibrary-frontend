// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {

  const URL = "https://freesource-library.herokuapp.com";
  // const {} = props.Home
  // console.log(`This is props: ${props}`)
  // console.log(`This is URL: ${URL}`)

  return (
    <>
      <h1>Categories</h1>
      {/* <div>
        <Link to={category.path}>
        <h2>{category.name}</h2>
        <p>
          {category.name}
        </p>
        </Link>
      </div> */}
      <Link to="../goals">
      <h2>Goal Setting</h2>
      <p>
        The process of deciding what you want to achieve or what you want someone else to achieve over a particular period.
      </p>
      </Link>
      <Link to="../habits">
      <h2>Habit Building</h2>
      <p>
        An act, behavioral response, practice, or custom established in one's repertoire by frequent repetition of the same activity.
      </p>
      </Link>
      <Link to="../timeManagement">
      <h2>Time Management</h2>
      <p>
        The ability to use one's time effectively or productively.
      </p>
      </Link>
    </>
  )
}

export default Home;
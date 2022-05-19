import { Link } from "react-router-dom";

function Home(props) {

  const URL = "https://freesource-library.herokuapp.com";

  return (
    <div className="contentContainer" >
      <h1 className="pageTitle">Free Resource Categories</h1>
      <hr className="lineThick" />
      <div className="result">
        <Link to="../goals">
          <h2 className="itemTitle">Goal Setting</h2>
        </Link>
          <p className="descr">
            The process of deciding what you want to achieve or what you want someone else to achieve over a particular period.
          </p>
      </div>
      <hr className="lineThin" />
      <div className="result">
        <Link to="../habits">
          <h2 className="itemTitle">Habit Building</h2>
        </Link>
          <p className="descr">
            An act, behavioral response, practice, or custom established in one's repertoire by frequent repetition of the same activity.
          </p>
      </div>
      <hr className="lineThin" />
      <div className="result">
        <Link to="../timeManagement">
          <h2 className="itemTitle">Time Management</h2>
        </Link>
          <p className="descr">
            The ability to use one's time effectively or productively.
          </p>
      </div>
    </div>
  )
}

export default Home;
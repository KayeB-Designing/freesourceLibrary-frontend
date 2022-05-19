import { Link } from "react-router-dom";
// import Message from '../components/Message';

function Header(props) {
  // const navStyle = {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   border: "3px solid black",
  //   padding: "8px",
  //   width: "90%",
  //   margin: "auto",
  // };
    return (
      <header className="header">
      <h1 className="headerName">F<span className="nameSpan">re</span>e<span className="nameSpan">source</span> Library</h1>
      <h2 className="headerSlogan">Free Resources for Life!</h2>
      {/* <Message /> */}
      {/* <nav style={navStyle}> */}
      <nav className="nav">
        <Link className="navLink" to="/home">
          <div>Home</div>
        </Link>
        <Link  className="navLink"to="/about">
          <div>About</div>
        </Link>
      </nav>
    </header>
    );
}
  
  export default Header;
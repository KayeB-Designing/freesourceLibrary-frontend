import { Link } from "react-router-dom";

function Header(props) {
    return (
      <header className="header headerGrid">
        <img  className="headerImg" src="https://i.postimg.cc/bJVZvSn0/Logo-1.png" alt="Freesource Library Logo"/>
        <div className="headerTxt">
          <h1 className="headerName">F<span className="nameSpan">re</span>e<span className="nameSpan">source</span> Library</h1>
          <h2 className="headerSlogan">Free Resources for <span className="nameSpan">Life</span>!</h2>
          <nav className="nav">
            <Link className="navLink navLinkOne" to="/home">
              <div>Home</div>
            </Link>
            <Link  className="navLink navLinkTwo"to="/about">
              <div>About</div>
            </Link>
          </nav>
        </div>
    </header>
  );
}
  
  export default Header;
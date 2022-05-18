import { Link } from "react-router-dom";
import Message from '../components/Message';

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };
    return (
      <header>
      <h1>Freesource Library Header</h1>
      <nav style={navStyle}>
        <Link to="/home">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
      </nav>
      <Message />
    </header>
    );
}
  
  export default Header;
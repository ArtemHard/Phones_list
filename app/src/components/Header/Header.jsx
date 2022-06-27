import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {


    return (
 <nav className="navbar navbar-expand bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Main</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <Link className="nav-link" to="about">About</Link> */}
          {/* <NavLink className="nav-link" to="about">About</NavLink> */}
          <CustomLink to="about">About</CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="info">Info</CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="phones">Phones</CustomLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header
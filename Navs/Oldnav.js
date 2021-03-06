Oldnav.js

const navbar = () => (
  <Navbar className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">
          NYC SOUND GUY
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/soundmixers">Sound Mixers</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/gear">Gear</Link>
          </li>
          <li>
            <Link to="/travel">Travel</Link>
          </li>
        </ul>
      </div>
    </div>
  </Navbar>
);
export default Nav;
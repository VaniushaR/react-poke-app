import {Link} from 'react-router-dom'

const NavBar = (props) => {
  
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
      <a  href="/" className="brand-logo left">Poke Times</a>
      <ul className="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
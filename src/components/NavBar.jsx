import {Link} from 'react-router-dom'

const NavBar = (props) => {
  
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
      <a  href="/" className="brand-logo left">Poke Times</a>
      <ul className="right">
        <li><Link to="/react-poke-app">Home</Link></li>
        <li><Link to="react-poke-app/about"> About </Link></li>
        <li><Link to="react-poke-app/contact">Contact</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
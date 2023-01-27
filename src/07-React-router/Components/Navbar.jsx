import {navLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className="nav-link" 
              activeClassName="active">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
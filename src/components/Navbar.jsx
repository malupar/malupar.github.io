import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">About me</NavLink>
      <NavLink to="/experience" className="nav-brand">Education & experience</NavLink>
      <NavLink to="/projects" className="nav-brand">Projects & achievements</NavLink>
      <NavLink to="/blog" className="nav-brand">Blog</NavLink>
    </nav>
  );
}
export default Navbar;

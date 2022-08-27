import { NavLink } from "react-router-dom";

const Nav = () => {
  return(
    <div className="links">
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/blogs">Posts</NavLink>
    <NavLink to="/create-blog">Write</NavLink>
    <NavLink to="/images">Images</NavLink>
    </nav>
    </div>
  )
}


export default Nav
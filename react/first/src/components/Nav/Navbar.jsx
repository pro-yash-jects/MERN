import './Navbar.css'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* <h1>My App</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/signin">Sign In</a></li>
      </ul> */}
      <div style={{display:'flex', gap:'8px'}}>
        <NavLink
            to='/'
        >Home</NavLink> 
        <NavLink
            to='/signin'
        >Sign In
        </NavLink>
      </div>
    </nav>
  )
}
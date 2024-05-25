import { NavLink } from 'react-router-dom';
function Navigation() {
  // const classCss = () => {};
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;

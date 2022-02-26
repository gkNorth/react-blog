import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <h1>React Blog</h1>
      <span><Link className="btn btn-dark" to="/">List page</Link></span>
    </header>
  )
}
export default Header
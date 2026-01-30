import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Wersel Components
        </Link>
      </div>
    </header>
  )
}

export default Header


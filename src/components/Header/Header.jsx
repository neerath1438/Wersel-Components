import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="wui-apex">
      <div className="wui-apex-orbit">
        <Link to="/" className="wui-crown">
          Wersel Components
        </Link>
      </div>
    </header>
  )
}

export default Header


import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="page-watermark">Wersel Components</div>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout


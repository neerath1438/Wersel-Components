import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Components from './pages/Components/Components'
import ButtonShowcase from './pages/ButtonShowcase/ButtonShowcase'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/components" element={<Components />} />
          <Route path="/buttons" element={<ButtonShowcase />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Components from './pages/Components/Components'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Components />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App


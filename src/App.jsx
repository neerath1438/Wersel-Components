import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout/Layout'
import Components from './pages/Components/Components'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Router>
      <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
        <Routes>
          <Route path="/" element={<Components searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App


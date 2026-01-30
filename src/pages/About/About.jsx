import Card from '../../components/Card/Card'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About</h1>
        
        <Card title="Project Structure">
          <ul className="structure-list">
            <li><strong>src/components/</strong> - Reusable UI components</li>
            <li><strong>src/pages/</strong> - Page-level components</li>
            <li><strong>src/hooks/</strong> - Custom React hooks</li>
            <li><strong>src/utils/</strong> - Utility functions</li>
            <li><strong>src/services/</strong> - API services</li>
            <li><strong>src/context/</strong> - React context providers</li>
            <li><strong>src/assets/</strong> - Static assets (images, fonts)</li>
          </ul>
        </Card>

        <Card title="Features">
          <ul className="features-list">
            <li>Component-based architecture</li>
            <li>React Router for navigation</li>
            <li>Modern React with hooks</li>
            <li>Vite for fast development</li>
            <li>Organized folder structure</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default About


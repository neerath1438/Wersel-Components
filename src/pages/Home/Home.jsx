import { useState } from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import './Home.css'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <div className="home-container">
        <h1>Welcome to Wersel-Components</h1>
        <p className="subtitle">React Component-Based Application</p>

        <Card title="Counter Example">
          <div className="counter-section">
            <p>Count: {count}</p>
            <div className="button-group">
              <Button
                onClick={() => setCount(count + 1)}
                variant="primary"
              >
                Increment
              </Button>
              <Button
                onClick={() => setCount(count - 1)}
                variant="secondary"
              >
                Decrement
              </Button>
              <Button
                onClick={() => setCount(0)}
                variant="success"
              >
                Reset
              </Button>
            </div>
          </div>
        </Card>

        <Card title="About This Structure">
          <p>
            This is a component-based React application structure.
            Components are organized in the <code>src/components</code> folder,
            and pages are in the <code>src/pages</code> folder.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Home


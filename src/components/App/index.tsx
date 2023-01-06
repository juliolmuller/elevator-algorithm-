import { useState } from 'react'

import ElevatorShaft from '~/components/ElevatorShaft'

import styles from './styles.module.scss'

function App() {
  const [settings, setSettings] = useState(false)

  return (
    <div className={styles.root}>
      <h1>The Elevator Algorithm</h1>

      <div className={styles.elevator}>
        <ElevatorShaft floors={3} onCall={console.log} />
      </div>

      <div className={styles.controls}>
        <p data-enabled={settings}>{settings ? 'Simulator started' : 'Defining settings'}</p>

        <button type="button" onClick={() => setSettings((prev) => !prev)}>
          {settings ? 'Stop' : 'Start'} Simulator
        </button>
      </div>
    </div>
  )
}

export default App

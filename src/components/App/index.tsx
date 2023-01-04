import { useState } from 'react'

import styles from './styles.module.scss'

function App() {
  const [settings, setSettings] = useState(false)

  return (
    <div className={styles.root}>
      <h1>The Elevator Algorithm</h1>

      <p data-enabled={settings}>{settings ? 'Simulator started' : 'Defining settings'}</p>

      <button type="button" onClick={() => setSettings((prev) => !prev)}>
        {settings ? 'Stop' : 'Start'} Simulator
      </button>
    </div>
  )
}

export default App

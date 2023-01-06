import { useState } from 'react'

import Floor from '~/components/Floor'

import styles from './styles.module.scss'

function App() {
  const [settings, setSettings] = useState(false)

  return (
    <div className={styles.root}>
      <h1>The Elevator Algorithm</h1>

      <div className={styles.elevator}>
        <Floor name="T" onGoUpCall={() => {}} />
        <Floor name="1" onGoUpCall={() => {}} onGoDownCall={() => {}} />
        <Floor name="2" onGoUpCall={() => {}} onGoDownCall={() => {}} />
        <Floor name="3" onGoDownCall={() => {}} />
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

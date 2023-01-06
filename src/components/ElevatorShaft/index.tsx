import { useState } from 'react'

import Ceiling from './Ceiling'
import Elevator from './Elevator'
import Floor from './Floor'
import Ground from './Ground'
import styles from './styles.module.scss'

interface ElevatorShaftProps {
  floors: number
  onCall: (floor: number, direction: 'down' | 'up') => void
}

function ElevatorShaft({ floors, onCall }: ElevatorShaftProps) {
  const [currentFloor, setCurrentFloor] = useState(0)
  const actualFloors = Math.max(1, floors)
  const floorsArray = Array(actualFloors + 1).fill(undefined)

  function handleCallUp(floor: number) {
    onCall(floor, 'up')
  }

  function handleCallDown(floor: number) {
    onCall(floor, 'down')
  }

  return (
    <div className={styles.root}>
      <Ceiling />

      {floorsArray.map((_, index) => (
        <Floor
          key={index}
          index={actualFloors - index}
          onCallUp={index > 0 ? handleCallUp : undefined}
          onCallDown={index < actualFloors - 1 ? handleCallDown : undefined}
        />
      ))}

      <Elevator floor={currentFloor} />
      <Ground />

      <input
        style={{
          position: 'fixed',
          bottom: '4rem',
          right: '4rem',
        }}
        type="number"
        value={currentFloor}
        onChange={(e) => setCurrentFloor(Number(e.target.value))}
      />
    </div>
  )
}

export default ElevatorShaft

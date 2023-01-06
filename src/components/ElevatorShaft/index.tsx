import Ceiling from './Ceiling'
import Floor from './Floor'
import Ground from './Ground'
import styles from './styles.module.scss'

interface ElevatorShaftProps {
  floors: number
  onCall: (floor: number, direction: 'down' | 'up') => void
}

function ElevatorShaft({ floors, onCall }: ElevatorShaftProps) {
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
          index={floorsArray.length - index - 1}
          onCallUp={index < floorsArray.length - 1 ? handleCallUp : undefined}
          onCallDown={index > 0 ? handleCallDown : undefined}
        />
      ))}

      <Ground />
    </div>
  )
}

export default ElevatorShaft

import Floor from './Floor'
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
      {floorsArray.map((_, index) => (
        <Floor
          key={index}
          index={index}
          onCallUp={index < floorsArray.length - 1 ? handleCallUp : undefined}
          onCallDown={index > 0 ? handleCallDown : undefined}
        />
      ))}
    </div>
  )
}

export default ElevatorShaft

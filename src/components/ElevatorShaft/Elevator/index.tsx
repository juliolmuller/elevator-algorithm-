import clsx from 'clsx'
import { TransitionEvent, useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

interface ElevatorProps {
  floor: number
}

function Elevator({ floor }: ElevatorProps) {
  const prevFloor = useRef(0)
  const isMounted = useRef(false)
  const [isDoorOpen, setDoorOpen] = useState(true)

  function synchronizeFloorState() {
    prevFloor.current = Math.max(0, floor)
  }

  function openDoor(event: TransitionEvent<HTMLDivElement>) {
    ;(event.target as HTMLDivElement).classList.contains(styles.root) && setDoorOpen(true)
  }

  function closeDoor() {
    isMounted.current && setDoorOpen(false)
  }

  useEffect(() => {
    synchronizeFloorState()
    isMounted.current && closeDoor()
    isMounted.current = true
  }, [floor]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={styles.root}
      style={{
        transitionDuration: `${Math.abs(floor - prevFloor.current) * 2}s`,
        transform: `translateY(calc((100% - 10px) * -${floor}))`,
      }}
      onTransitionEnd={openDoor}
    >
      <div className={clsx(styles.door, isDoorOpen && styles.doorOpen)} />
      <div className={clsx(styles.door, isDoorOpen && styles.doorOpen)} />
    </div>
  )
}

export default Elevator

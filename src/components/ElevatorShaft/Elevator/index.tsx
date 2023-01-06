import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

interface ElevatorProps {
  floor: number
}

function Elevator({ floor }: ElevatorProps) {
  const prevFloor = useRef(0)

  function synchronizeFloorState() {
    prevFloor.current = Math.max(0, floor)
  }

  useEffect(() => {
    synchronizeFloorState()
  })

  return (
    <div
      className={styles.root}
      style={{
        transform: `translateY(calc((100% - 10px) * -${floor}))`,
      }}
      onTransitionEnd={(...args) => console.log(...args)}
    >
      <div className={styles.door} />
      <div className={styles.door} />
    </div>
  )
}

export default Elevator

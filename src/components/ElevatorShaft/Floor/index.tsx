import styles from './styles.module.scss'

interface FloorProps {
  index: number
  onCallDown?: (index: number) => void
  onCallUp?: (index: number) => void
}

function Floor({ index, onCallDown, onCallUp }: FloorProps) {
  return (
    <div className={styles.root}>
      <div className={styles.ground} />
      <div className={styles.walls} />

      <div className={styles.panel}>
        <span>{index}</span>

        {onCallUp && (
          <button
            className={styles.btnUp}
            tabIndex={-1}
            type="button"
            onClick={() => onCallUp(index)}
            aria-label="Call elevator to go up"
          />
        )}

        {onCallDown && (
          <button
            className={styles.btnDown}
            tabIndex={-1}
            type="button"
            onClick={() => onCallDown(index)}
            aria-label="Call elevator to go down"
          />
        )}
      </div>
    </div>
  )
}

export default Floor

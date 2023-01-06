import styles from './styles.module.scss'

interface FloorProps {
  name: string
  onGoDownCall?: () => void
  onGoUpCall?: () => void
}

function Floor({ onGoDownCall, onGoUpCall, name }: FloorProps) {
  return (
    <div className={styles.root}>
      <div className={styles.ground} />
      <div className={styles.walls} />

      <div className={styles.panel}>
        <span>{name}</span>

        {onGoUpCall && (
          <button
            className={styles.btnUp}
            tabIndex={-1}
            type="button"
            onClick={onGoUpCall}
            aria-label="Call elevator to go up"
          />
        )}

        {onGoDownCall && (
          <button
            className={styles.btnDown}
            tabIndex={-1}
            type="button"
            onClick={onGoDownCall}
            aria-label="Call elevator to go down"
          />
        )}
      </div>
    </div>
  )
}

export default Floor

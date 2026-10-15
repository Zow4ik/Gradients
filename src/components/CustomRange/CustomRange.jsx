import { useState, useRef } from 'react'
import styles from './CustomRange.module.scss'

function CustomRange() {
  const initial_stops = [
    { id: '1', color: '#FF6B6B', position: 0 },
    { id: '2', color: '#FFA07A', position: 25 },
    { id: '3', color: '#6E40C9', position: 65 },
    { id: '4', color: '#1F6FEB', position: 100 },
  ]

  const [stops, setStops] = useState(initial_stops)
  const trackRef = useRef(null)
  const dragRef = useRef(null)

  const onPointerDown = (event, id) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = id
  }

  const onPointerMove = (event) => {
    if (!dragRef.current || !trackRef.current) return

    const rect = trackRef.current.getBoundingClientRect()
    const raw = ((event.clientX - rect.left) / rect.width) * 100

    setStops((prev) => {
      const index = prev.findIndex((s) => s.id === dragRef.current)
      if (index === -1) return prev

      const MIN_GAP = 2

      const minPos = index > 0 ? prev[index - 1].position + MIN_GAP : 0
      const maxPos =
        index < prev.length - 1 ? prev[index + 1].position - MIN_GAP : 100

      const clamped = Math.max(minPos, Math.min(maxPos, Math.round(raw)))

      return prev.map((s) =>
        s.id === dragRef.current ? { ...s, position: clamped } : s
      )
    })
  }

  const onPointerUp = (event) => {
    event.currentTarget.releasePointerCapture(event.pointerId)
    dragRef.current = null
  }

  const stopsStr = stops
    .map((s) => `${s.color} ${s.position}%`)
    .join(', ')

  return (
    <div className={styles.editor} ref={trackRef}>
      <div
        className={styles.track}
        style={{ background: `linear-gradient(90deg, ${stopsStr})` }}
      />
      {stops.map((stop) => (
        <div
          key={stop.id}
          className={styles.handle}
          style={{
            left: `${stop.position}%`,
            background: stop.color,
          }}
          onPointerDown={(event) => onPointerDown(event, stop.id)}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <span className={styles.grip} />
        </div>
      ))}
    </div>
  )
}

export default CustomRange
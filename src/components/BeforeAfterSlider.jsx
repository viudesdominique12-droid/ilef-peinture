import { useState, useRef, useCallback, useEffect } from 'react'

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
}) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const containerRef = useRef(null)

  const getPosition = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    return Math.max(2, Math.min(98, (x / rect.width) * 100))
  }, [])

  const handleMove = useCallback((clientX) => {
    if (!isDragging) return
    setPosition(getPosition(clientX))
  }, [isDragging, getPosition])

  const handleStart = useCallback((clientX) => {
    setIsDragging(true)
    setHasInteracted(true)
    setPosition(getPosition(clientX))
  }, [getPosition])

  const handleEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Mouse events
  const onMouseDown = (e) => {
    e.preventDefault()
    handleStart(e.clientX)
  }

  useEffect(() => {
    const onMouseMove = (e) => handleMove(e.clientX)
    const onMouseUp = () => handleEnd()

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [isDragging, handleMove, handleEnd])

  // Touch events
  const onTouchStart = (e) => {
    handleStart(e.touches[0].clientX)
  }
  const onTouchMove = (e) => {
    if (!isDragging) return
    setPosition(getPosition(e.touches[0].clientX))
  }
  const onTouchEnd = () => handleEnd()

  // Subtle intro animation
  useEffect(() => {
    if (hasInteracted) return
    const timeout = setTimeout(() => {
      let start = null
      const duration = 1800
      const animate = (ts) => {
        if (!start) start = ts
        const progress = (ts - start) / duration
        if (progress < 1) {
          // Gentle ease: slide from 50 -> 35 -> 65 -> 50
          const t = progress
          const wave = Math.sin(t * Math.PI * 2) * 15
          setPosition(50 + wave)
          requestAnimationFrame(animate)
        } else {
          setPosition(50)
        }
      }
      requestAnimationFrame(animate)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [hasInteracted])

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role="slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Comparaison avant après"
    >
      {/* After image (background, full) */}
      <div className="ba-layer ba-after">
        <img src={afterSrc} alt="Après rénovation" draggable={false} />
      </div>

      {/* Before image (clipped) */}
      <div
        className="ba-layer ba-before"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={beforeSrc} alt="Avant rénovation" draggable={false} />
      </div>

      {/* Divider line */}
      <div className="ba-divider" style={{ left: `${position}%` }}>
        <div className="ba-line" />

        {/* Handle */}
        <div className={`ba-handle ${isDragging ? 'ba-handle-active' : ''}`}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="2" fill="rgba(0,0,0,0.3)" />
            <path d="M10 10L6 14L10 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 10L22 14L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div
        className={`ba-label ba-label-before ${position < 15 ? 'ba-label-hidden' : ''}`}
        style={{ right: `${100 - position + 3}%` }}
      >
        {beforeLabel}
      </div>
      <div
        className={`ba-label ba-label-after ${position > 85 ? 'ba-label-hidden' : ''}`}
        style={{ left: `${position + 3}%` }}
      >
        {afterLabel}
      </div>

      {/* Hint overlay — only before interaction */}
      {!hasInteracted && (
        <div className="ba-hint">
          <span>Glissez pour comparer</span>
        </div>
      )}
    </div>
  )
}

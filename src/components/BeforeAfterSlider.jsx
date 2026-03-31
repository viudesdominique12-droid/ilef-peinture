import { useState, useEffect, useRef, useCallback } from 'react'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc }) {
  const isMobile = useIsMobile()
  const [phase, setPhase] = useState('waiting')
  const [revealProgress, setRevealProgress] = useState(0)
  const [interactivePos, setInteractivePos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)
  const rafRef = useRef(null)
  const loopRef = useRef(null)

  // Initial reveal animation
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setPhase('revealing')
      const startTime = performance.now()
      const duration = 2200

      const animate = (now) => {
        const elapsed = now - startTime
        const t = Math.min(elapsed / duration, 1)
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        setRevealProgress(eased * 100)

        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate)
        } else {
          setPhase('revealed')
          setTimeout(() => setPhase('interactive'), 600)
        }
      }
      rafRef.current = requestAnimationFrame(animate)
    }, 1000)

    return () => {
      clearTimeout(startDelay)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Mobile: auto-loop breathing animation when not dragging
  useEffect(() => {
    if (!isMobile || phase !== 'interactive' || isDragging) {
      if (loopRef.current) cancelAnimationFrame(loopRef.current)
      return
    }

    const startTime = performance.now()
    const loop = (now) => {
      const elapsed = (now - startTime) / 1000
      // Smooth sine wave: oscillates between 25% and 75% over 4 seconds
      const pos = 50 + Math.sin(elapsed * Math.PI / 2) * 25
      setInteractivePos(pos)
      loopRef.current = requestAnimationFrame(loop)
    }
    loopRef.current = requestAnimationFrame(loop)

    return () => { if (loopRef.current) cancelAnimationFrame(loopRef.current) }
  }, [isMobile, phase, isDragging])

  // Touch drag for mobile
  const handleTouchStart = useCallback((e) => {
    if (phase !== 'interactive') return
    setIsDragging(true)
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setInteractivePos(Math.max(2, Math.min(98, x)))
  }, [phase])

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setInteractivePos(Math.max(2, Math.min(98, x)))
  }, [isDragging])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Desktop: mouse hover
  const handleMouseMove = useCallback((e) => {
    if (phase !== 'interactive' || isMobile) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setInteractivePos(Math.max(0, Math.min(100, x)))
  }, [phase, isMobile])

  // Determine clip position based on phase
  let clipPos
  if (phase === 'waiting') {
    clipPos = 0
  } else if (phase === 'revealing') {
    clipPos = revealProgress
  } else if (phase === 'interactive') {
    if (isMobile || isHovering || isDragging) {
      clipPos = interactivePos
    } else {
      clipPos = 100 // Desktop, not hovering: show full "after"
    }
  } else {
    clipPos = revealProgress
  }

  const showRoller = phase === 'revealing' || (phase === 'interactive' && (isMobile || isHovering || isDragging))

  return (
    <div
      ref={containerRef}
      className="ba-hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* AFTER image */}
      <div className="ba-hero-layer">
        <img src={afterSrc} alt="Après rénovation" draggable={false} />
      </div>

      {/* BEFORE image — clipped */}
      <div
        className="ba-hero-layer ba-hero-before"
        style={{ clipPath: `inset(0 ${clipPos}% 0 0)` }}
      >
        <img src={beforeSrc} alt="Avant rénovation" draggable={false} />
        <div className="absolute inset-0 bg-charcoal/15" />
      </div>

      {/* Paint roller */}
      {showRoller && (
        <div className="ba-roller" style={{ left: `${clipPos}%` }}>
          <div className="ba-roller-shaft">
            <div className="ba-roller-cylinder">
              <div className="ba-roller-texture" />
            </div>
            <div className="ba-roller-handle" />
          </div>
        </div>
      )}

      {/* Edge glow */}
      <div
        className="ba-edge-glow"
        style={{
          left: `${clipPos}%`,
          opacity: showRoller ? 1 : 0,
        }}
      />

      {/* Labels */}
      {phase !== 'waiting' && (
        <>
          <div
            className="ba-hero-label"
            style={{
              opacity: clipPos > 12 && clipPos < 95 ? 1 : 0,
              right: `${100 - clipPos + 3}%`,
            }}
          >
            Avant
          </div>
          <div
            className="ba-hero-label"
            style={{
              opacity: clipPos > 5 && clipPos < 88 ? 1 : 0,
              left: `${clipPos + 3}%`,
            }}
          >
            Après
          </div>
        </>
      )}

      {/* Mobile touch hint */}
      {isMobile && phase === 'interactive' && !isDragging && (
        <div className="ba-hero-hint">
          <span>Glissez avec le doigt</span>
        </div>
      )}

      {/* Desktop hover hint */}
      {!isMobile && phase === 'interactive' && !isHovering && (
        <div className="ba-hero-hint">
          <span>Survolez pour comparer</span>
        </div>
      )}
    </div>
  )
}

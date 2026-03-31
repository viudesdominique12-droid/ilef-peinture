import { useState, useEffect, useRef } from 'react'

export default function BeforeAfterSlider({ beforeSrc, afterSrc }) {
  const [phase, setPhase] = useState('waiting') // waiting -> revealing -> revealed -> interactive
  const [revealProgress, setRevealProgress] = useState(0)
  const [mouseX, setMouseX] = useState(50)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)
  const rafRef = useRef(null)

  // Auto-reveal animation on mount
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setPhase('revealing')
      const startTime = performance.now()
      const duration = 2400

      const animate = (now) => {
        const elapsed = now - startTime
        const t = Math.min(elapsed / duration, 1)
        // Easing: cubic bezier approximation for cinematic feel
        const eased = t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2
        setRevealProgress(eased * 100)

        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate)
        } else {
          setPhase('revealed')
          // After a pause, enable interactive mode
          setTimeout(() => setPhase('interactive'), 800)
        }
      }
      rafRef.current = requestAnimationFrame(animate)
    }, 1200)

    return () => {
      clearTimeout(startDelay)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Mouse tracking for interactive phase
  const handleMouseMove = (e) => {
    if (phase !== 'interactive') return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setMouseX(Math.max(0, Math.min(100, x)))
  }

  const handleTouchMove = (e) => {
    if (phase !== 'interactive') return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setMouseX(Math.max(0, Math.min(100, x)))
  }

  // Calculate the clip position
  const clipPos = phase === 'interactive' && isHovering ? mouseX : phase === 'waiting' ? 0 : revealProgress

  return (
    <div
      ref={containerRef}
      className="ba-hero"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* AFTER image — the beautiful result (base layer) */}
      <div className="ba-hero-layer">
        <img src={afterSrc} alt="Après rénovation" draggable={false} />
      </div>

      {/* BEFORE image — the old room (top layer, gets clipped away) */}
      <div
        className="ba-hero-layer ba-hero-before"
        style={{ clipPath: `inset(0 ${clipPos}% 0 0)` }}
      >
        <img src={beforeSrc} alt="Avant rénovation" draggable={false} />
        {/* Dark tint on before */}
        <div className="absolute inset-0 bg-charcoal/20" />
      </div>

      {/* 3D Paint roller element that follows the reveal edge */}
      {(phase === 'revealing' || (phase === 'interactive' && isHovering)) && (
        <div
          className="ba-roller"
          style={{ left: `${clipPos}%` }}
        >
          <div className="ba-roller-shaft">
            <div className="ba-roller-cylinder">
              <div className="ba-roller-texture" />
            </div>
            <div className="ba-roller-handle" />
          </div>
        </div>
      )}

      {/* Edge glow line */}
      <div
        className="ba-edge-glow"
        style={{
          left: `${clipPos}%`,
          opacity: phase === 'waiting' ? 0 : phase === 'revealed' && !isHovering ? 0 : 1,
        }}
      />

      {/* Labels */}
      {(phase === 'revealing' || phase === 'interactive') && (
        <>
          <div
            className="ba-hero-label ba-hero-label-left"
            style={{
              opacity: clipPos > 15 && clipPos < 95 ? 1 : 0,
              right: `${100 - clipPos + 4}%`,
            }}
          >
            Avant
          </div>
          <div
            className="ba-hero-label ba-hero-label-right"
            style={{
              opacity: clipPos > 5 && clipPos < 85 ? 1 : 0,
              left: `${clipPos + 4}%`,
            }}
          >
            Après
          </div>
        </>
      )}

      {/* Interactive hint after reveal */}
      {phase === 'interactive' && !isHovering && (
        <div className="ba-hero-hint">
          <span>Survolez pour comparer</span>
        </div>
      )}
    </div>
  )
}

import { useState, useRef, useEffect, useCallback } from 'react'

export default function Coverflow({ images, onSelect }) {
  const [active, setActive] = useState(0)
  const scrollRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const c = () => setIsMobile(window.innerWidth < 768)
    c()
    window.addEventListener('resize', c)
    return () => window.removeEventListener('resize', c)
  }, [])

  const go = useCallback((dir) => {
    setActive(prev => Math.max(0, Math.min(images.length - 1, prev + dir)))
  }, [images.length])

  // Mobile: horizontal scroll snap
  const handleScroll = useCallback(() => {
    if (!scrollRef.current || !isMobile) return
    const el = scrollRef.current
    const itemW = el.firstChild?.offsetWidth || 200
    const gap = 12
    const idx = Math.round(el.scrollLeft / (itemW + gap))
    setActive(idx)
  }, [isMobile])

  // Desktop: keyboard
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [go])

  if (isMobile) {
    // Mobile: simple horizontal scroll snap
    return (
      <div className="coverflow-mobile-wrapper">
        <div
          ref={scrollRef}
          className="coverflow-mobile"
          onScroll={handleScroll}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="coverflow-mobile-item"
              onClick={() => onSelect?.(i)}
            >
              <img src={img.src} alt={`Réalisation ${i + 1}`} draggable={false} />
            </div>
          ))}
        </div>
        <div className="coverflow-dots">
          {images.map((_, i) => (
            <span key={i} className={`coverflow-dot ${i === active ? 'coverflow-dot-active' : ''}`} />
          ))}
        </div>
      </div>
    )
  }

  // Desktop: 3D coverflow
  return (
    <div className="coverflow-wrapper">
      {/* Navigation arrows */}
      <button onClick={() => go(-1)} className="coverflow-arrow coverflow-arrow-left" aria-label="Précédent">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <button onClick={() => go(1)} className="coverflow-arrow coverflow-arrow-right" aria-label="Suivant">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>

      <div className="coverflow-stage">
        {images.map((img, i) => {
          const offset = i - active
          const absOff = Math.abs(offset)
          const isActive = offset === 0

          const tx = offset * 220
          const ry = offset > 0 ? -45 : offset < 0 ? 45 : 0
          const tz = isActive ? 80 : -50 * absOff
          const sc = isActive ? 1 : Math.max(0.65, 1 - absOff * 0.15)
          const op = absOff > 3 ? 0 : isActive ? 1 : Math.max(0.4, 1 - absOff * 0.25)
          const z = 100 - absOff

          return (
            <div
              key={i}
              className={`coverflow-item ${isActive ? 'coverflow-item-active' : ''}`}
              style={{
                transform: `translateX(${tx}px) perspective(1000px) rotateY(${ry}deg) translateZ(${tz}px) scale(${sc})`,
                opacity: op,
                zIndex: z,
              }}
              onClick={() => {
                if (isActive) onSelect?.(i)
                else setActive(i)
              }}
            >
              <img src={img.src} alt={`Réalisation ${i + 1}`} draggable={false} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { useRef, useState, useCallback, useEffect } from 'react'

function useIsMobile() {
  const [m, setM] = useState(false)
  useEffect(() => {
    const c = () => setM(window.innerWidth < 768)
    c()
    window.addEventListener('resize', c)
    return () => window.removeEventListener('resize', c)
  }, [])
  return m
}

export default function Tilt3DCard({ children, className = '', intensity = 12 }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})
  const isMobile = useIsMobile()

  const handleMove = useCallback((e) => {
    if (isMobile) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - y) * intensity
    const rotateY = (x - 0.5) * intensity
    // Glare position
    const glareX = x * 100
    const glareY = y * 100

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
      '--glare-x': `${glareX}%`,
      '--glare-y': `${glareY}%`,
      '--glare-opacity': '1',
    })
  }, [isMobile, intensity])

  const handleLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      '--glare-x': '50%',
      '--glare-y': '50%',
      '--glare-opacity': '0',
    })
  }, [])

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
      {/* Glare overlay — desktop only */}
      {!isMobile && <div className="tilt-glare" />}
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'

export function useGrayscaleReveal(threshold = 0.3) {
  const ref = useRef(null)
  const [isColor, setIsColor] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsColor(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isColor }
}

import { useScrollReveal } from '../hooks/useScrollReveal'

export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  threshold = 0.15,
}) {
  const { ref, isInView } = useScrollReveal(threshold)

  const delayStyle = delay ? { transitionDelay: `${delay}s`, animationDelay: `${delay}s` } : {}

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${isInView ? 'revealed' : ''} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  )
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`stagger-container ${isInView ? 'revealed' : ''} ${className}`}
      style={{ '--stagger-delay': `${staggerDelay}s` }}
    >
      {children}
    </div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <div className={`stagger-item ${className}`}>
      {children}
    </div>
  )
}

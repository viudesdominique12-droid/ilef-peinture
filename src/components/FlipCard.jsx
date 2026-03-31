import { useState } from 'react'

export default function FlipCard({ frontContent, backContent, className = '' }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`flip-card-container ${className}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card-inner ${flipped ? 'flip-card-flipped' : ''}`}>
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  )
}

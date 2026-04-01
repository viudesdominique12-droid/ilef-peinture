import { useGrayscaleReveal } from '../hooks/useGrayscaleReveal'

export default function RevealImage({ src, alt = '', className = '', aspect = 'aspect-[4/3]' }) {
  const { ref, isColor } = useGrayscaleReveal(0.25)

  return (
    <div ref={ref} className={`overflow-hidden rounded-md ${aspect} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover img-bw ${isColor ? 'img-color' : ''} transition-transform duration-700 hover:scale-105`}
        loading="lazy"
      />
    </div>
  )
}

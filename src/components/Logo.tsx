interface LogoProps {
  size?: number
  color?: string
  animated?: boolean
  className?: string
}

export default function Logo({ size = 48, color = '#ffffff', animated = false, className = '' }: LogoProps) {
  const rings = [42, 36, 30, 24, 19, 14, 10, 6, 3]

  return (
    <svg
      width={size}
      height={size}
      viewBox="-5 -5 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'logo-float' : ''} ${className}`}
    >
      {rings.map((r, i) => (
        <circle
          key={r}
          cx="45"
          cy="50"
          r={r}
          stroke={color}
          strokeWidth={r > 20 ? 1.2 : 1}
          fill="none"
          opacity={animated ? undefined : 1}
          style={
            animated
              ? {
                  animation: `pulse-ring 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }
              : undefined
          }
        />
      ))}
    </svg>
  )
}

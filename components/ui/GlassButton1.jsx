'use client'

export default function GlassButton({
  text,
  active = false,
  onClick,
  className = '',
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-[254px] h-[60px]
        flex items-center justify-start
        px-6
        rounded-xl
        transition-all duration-200
        text-[16px] leading-[120%] tracking-[-0.02em]

        ${
          active
            ? 'text-black border-transparent'
            : 'text-[#27272799] bg-transparent border border-black/30 hover:border-black/60'
        }

        ${className}
      `}
      style={
        active
          ? {
              background:
                'linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)',
            }
          : {}
      }
    >
      {text}
    </button>
  )
}

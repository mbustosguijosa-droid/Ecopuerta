/**
 * Nuevo logotipo de Ecopuerta Factory.
 * Monograma: una puerta de arco (el oficio) de la que brota un brote verde (lo "eco",
 * y un guiño a la rama del logo original).
 */
export function LogoMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M13 43V17.5a11 11 0 0 1 22 0V43"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M9 43h30" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M24 43V25" stroke="#6BCB85" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 32c-6 0-8.5-4.2-8-9 5.2.1 8 3.5 8 9Z" fill="#3FA45B" />
      <path d="M24 28.5c4.8 0 7-3.5 6.6-7.5-4.3 0-6.6 2.8-6.6 7.5Z" fill="#6BCB85" />
      <circle cx="30.5" cy="34" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function LogoLockup({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 text-white" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-2xl tracking-[-0.01em]">Ecopuerta</span>
        <span className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-eco-light">
          Factory
        </span>
      </span>
    </span>
  )
}

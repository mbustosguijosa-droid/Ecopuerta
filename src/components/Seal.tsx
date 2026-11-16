import { LogoMark } from './Logo'

/** Sello circular que gira despacio: "Taller familiar · Desde 2007 · +30 años de oficio". */
export default function Seal({ className = '' }: { className?: string }) {
  const text = 'DESDE 2007 · TALLER FAMILIAR · 30 AÑOS DE OFICIO · '
  return (
    <div className={`relative ${className}`} role="img" aria-label="Taller familiar desde 2007, más de 30 años de oficio">
      <svg viewBox="0 0 200 200" className="seal-spin h-full w-full" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M100 100 m-76 0 a76 76 0 1 1 152 0 a76 76 0 1 1 -152 0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="#ffffff" strokeOpacity="0.12" />
        <text className="font-body" fill="#ffffff" fillOpacity="0.7" fontSize="12.5" fontWeight="500">
          <textPath href="#seal-circle" textLength="462" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <LogoMark className="h-[34%] w-[34%] text-white/90" />
      </div>
    </div>
  )
}

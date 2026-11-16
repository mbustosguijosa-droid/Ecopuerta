import { LogoLockup } from './Logo'
import { NAV_LINKS } from './Nav'
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from '../data'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20 py-14 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4">
          <LogoLockup />
          <p className="text-sm font-body font-light text-white/60 max-w-xs">
            Carpintería, montaje e instalación a medida. Taller familiar desde 2007.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-body text-white/70">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-eco-light transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#presupuesto" className="hover:text-eco-light transition-colors">
            Presupuesto
          </a>
        </nav>
        <div className="flex flex-col gap-2 text-sm font-body text-white/70">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-eco-light transition-colors">
            {CONTACT_EMAIL}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-eco-light transition-colors">
            Instagram
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:text-eco-light transition-colors">
            Facebook
          </a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs font-body text-white/40">
        © 2007–{new Date().getFullYear()} Ecopuerta Factory
      </p>
    </footer>
  )
}

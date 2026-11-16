import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { Section, SectionHeader, reveal } from './ui'
import { ArrowUpRight, FacebookIcon, InstagramIcon, MailIcon } from './Icons'
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from '../data'

const TYPES = ['Puertas de interior', 'Puerta de entrada / seguridad', 'Armario o vestidor', 'Cerramientos PVC / aluminio', 'Otro']

/**
 * Formulario provisional: prepara un correo con los datos rellenos.
 * (Más adelante se puede guardar en Supabase o enviar directamente.)
 */
export default function Quote() {
  const [types, setTypes] = useState<string[]>([])
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggle = (t: string) => setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]))

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = [
      `Nombre: ${f.get('nombre')}`,
      f.get('telefono') ? `Teléfono: ${f.get('telefono')}` : null,
      f.get('zona') ? `Zona: ${f.get('zona')}` : null,
      types.length ? `Me interesa: ${types.join(', ')}` : null,
      '',
      String(f.get('mensaje') || ''),
    ]
      .filter((l) => l !== null)
      .join('\n')
    const subject = `Presupuesto · ${types[0] ?? 'Consulta'} · ${f.get('nombre')}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* sin portapapeles: no pasa nada */
    }
  }

  const field =
    'w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-[15px] font-body text-white placeholder:text-white/35 outline-none transition-colors focus:border-eco-light/70 focus:bg-white/[0.06]'

  return (
    <Section id="presupuesto" className="bg-gradient-to-b from-black via-[#07120b] to-black">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-start">
        <div>
          <SectionHeader
            label="Contacto"
            intro="Cuéntanos qué necesitas y te preparamos un presupuesto sin compromiso. Te respondemos personalmente, como siempre."
          >
            Hablemos de
            <br />
            tu <span className="em">proyecto</span>
          </SectionHeader>

          <motion.div {...reveal} className="mt-10 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black font-body hover:bg-eco-light transition-colors"
              >
                <MailIcon className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
              <button
                type="button"
                onClick={copy}
                className="liquid-glass rounded-full px-4 py-2.5 text-sm font-body text-white/85 hover:text-eco-light transition-colors"
              >
                {copied ? 'Copiado ✓' : 'Copiar correo'}
              </button>
            </div>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Ecopuerta Factory"
                className="liquid-glass h-11 w-11 rounded-full flex items-center justify-center hover:text-eco-light transition-colors"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de Ecopuerta Factory"
                className="liquid-glass h-11 w-11 rounded-full flex items-center justify-center hover:text-eco-light transition-colors"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.form {...reveal} onSubmit={onSubmit} className="liquid-glass rounded-[1.5rem] p-6 md:p-8 flex flex-col gap-5">
          <fieldset>
            <legend className="text-sm font-body text-white/70 mb-3">¿Qué necesitas?</legend>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => {
                const on = types.includes(t)
                return (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(t)}
                    className={`rounded-full px-4 py-2 text-sm font-body transition-colors border ${
                      on ? 'bg-eco text-white border-eco' : 'border-white/15 text-white/80 hover:border-white/40'
                    }`}
                  >
                    {t}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-body text-white/70">Nombre</span>
              <input name="nombre" required autoComplete="name" className={field} placeholder="Tu nombre" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-body text-white/70">Teléfono (opcional)</span>
              <input name="telefono" type="tel" autoComplete="tel" className={field} placeholder="600 000 000" />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-body text-white/70">Localidad (opcional)</span>
            <input name="zona" autoComplete="address-level2" className={field} placeholder="¿Dónde es la obra?" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-body text-white/70">Cuéntanos un poco</span>
            <textarea
              name="mensaje"
              required
              rows={4}
              className={`${field} resize-none`}
              placeholder="Medidas aproximadas, acabado que te gusta, plazos…"
            />
          </label>

          <button
            type="submit"
            className="mt-1 self-start inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black font-body hover:bg-eco-light transition-colors"
          >
            Enviar solicitud
            <ArrowUpRight className="h-4 w-4" />
          </button>
          {sent && (
            <p className="text-sm font-body text-white/70" role="status">
              Se abrirá tu aplicación de correo con el mensaje preparado. Si no se abre, escríbenos a{' '}
              <span className="text-eco-light">{CONTACT_EMAIL}</span>.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  )
}

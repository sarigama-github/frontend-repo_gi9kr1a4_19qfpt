import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight, Dribbble, Github } from 'lucide-react'

const BG_START = '#050609'
const BG_END = '#111318'
const TEXT = '#E5E5E5'
const YELLOW = '#FFD347'
const CYAN = '#3FD3FF'
const MAGENTA = '#FF4FA8'
const ORANGE = '#FF8A3C'
const LIME = '#B8FF60'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
}

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

function RibbonTicker() {
  return (
    <div className="relative w-full overflow-hidden select-none" aria-hidden>
      <div className="pointer-events-none absolute inset-0" style={{
        boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset'
      }} />
      <div className="group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="whitespace-nowrap flex gap-12 py-3 px-4 bg-[rgb(10,12,16)] border-y border-white/5">
          <div className="animate-[ticker_22s_linear_infinite] group-hover:[animation-duration:14s] will-change-transform flex items-center gap-12">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12 text-[0.9rem] tracking-[0.18em] font-semibold uppercase" style={{ color: TEXT }}>
                <Label text="Decorator" color={YELLOW} />
                <Dot />
                <Label text="Cable Tamer" color={CYAN} />
                <Dot />
                <Label text="Apple Aficionado" color={MAGENTA} />
                <Dot />
                <Label text="Rectangle Addict" color={ORANGE} />
                <Dot />
                <Label text="Kerning Whisperer" color={LIME} />
                <Dot />
                <Label text="Loop Enthusiast" color={YELLOW} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}

function Label({ text, color }) {
  return (
    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/0" style={{ color }}>{text}</span>
  )
}

function Dot() {
  return <span className="opacity-40" style={{ color: TEXT }}>•</span>
}

function Avatar() {
  return (
    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center text-sm font-semibold" style={{ color: TEXT }}>
      JD
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 24px rgba(255,255,255,0.06)' }} />
    </div>
  )
}

function Section({ children }) {
  return (
    <section className="relative px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
      {children}
    </section>
  )
}

function Hero() {
  return (
    <div className="relative min-h-[92vh] grid content-between" style={{ background: `radial-gradient(1200px_600px_at_10%_0%,rgba(255,255,255,0.05),transparent), radial-gradient(900px_420px_at_90%_20%,rgba(255,255,255,0.03),transparent), ${BG_START}` }}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${BG_START}, ${BG_END})` }} />

      <Section>
        <motion.div initial="hidden" animate="show" variants={container} className="max-w-5xl">
          <motion.p variants={item} className="text-xs tracking-[0.22em] uppercase text-white/60 mb-6">Brand & Visual Designer</motion.p>

          <motion.h1 variants={item} className="font-extrabold uppercase leading-[1.1] tracking-[-0.02em]" style={{ fontSize: 'clamp(3.2rem, 5vw, 4.8rem)', color: TEXT }}>
            I DESIGN <span style={{ color: YELLOW }}>IDENTITIES</span><br />
            THAT TURN <span style={{ color: CYAN }}>BRANDS</span><br />
            INTO <span style={{ color: MAGENTA }}>FANS</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-[1rem] leading-relaxed text-white/80">
            Loud, opinionated, and meticulously crafted. I build bold systems that scale across motion, product, and the messy real world.
          </motion.p>
        </motion.div>
      </Section>

      <div className="relative -mt-10 rotate-[-1deg]">
        <RibbonTicker />
      </div>

      <Section>
        <div className="flex items-end justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-4">
            <Avatar />
            <div className="text-sm">
              <p className="text-white/80">Hi, I’m Jamie. I obsess over grids, naming, and the perfect 8px.</p>
              <div className="mt-2 flex items-center gap-3 text-white/70">
                <a className="hover:text-white transition-colors" href="#" aria-label="Instagram"><Instagram size={16} /></a>
                <a className="hover:text-white transition-colors" href="#" aria-label="Twitter"><Twitter size={16} /></a>
                <a className="hover:text-white transition-colors" href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
                <a className="hover:text-white transition-colors" href="#contact" aria-label="Email"><Mail size={16} /></a>
              </div>
            </div>
          </motion.div>
          <motion.a href="#work" className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-colors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            See work <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </Section>
    </div>
  )
}

function About() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="space-y-4">
          <h2 className="text-[0.8rem] tracking-[0.22em] uppercase text-white/60">About</h2>
          <p className="text-xl sm:text-2xl leading-snug font-semibold" style={{ color: TEXT }}>
            Crafting brand experiences at <span style={{ color: ORANGE }}>Studio Radian</span>. Previously <span style={{ color: CYAN }}>North & Pine</span>, <span style={{ color: MAGENTA }}>Kiteworks</span>.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.05 }} className="space-y-5">
          <p className="text-[1rem] leading-relaxed text-white/80">
            I help startups and teams find a visual voice that sticks. From identity to product, I design systems that are expressive, legible, and practical in production.
          </p>
          <div className="flex flex-wrap gap-3">
            <IconButton label="Brand" color={YELLOW} />
            <IconButton label="Systems" color={CYAN} />
            <IconButton label="Motion" color={MAGENTA} />
            <IconButton label="Product" color={ORANGE} />
            <IconButton label="Web" color={LIME} />
          </div>
          <div className="flex items-center gap-3 pt-2">
            <RoundIcon href="#" Icon={Dribbble} />
            <RoundIcon href="#" Icon={Github} />
            <RoundIcon href="#" Icon={Linkedin} />
            <RoundIcon href="#contact" Icon={Mail} />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function IconButton({ label, color }) {
  return (
    <button className="text-xs uppercase tracking-[0.18em] px-3 py-2 rounded-full border transition-all hover:-translate-y-0.5" style={{ borderColor: 'rgba(255,255,255,0.12)', color, boxShadow: '0 0 0 1px rgba(255,255,255,0.02) inset' }}>
      {label}
    </button>
  )
}

function RoundIcon({ Icon, href }) {
  return (
    <a href={href} className="h-10 w-10 rounded-full border border-white/10 hover:border-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5" aria-label="icon">
      <Icon size={18} />
    </a>
  )
}

const projects = [
  { title: 'Monotone', tag: 'Identity', color: YELLOW },
  { title: 'Orbit', tag: 'Product Brand', color: CYAN },
  { title: 'Velvet', tag: 'Art Direction', color: MAGENTA },
  { title: 'Tangent', tag: 'Web', color: ORANGE },
  { title: 'Pollen', tag: 'Campaign', color: LIME },
  { title: 'Nimbus', tag: 'Motion', color: CYAN },
]

function Work() {
  return (
    <Section>
      <div id="work" className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-[0.8rem] tracking-[0.22em] uppercase text-white/60 mb-6">Selected Work</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-[rgb(13,16,20)] hover:border-[rgba(255,255,255,0.25)] transition-all"
              style={{ boxShadow: '0 1px 0 0 rgba(255,255,255,0.05) inset' }}
            >
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }} />
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(135deg, ${p.color}22, transparent 50%), linear-gradient(0deg, rgba(255,255,255,0.04), transparent)`
                }} />
                <div className="absolute inset-0 scale-[1.02] opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: `inset 0 0 0 2px ${p.color}55` }} />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold tracking-[-0.01em]" style={{ color: TEXT }}>{p.title}</h3>
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/60">{p.tag}</span>
                </div>
                <span className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-[0.7rem]" style={{ color: p.color }}>↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section>
      <motion.div id="contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-white/60 mb-4">Let’s Make Noise</p>
        <h3 className="font-extrabold uppercase tracking-[-0.01em] leading-[1.1] mb-8" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: TEXT }}>
          Got a product to brand or a story to tell? Let’s build a cult around it.
        </h3>
        <a href="mailto:hello@jamiedesign.xyz" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] border border-white/10 transition-all hover:-translate-y-0.5" style={{ backgroundColor: ORANGE, color: '#0A0C10' }}>
          Start a project <ArrowUpRight size={18} />
        </a>
      </motion.div>
    </Section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BG_START }}>
      <Hero />
      <About />
      <Work />
      <Contact />
      <footer className="px-6 sm:px-10 lg:px-16 py-10 text-sm text-white/50">© {new Date().getFullYear()} Jamie Design — All wrongs reserved.</footer>
    </div>
  )
}

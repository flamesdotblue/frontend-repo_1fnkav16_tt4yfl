import { motion } from 'framer-motion'
import { Rocket, Layout, Palette, LifeBuoy } from 'lucide-react'

const services = [
  {
    title: 'Book Marketing & Promotion',
    desc: 'Social campaigns, launch strategy, influencer outreach.',
    icon: Rocket
  },
  {
    title: 'Author Website Design',
    desc: 'Custom sites, SEO, email integration, e-commerce for book sales.',
    icon: Layout
  },
  {
    title: 'Book Cover Design & Branding',
    desc: 'Custom covers, author logos, brand palettes.',
    icon: Palette
  },
  {
    title: 'Ongoing Author Support',
    desc: 'Monthly updates, strategy sessions, and long-term growth.',
    icon: LifeBuoy
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm tracking-wide uppercase text-[#C5A773]/80">The Author’s Toolkit</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-serif text-[#F7F5EF]">Services crafted for your story</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-[#C5A773]/20 bg-[#0A0A0A]/40 p-6 md:p-8 shadow-[0_0_0_1px_rgba(197,167,115,0.1)] hover:shadow-[0_8px_40px_rgba(197,167,115,0.12)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-12 w-12 grid place-items-center rounded-full border border-[#C5A773]/30 text-[#C5A773] bg-[#0A0A0A]">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#F7F5EF]">{s.title}</h3>
                  <p className="mt-2 text-[#F7F5EF]/70">{s.desc}</p>
                </div>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C5A773]/60 transition-colors" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block group text-[#0A0A0A] bg-[#C5A773] rounded-full px-6 py-3">
            <span className="font-medium">Let’s Create Something Epic</span>
          </a>
        </div>
      </div>
    </section>
  )
}

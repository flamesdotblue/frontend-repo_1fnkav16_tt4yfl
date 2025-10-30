import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-sm tracking-wide uppercase text-[#C5A773]/80">Our Story</p>
          <h2 className="text-3xl md:text-5xl font-serif text-[#F7F5EF]">We believe every story deserves an audience.</h2>
          <p className="text-[#F7F5EF]/80 leading-relaxed">
            Epic Outreach Promotions helps indie authors take their books from idea to audience — with elegant marketing, purposeful design, and ongoing creative support.
          </p>
          <a href="#contact" className="inline-block group text-[#F7F5EF]">
            <span className="relative">
              <span className="relative z-10">Our Story</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-[#C5A773] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#C5A773]/30 shadow-[0_0_0_1px_rgba(197,167,115,0.15)]">
            <div className="h-full w-full bg-[linear-gradient(135deg,rgba(49,78,96,0.25)_0%,rgba(197,167,115,0.15)_100%)]" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#0A0A0A] border border-[#C5A773]/30 rounded-xl px-4 py-3 shadow-lg">
            <p className="text-sm text-[#F7F5EF]/80 italic">“Writing is the painting of the voice.”</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

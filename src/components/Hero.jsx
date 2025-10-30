import { motion } from 'framer-motion'

const gold = '#C5A773'

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const textItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(197,167,115,0.25) 0%, rgba(10,10,10,0) 70%)' }} />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(49,78,96,0.2) 0%, rgba(10,10,10,0) 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.p variants={textItem} className="tracking-wide uppercase text-xs md:text-sm text-[#C5A773]/80 mb-4">
            Epic Outreach Promotions
          </motion.p>
          <motion.h1
            variants={textItem}
            className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-[#F7F5EF]"
          >
            Helping Authors Turn Words Into Movements.
          </motion.h1>
          <motion.p
            variants={textItem}
            className="mt-6 text-base md:text-lg text-[#F7F5EF]/80 max-w-2xl mx-auto"
          >
            Elegant marketing, design, and digital strategy for independent authors.
          </motion.p>
          <motion.div variants={textItem} className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[#0A0A0A]"
              style={{ backgroundColor: gold }}
            >
              <span className="font-medium">Let’s Begin Your Next Chapter</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#about"
              className="relative inline-flex items-center px-6 py-3 text-[#F7F5EF] group"
            >
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#C5A773] transition-transform duration-300 group-hover:scale-x-100" />
              Our Story
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

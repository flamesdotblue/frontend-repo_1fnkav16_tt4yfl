import { motion } from 'framer-motion'

const steps = [
  { title: 'Discover', body: 'We dive deep into your story, audience, and goals.' },
  { title: 'Design', body: 'We craft visuals and messaging that feel unmistakably yours.' },
  { title: 'Promote', body: 'We launch with strategy, partnerships, and momentum.' },
  { title: 'Grow', body: 'We optimize for continued reach, sales, and impact.' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm tracking-wide uppercase text-[#C5A773]/80">Our Process</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-serif text-[#F7F5EF]">From page to presence</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-[#C5A773]/20 bg-[#0A0A0A]/40 p-6 md:p-7"
            >
              <div className="text-[#C5A773] text-sm tracking-wider">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mt-3 text-xl font-semibold text-[#F7F5EF]">{s.title}</h3>
              <p className="mt-2 text-[#F7F5EF]/70">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

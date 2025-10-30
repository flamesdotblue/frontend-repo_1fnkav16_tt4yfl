import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import Services from './components/Services'
import Process from './components/Process'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F7F5EF] antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-serif text-lg">Epic Outreach Promotions</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#F7F5EF]/80">
            <a href="#services" className="hover:text-[#C5A773] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#C5A773] transition-colors">Process</a>
            <a href="#about" className="hover:text-[#C5A773] transition-colors">About</a>
            <a href="#contact" className="text-[#0A0A0A] bg-[#C5A773] rounded-full px-4 py-2">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <AboutPreview />
        <Services />
        <Process />

        {/* Final CTA */}
        <section id="contact" className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-sm tracking-wide uppercase text-[#C5A773]/80">Let’s Begin</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-serif">Your story is ready to meet the world.</h2>
            <p className="mt-4 text-[#F7F5EF]/80">Expect a reply within 24–48 hours.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <a href="#" className="block rounded-xl border border-[#C5A773]/30 p-4 text-left hover:border-[#C5A773]/60 transition-colors">
                <div className="text-sm text-[#C5A773]/90 mb-1">Email</div>
                <div className="font-medium">hello@epicoutreach.co</div>
              </a>
              <a href="#" className="block rounded-xl border border-[#C5A773]/30 p-4 text-left hover:border-[#C5A773]/60 transition-colors">
                <div className="text-sm text-[#C5A773]/90 mb-1">Consultation</div>
                <div className="font-medium">Book a free 15-minute call →</div>
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[#F7F5EF]/70">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <p className="text-sm text-[#F7F5EF]/60">© {new Date().getFullYear()} Epic Outreach Promotions</p>
          <p className="text-sm text-[#F7F5EF]/60">Elegant strategies for independent authors</p>
        </div>
      </footer>
    </div>
  )
}

export default App

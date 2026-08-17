import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#FA4500' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: '#FF6B35' }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #888888 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border"
          style={{ backgroundColor: 'rgba(250,69,0,0.1)', borderColor: 'rgba(250,69,0,0.3)', color: '#FA4500' }}
        >
          <Sparkles size={12} />
          Digital Agency Based in South Africa
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight text-white mb-6">
          We Build
          <br />
          <span style={{ color: '#FA4500' }}>Digital</span>
          <br />
          Experiences
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#888888' }}>
          Elio is a creative digital agency crafting exceptional websites, brands, and digital products that drive real results for ambitious businesses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: '#FA4500', color: '#FFFFFF' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FF6B35')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FA4500')}
          >
            View Our Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:scale-105"
            style={{ borderColor: '#1A1A1A', color: '#888888' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FA4500'
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1A1A1A'
              e.currentTarget.style.color = '#888888'
            }}
          >
            Start a Project
          </a>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '5+', label: 'Years Experience' },
            { value: '30+', label: 'Happy Clients' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs font-medium" style={{ color: '#888888' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, transparent, #FA4500)' }} />
      </div>
    </section>
  )
}
import { CloudDecoration } from "./cloudDecoration"

export function HeroSection() {
  return (
    <section id="home" className="snap-start min-h-screen flex items-center justify-center animate-fade-in-up">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Lorem <span className="text-amber-400">Ipsum</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-amber-400">Lorem Ipsum</h2>
            <p className="text-lg text-gray-300 max-w-lg">
              Discover the ancient wisdom and modern applications of metaphysical practices. Begin your journey to
              enlightenment today.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-blue-950 font-bold py-3 px-8 rounded-full transition-colors">
              Begin Journey
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-amber-400/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-amber-400/30"></div>
              <div className="absolute inset-8 rounded-full bg-amber-400/50 flex items-center justify-center">
                <span className="text-5xl font-bold text-blue-950">K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <CloudDecoration className="absolute top-1/4 -right-20 w-64 h-auto text-amber-400/30 transform rotate-12" />
      <CloudDecoration className="absolute bottom-1/4 -left-20 w-48 h-auto text-amber-400/20 transform -rotate-12" />

      {/* Background decorative lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-amber-400/50"
            style={{
              left: 0,
              right: 0,
              top: `${20 + i * 15}%`,
              transform: `rotate(${i % 2 ? 1 : -1}deg)`,
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}
